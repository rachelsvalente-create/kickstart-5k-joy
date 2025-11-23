import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Heart, Shield, TrendingUp, Users, Zap, Calendar, Trophy } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Progressão Segura",
    description: "Evolua no seu ritmo, sem forçar o corpo além dos limites. Cada treino é planejado para fortalecer, não lesionar."
  },
  {
    icon: Heart,
    title: "Técnica Correta de Respiração",
    description: "Aprenda a respirar de forma eficiente para nunca mais sentir que vai desmaiar no meio da corrida."
  },
  {
    icon: Zap,
    title: "Aquecimento & Alongamento",
    description: "Protocolos específicos que preparam seu corpo e previnem 90% das lesões comuns em iniciantes."
  },
  {
    icon: TrendingUp,
    title: "Plano Progressivo de 8 Semanas",
    description: "Do zero aos 5K com um cronograma testado que respeita sua evolução natural."
  },
  {
    icon: Users,
    title: "Suporte da Comunidade",
    description: "Você não está sozinho. Participe de um grupo exclusivo de corredores iniciantes como você."
  },
  {
    icon: Calendar,
    title: "Treinos Flexíveis",
    description: "Adapte os treinos à sua rotina. 3-4x por semana, sem pressão, sem culpa."
  },
  {
    icon: Trophy,
    title: "Metas Alcançáveis",
    description: "Celebre cada vitória: do primeiro 1K aos 5K completos. Cada passo importa."
  },
  {
    icon: CheckCircle2,
    title: "Método Testado",
    description: "Baseado em ciência do esporte e validado por centenas de corredores que já cruzaram a linha de chegada."
  }
];

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              A Solução Está Mais Perto do Que Você Imagina
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O CorridaKickstart™ elimina as barreiras que te impedem de correr com o sistema completo que você precisa:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">{solution.title}</h3>
                        <p className="text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
