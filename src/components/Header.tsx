import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, BookOpen, User, LogOut, Settings, CreditCard, GraduationCap } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gradient-primary">LearnLink</span>
            <span className="text-xs text-muted-foreground -mt-1">Premium Tutoring</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => navigate("/teachers")} className="text-muted-foreground hover:text-primary transition-colors">
            Insegnanti
          </button>
          <button onClick={() => navigate("/premium")} className="text-muted-foreground hover:text-primary transition-colors">
            Premium
          </button>
          {user && (
            <button onClick={() => navigate("/dashboard")} className="text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </button>
          )}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/premium")}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Premium
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate("/auth")}>
                Accedi
              </Button>
              <Button onClick={() => navigate("/auth")}>
                Registrati
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-accent transition-colors"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <button onClick={() => { navigate("/"); setIsMenuOpen(false); }} className="text-muted-foreground hover:text-primary transition-colors text-left">
              Home
            </button>
            <button onClick={() => { navigate("/teachers"); setIsMenuOpen(false); }} className="text-muted-foreground hover:text-primary transition-colors text-left">
              Insegnanti
            </button>
            <button onClick={() => { navigate("/premium"); setIsMenuOpen(false); }} className="text-muted-foreground hover:text-primary transition-colors text-left">
              Premium
            </button>
            {user && (
              <button onClick={() => { navigate("/dashboard"); setIsMenuOpen(false); }} className="text-muted-foreground hover:text-primary transition-colors text-left">
                Dashboard
              </button>
            )}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              {user ? (
                <>
                  <div className="text-sm text-muted-foreground px-2">{user.email}</div>
                  <Button variant="ghost" className="justify-start" onClick={() => { handleSignOut(); setIsMenuOpen(false); }}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="justify-start" onClick={() => { navigate("/auth"); setIsMenuOpen(false); }}>
                    Accedi
                  </Button>
                  <Button className="justify-start" onClick={() => { navigate("/auth"); setIsMenuOpen(false); }}>
                    Registrati
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;