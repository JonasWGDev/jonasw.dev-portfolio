import { Mail, MessageCircle, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(15) 99767-2862",
    href: "https://wa.me/5515997672862?text=Olá! Vim pelo seu portfólio e gostaria de saber mais sobre seus serviços.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@jonasw.dev",
    href: "https://instagram.com/jonasw.dev",
    color: "from-pink-500 to-purple-600",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Vamos <span className="gradient-text">Conversar?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade!
            </p>
          </div>

          {/* Contact Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    Pronto para começar?
                  </h3>
                  <p className="text-muted-foreground">
                    Escolha a forma que preferir para entrar em contato. 
                    Respondo em até 24 horas!
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {method.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right - CTA */}
              <div className="flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse-glow">
                  <Send className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-display text-xl font-semibold mb-2">
                  Solicite um Orçamento
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Clique abaixo e me conte sobre seu projeto. É rápido e sem compromisso!
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5515997672862?text=Olá! Vim pelo seu portfólio e gostaria de solicitar um orçamento.", "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
