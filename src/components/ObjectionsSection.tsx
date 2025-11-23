import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle2 } from "lucide-react";

const objections = [
  {
    objection: "Não tenho tempo para treinar",
    answer: "Maria, executiva e mãe de 2 filhos, pensava o mesmo. Ela começou com apenas 20 minutos, 3x por semana. Hoje, ela corre 5K todo sábado de manhã e diz que nunca se sentiu tão energizada para encarar o dia. O segredo? Treinos curtos e eficientes que cabem em qualquer agenda."
  },
  {
    objection: "Estou muito fora de forma para começar",
    answer: "João tinha 15kg acima do peso e não fazia exercícios há 5 anos. Na primeira semana, ele mal conseguia andar rápido por 5 minutos. 8 semanas depois, completou seus primeiros 5K. Como? Começando devagar, sem pressa, respeitando o corpo. Se você pode caminhar, pode começar o CorridaKickstart™."
  },
  {
    objection: "Já tentei correr antes e sempre me lesiono",
    answer: "Carla teve fascite plantar em duas tentativas anteriores. Ela descobriu que o problema não era correr - era correr SEM preparação adequada. Com o protocolo de aquecimento correto e progressão gradual do programa, ela completou todo o treinamento sem nenhuma dor. A diferença está no método."
  },
  {
    objection: "É muito caro investir em equipamento",
    answer: "Pedro começou com um tênis básico de R$ 150 e roupas que já tinha em casa. Você não precisa de smartwatch caro, roupas técnicas ou academia. Tudo que você precisa é um tênis confortável e o método certo. O CorridaKickstart™ te ensina exatamente o que é essencial e o que é supérfluo."
  }
];

export const ObjectionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            "Mas E Se..."
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Vamos acabar com as desculpas que te impedem de começar:
          </p>
          
          <div className="space-y-8">
            {objections.map((item, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-destructive/5 border-l-4 border-destructive p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          "{item.objection}"
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 border-l-4 border-primary p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground/80 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
