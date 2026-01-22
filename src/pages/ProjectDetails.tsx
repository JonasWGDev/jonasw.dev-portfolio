import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-commerce Premium",
    description: "Sistema completo de vendas online com gestão de produtos, carrinho e pagamentos integrados.",
    fullDescription: "Um e-commerce robusto desenvolvido para atender às necessidades de negócios modernos. O sistema conta com gestão completa de produtos, categorias, estoque, carrinho de compras inteligente e integração com múltiplos meios de pagamento. A interface foi pensada para proporcionar a melhor experiência de compra para os usuários.",
    category: "sistemas",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Gestão completa de produtos e categorias",
      "Carrinho de compras com persistência",
      "Integração com Stripe para pagamentos",
      "Painel administrativo completo",
      "Sistema de avaliações e reviews",
      "Notificações por email"
    ],
    date: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Clínica Odontológica",
    description: "Site institucional moderno com agendamento online e área do paciente.",
    fullDescription: "Site institucional desenvolvido para uma clínica odontológica de alto padrão. O projeto inclui sistema de agendamento online integrado, área exclusiva do paciente para acompanhamento de tratamentos e histórico de consultas, além de uma apresentação elegante dos serviços oferecidos.",
    category: "sites",
    tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    features: [
      "Sistema de agendamento online",
      "Área do paciente com login",
      "Histórico de consultas e tratamentos",
      "Apresentação de serviços e equipe",
      "Blog com conteúdo sobre saúde bucal",
      "Integração com WhatsApp"
    ],
    date: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Lançamento Imobiliário",
    description: "Landing page de alta conversão para captação de leads em empreendimento de luxo.",
    fullDescription: "Landing page estratégica desenvolvida para o lançamento de um empreendimento imobiliário de alto padrão. O projeto foi focado em alta conversão, com design sofisticado, animações suaves e formulários otimizados para captação de leads qualificados.",
    category: "landing",
    tags: ["React", "GSAP", "Animations", "Responsive"],
    features: [
      "Design premium e sofisticado",
      "Animações e transições suaves",
      "Formulário de captação otimizado",
      "Galeria de imagens do empreendimento",
      "Integração com CRM",
      "Analytics avançado"
    ],
    date: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Sistema de gestão com dashboards interativos e relatórios em tempo real.",
    fullDescription: "Plataforma completa de analytics com dashboards interativos e relatórios em tempo real. O sistema permite visualização de métricas importantes, geração de relatórios personalizados e acompanhamento de KPIs essenciais para a tomada de decisão.",
    category: "sistemas",
    tags: ["React", "TypeScript", "Charts", "REST API", "Tailwind"],
    features: [
      "Dashboards interativos e personalizáveis",
      "Relatórios em tempo real",
      "Exportação de dados (PDF, Excel)",
      "Gráficos e visualizações avançadas",
      "Sistema de alertas e notificações",
      "Controle de acesso por perfil"
    ],
    date: "2023",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Escritório de Advocacia",
    description: "Presença digital profissional com blog jurídico e formulário de contato.",
    fullDescription: "Site institucional elegante desenvolvido para um escritório de advocacia. O projeto transmite credibilidade e profissionalismo, com seções detalhadas sobre áreas de atuação, equipe de advogados, blog com artigos jurídicos e formulário de contato integrado.",
    category: "sites",
    tags: ["WordPress", "Custom Theme", "SEO", "Blog"],
    features: [
      "Design elegante e profissional",
      "Blog jurídico com categorias",
      "Apresentação da equipe",
      "Áreas de atuação detalhadas",
      "Formulário de contato avançado",
      "Otimização para SEO"
    ],
    date: "2023",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Curso Online",
    description: "Landing page para lançamento de infoproduto com countdown e gatilhos mentais.",
    fullDescription: "Landing page de alta conversão desenvolvida para o lançamento de um curso online. O projeto utiliza técnicas avançadas de copywriting, gatilhos mentais estratégicos, countdown para criar urgência e design focado em conversão.",
    category: "landing",
    tags: ["React", "GSAP", "Copywriting", "A/B Testing"],
    features: [
      "Countdown para criar urgência",
      "Gatilhos mentais estratégicos",
      "Depoimentos e prova social",
      "FAQ interativo",
      "Integração com plataforma de pagamento",
      "Pixel de rastreamento"
    ],
    date: "2023",
    liveUrl: "#",
    githubUrl: "#",
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
            className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 flex items-center justify-center glass-card animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-center">
              <Tag className="w-16 h-16 text-primary/50 mx-auto mb-2" />
              <p className="text-muted-foreground">Preview do Projeto</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div 
            className="flex flex-wrap gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button variant="hero" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Ver Projeto Online
            </Button>
            <Button variant="glass" className="gap-2">
              <Github className="w-4 h-4" />
              Ver Código
            </Button>
          </div>

          {/* Features */}
          <div 
            className="glass-card rounded-2xl p-6 sm:p-8 mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
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
            style={{ animationDelay: "0.4s" }}
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
            style={{ animationDelay: "0.5s" }}
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
