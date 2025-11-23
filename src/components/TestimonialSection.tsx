import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Eles Conseguiram. Você Também Vai!
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Não acredite apenas na nossa palavra. Veja o que corredores reais têm a dizer:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Placeholder testimonials - usuário pode adicionar depoimentos reais depois */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "Aos 45 anos e 20kg acima do peso, eu achei que nunca conseguiria correr. O CorridaKickstart™ 
                  me provou o contrário. Em 8 semanas completei meus primeiros 5K sem nenhuma lesão!"
                </p>
                <div>
                  <p className="font-bold text-foreground">Maria S.</p>
                  <p className="text-sm text-muted-foreground">Executiva, 45 anos</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "Depois de 3 tentativas frustradas de começar a correr, o método do CorridaKickstart™ foi o único 
                  que realmente funcionou. A progressão é perfeita e me sinto seguro em cada treino."
                </p>
                <div>
                  <p className="font-bold text-foreground">João P.</p>
                  <p className="text-sm text-muted-foreground">Professor, 38 anos</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-primary/5 border-2 border-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Como Adicionar Seus Próprios Depoimentos
              </h3>
              <div className="text-left max-w-2xl mx-auto space-y-4 text-foreground/80">
                <p>
                  <strong>1. Colete Depoimentos:</strong> Peça aos seus clientes para enviarem fotos, vídeos curtos 
                  ou textos sobre a experiência deles com o programa.
                </p>
                <p>
                  <strong>2. Use Vídeos:</strong> Depoimentos em vídeo têm 3x mais credibilidade. Grave com celular mesmo!
                </p>
                <p>
                  <strong>3. Mostre Resultados:</strong> Inclua fotos de antes/depois, tempos de corrida, ou capturas de tela 
                  de apps de corrida mostrando a evolução.
                </p>
                <p>
                  <strong>4. Seja Específico:</strong> Depoimentos vagos não convencem. Busque histórias detalhadas 
                  com problemas específicos que foram resolvidos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
