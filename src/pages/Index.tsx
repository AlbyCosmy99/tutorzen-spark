import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedTeachers from "../components/FeaturedTeachers";
import WhyChooseUs from "../components/WhyChooseUs";
import AIAssistant from "../components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTeachers />
        <WhyChooseUs />
        <AIAssistant />
      </main>
    </div>
  );
};

export default Index;
