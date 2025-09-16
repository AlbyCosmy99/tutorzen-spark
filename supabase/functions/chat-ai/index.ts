import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  conversationId?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  );

  try {
    // Authenticate user
    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    const { data: userData } = await supabaseClient.auth.getUser(token);
    const user = userData.user;
    
    if (!user) {
      throw new Error('User not authenticated');
    }

    const { message, conversationId }: ChatRequest = await req.json();
    
    let currentConversationId = conversationId;
    
    // Create or get conversation
    if (!currentConversationId) {
      const { data: conversation, error: convError } = await supabaseClient
        .from('chat_conversations')
        .insert({
          user_id: user.id,
          title: message.substring(0, 50) + (message.length > 50 ? '...' : '')
        })
        .select()
        .single();
        
      if (convError) throw convError;
      currentConversationId = conversation.id;
    }

    // Get conversation history
    const { data: history } = await supabaseClient
      .from('chat_messages')
      .select('role, content')
      .eq('conversation_id', currentConversationId)
      .order('created_at', { ascending: true });

    // Save user message
    await supabaseClient
      .from('chat_messages')
      .insert({
        conversation_id: currentConversationId,
        role: 'user',
        content: message
      });

    // Prepare messages for OpenAI
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: 'Sei un assistente AI specializzato nell\'educazione per la piattaforma LearnLink. Aiuti studenti con domande di studio, spiegazioni di concetti e consigli per l\'apprendimento. Se rilevi che uno studente ha bisogno di aiuto approfondito in una materia specifica, suggerisci gentilmente di cercare un insegnante qualificato sulla piattaforma. Rispondi sempre in italiano in modo chiaro, professionale e incoraggiante.'
      },
      ...(history || []) as ChatMessage[],
      {
        role: 'user',
        content: message
      }
    ];

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!openaiResponse.ok) {
      throw new Error('Errore nella chiamata a OpenAI');
    }

    const openaiData = await openaiResponse.json();
    const aiResponse = openaiData.choices[0]?.message?.content || "Mi dispiace, non sono riuscito a elaborare la tua richiesta.";

    // Save AI response
    await supabaseClient
      .from('chat_messages')
      .insert({
        conversation_id: currentConversationId,
        role: 'assistant',
        content: aiResponse
      });

    return new Response(JSON.stringify({ 
      response: aiResponse, 
      conversationId: currentConversationId 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-ai function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Errore interno del server' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});