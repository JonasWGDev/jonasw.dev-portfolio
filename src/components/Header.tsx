import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="glass-card mx-4 mt-4 rounded-2xl">
          <div className="container flex items-center justify-between py-4">
            <a href="#hero" className="font-display text-xl font-bold gradient-text">
              JonasW.Dev
            </a>
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="hero" size="sm" onClick={() => handleNavClick("#contact")}>
                Fale Comigo
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="glass-card mx-4 mt-4 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="font-display text-lg font-bold gradient-text">
              JonasW.Dev
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="text-foreground"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Sidebar */}
        <aside
          className={`absolute top-0 right-0 h-full w-72 glass-card border-l border-border transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="font-display text-lg font-bold gradient-text">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-foreground"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-3 px-4 rounded-lg text-foreground hover:bg-secondary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <Button
                variant="hero"
                className="w-full"
                onClick={() => handleNavClick("#contact")}
              >
                Fale Comigo
              </Button>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
