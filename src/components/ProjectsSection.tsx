import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import starbucksImage from "@/assets/starbucks-landing.png";

const projects = [
  {
    id: 1,
    title: "Landing Page Starbucks",
    description: "Landing page criada para treino de habilidades de front-end, com foco em animações e design moderno.",
    category: "landing",
    tags: ["Html", "Css", "Javascript", "Animations - Keyframe", "Codigo limpo"],
    image: starbucksImage,
  },
];

export function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos trabalhos que já realizei para treinar minhas habilidades
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-center gap-2 text-primary"
                    onClick={() => navigate(`/projeto/${project.id}`)}
                  >
                    Ver Detalhes
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
