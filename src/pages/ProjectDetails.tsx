import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import starbucksImage from "@/assets/starbucks-landing.png";

const projects = [
  {
    id: 1,
    title: "Landing Page Starbucks",
    description: "Landing page criada para treino de habilidades de front-end.",
    fullDescription: "Landing page desenvolvida como projeto de estudo e treino de habilidades de front-end. O foco principal foi na criação de animações suaves utilizando CSS Keyframes, design moderno e responsivo, além de manter um código limpo e bem organizado. O projeto simula uma página promocional da Starbucks com elementos visuais atrativos e interativos.",
    category: "landing",
    tags: ["Html", "Css", "Javascript", "Animations - Keyframe", "Codigo limpo"],
    features: [
      "Animações suaves com CSS Keyframes",
      "Design moderno e responsivo",
      "Código limpo e organizado",
      "Layout atrativo e profissional",
      "Elementos interativos",
      "Navegação intuitiva"
    ],
    date: "2024",
    image: starbucksImage,
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Button variant="hero" onClick={() => navigate("/")}>
            Voltar ao Início
          </Button>
        </div>
      </div>
    );
  }

  const categoryLabels: Record<string, string> = {
    sites: "Site Institucional",
    sistemas: "Sistema Completo",
    landing: "Landing Page",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="glass-card mx-4 mt-4 rounded-2xl">
          <div className="container flex items-center justify-between py-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <a href="/" className="font-display text-xl font-bold gradient-text">
              JonasW.Dev
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                {categoryLabels[project.category]}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {project.fullDescription}
            </p>
          </div>

          {/* Project Image */}
          <div 
            className="aspect-video rounded-2xl mb-8 overflow-hidden glass-card animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features */}
          <div 
            className="glass-card rounded-2xl p-6 sm:p-8 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="font-display text-xl font-semibold mb-6">
              Funcionalidades
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div 
            className="glass-card rounded-2xl p-6 sm:p-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="font-display text-xl font-semibold mb-6">
              Tecnologias Utilizadas
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div 
            className="text-center mt-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-muted-foreground mb-4">
              Gostou deste projeto? Vamos conversar sobre o seu!
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => navigate("/#contact")}
            >
              Fale Comigo
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
