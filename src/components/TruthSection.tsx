import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const TruthSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-destructive/50 shadow-elevated">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <AlertTriangle className="w-16 h-16 text-destructive" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
                A Verdade Que Ninguém Te Conta
              </h2>
              
              <div className="space-y-6 text-lg text-foreground/80">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Não é culpa sua.</strong> A indústria fitness te bombardeia com 
                  informações contraditórias. Um dia dizem para correr devagar, no outro para fazer tiros. Um 
                  "especialista" fala para correr todos os dias, outro diz que você precisa descansar mais.
                </p>
                
                <p className="leading-relaxed">
                  O resultado? <strong className="text-destructive">Você fica perdido, confuso e desiste antes mesmo de começar de verdade.</strong>
                </p>
                
                <p className="leading-relaxed">
                  <strong className="text-foreground">O verdadeiro inimigo é a falta de um sistema claro e progressivo.</strong> Não é 
                  falta de força de vontade. Não é seu corpo. É a ausência de um método estruturado que te guie do 
                  ponto A ao ponto B sem atalhos perigosos.
                </p>
                
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                  <p className="text-foreground font-medium">
                    "Sem um plano adequado, 80% dos iniciantes desistem nas primeiras 3 semanas ou acabam lesionados. 
                    Mas com o método certo, você pode estar correndo 5K em apenas 8 semanas."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
