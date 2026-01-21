import { useState } from "react";
import { ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "todos" | "sites" | "sistemas" | "landing";

const categories = [
  { id: "todos" as Category, label: "Todos" },
  { id: "sites" as Category, label: "Sites Institucionais" },
  { id: "sistemas" as Category, label: "Sistemas Completos" },
  { id: "landing" as Category, label: "Landing Pages" },
];

const projects = [
  {
    id: 1,
    title: "E-commerce Premium",
    description: "Sistema completo de vendas online com gestão de produtos, carrinho e pagamentos integrados.",
    category: "sistemas",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    id: 2,
    title: "Clínica Odontológica",
    description: "Site institucional moderno com agendamento online e área do paciente.",
    category: "sites",
    tags: ["Next.js", "Tailwind"],
  },
  {
    id: 3,
    title: "Lançamento Imobiliário",
    description: "Landing page de alta conversão para captação de leads em empreendimento de luxo.",
    category: "landing",
    tags: ["React", "Animations"],
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Sistema de gestão com dashboards interativos e relatórios em tempo real.",
    category: "sistemas",
    tags: ["React", "TypeScript", "Charts"],
  },
  {
    id: 5,
    title: "Escritório de Advocacia",
    description: "Presença digital profissional com blog jurídico e formulário de contato.",
    category: "sites",
    tags: ["WordPress", "Custom Theme"],
  },
  {
    id: 6,
    title: "Curso Online",
    description: "Landing page para lançamento de infoproduto com countdown e gatilhos mentais.",
    category: "landing",
    tags: ["React", "GSAP"],
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");

  const filteredProjects =
    activeCategory === "todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Conheça alguns dos trabalhos que já realizei para clientes satisfeitos
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "hero" : "glass"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="text-sm"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <Folder className="w-16 h-16 text-primary/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
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
                  <Button variant="ghost" size="sm" className="w-full justify-center gap-2 text-primary">
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
