import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Users2, Award } from "lucide-react";

const differentials = [
  {
    icon: Brain,
    title: "Baseado em Ciência, Não em Modismo",
    description: "Desenvolvido com base em estudos de fisiologia do exercício e periodização esportiva. Não é achismo - é ciência aplicada de forma simples e prática."
  },
  {
    icon: Target,
    title: "Foco Total em Prevenção de Lesões",
    description: "Enquanto outros métodos te empurram para correr logo, nós te preparamos ANTES. Fortalecimento específico, técnica correta e progressão inteligente."
  },
  {
    icon: Users2,
    title: "Feito Para Iniciantes de Verdade",
    description: "Não é um programa 'adaptado' para iniciantes. Foi criado DO ZERO pensando em quem nunca correu ou está recomeçando. Cada detalhe considera suas limitações e medos."
  },
  {
    icon: Award,
    title: "Resultados Comprovados",
    description: "Mais de 500 pessoas já completaram o programa com taxa de conclusão de 92% - muito acima da média de 30% dos métodos tradicionais. Funciona porque respeita seu corpo e sua mente."
  }
];

export const DifferentialSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Por Que o CorridaKickstart™ é Diferente?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Você já tentou outros métodos e não funcionou. Aqui está o que torna nosso programa único:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
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
