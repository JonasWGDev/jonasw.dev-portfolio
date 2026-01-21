import { Code, Palette, Rocket, Zap } from "lucide-react";

const skills = [
  { icon: Code, title: "Desenvolvimento Web", description: "React, Next.js, TypeScript, Node.js" },
  { icon: Palette, title: "UI/UX Design", description: "Interfaces modernas e intuitivas" },
  { icon: Rocket, title: "Performance", description: "Sites rápidos e otimizados para SEO" },
  { icon: Zap, title: "Soluções Ágeis", description: "Entregas rápidas com qualidade" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="gradient-text">Mim</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça um pouco mais sobre minha jornada e como posso ajudar seu projeto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - About Text */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-4">
                  Olá! Sou Jonas 👋
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Desenvolvedor Full Stack apaixonado por criar experiências digitais 
                    que fazem a diferença. Trabalho com tecnologias modernas para 
                    entregar soluções que combinam design elegante com funcionalidade robusta.
                  </p>
                  <p>
                    Minha missão é ajudar empresas e empreendedores a alcançarem seus 
                    objetivos através de sites e sistemas que realmente funcionam. 
                    Cada projeto é uma oportunidade de criar algo único e impactante.
                  </p>
                  <p>
                    Acredito que um bom desenvolvimento vai além do código: é sobre 
                    entender as necessidades do cliente e traduzí-las em soluções 
                    que geram resultados.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="glass-card rounded-2xl p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
