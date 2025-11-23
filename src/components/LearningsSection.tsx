import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Footprints, Brain, Apple, Shield, Sparkles } from "lucide-react";

const learnings = [
  {
    icon: Footprints,
    title: "Técnica de Corrida Correta",
    description: "Pisada, postura e cadência ideais para correr mais rápido com menos esforço e zero lesões"
  },
  {
    icon: Brain,
    title: "Psicologia da Corrida",
    description: "Como vencer o diálogo interno negativo e manter a motivação nos dias difíceis"
  },
  {
    icon: Apple,
    title: "Nutrição Estratégica",
    description: "O que comer antes, durante e depois dos treinos para máxima energia e recuperação"
  },
  {
    icon: Shield,
    title: "Prevenção Total de Lesões",
    description: "Exercícios de fortalecimento e mobilidade que protegem joelhos, tornozelos e quadril"
  },
  {
    icon: BookOpen,
    title: "Periodização Inteligente",
    description: "Como estruturar treinos, descanso e progressão para evolução constante sem platôs"
  },
  {
    icon: Sparkles,
    title: "Recuperação Ativa",
    description: "Técnicas profissionais de recuperação que aceleram seus resultados e previnem fadiga"
  }
];

export const LearningsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            O Que Você Vai Aprender na Prática
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Não é só correr. É dominar todas as habilidades que transformam você de iniciante em corredor confiante:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnings.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
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
