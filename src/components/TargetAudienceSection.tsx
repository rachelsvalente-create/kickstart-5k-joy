import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const audiences = [
  {
    title: "O Sedentário Motivado",
    description: "Você passou anos sem se exercitar e finalmente decidiu mudar. Sente que perdeu muito tempo e quer recuperar sua saúde agora. Este programa é seu recomeço seguro e definitivo."
  },
  {
    title: "O Frustrado Crônico",
    description: "Já tentou correr 3, 4, 5 vezes e sempre desistiu ou se machucou. Você não quer mais promessas vazias - quer um método que funcione DE VERDADE. Sua última tentativa começa aqui."
  },
  {
    title: "O Preocupado com a Saúde",
    description: "Seu médico recomendou exercícios, os exames não estão bons, você sente o corpo pedindo movimento. Mas tem medo de se machucar ou fazer errado. Aqui você terá segurança para começar."
  },
  {
    title: "O Pai/Mãe que Quer Ser Exemplo",
    description: "Você quer mostrar aos seus filhos que saúde importa. Quer ter energia para brincar com eles e viver mais tempo ao lado deles. Correr será seu legado de determinação para sua família."
  },
  {
    title: "O Profissional Estressado",
    description: "Trabalho, pressão, ansiedade. Você precisa de uma válvula de escape saudável. A corrida será sua meditação em movimento, seu momento de liberdade diária."
  },
  {
    title: "O Sonhador de Meia Idade",
    description: "Você sempre quis correr mas achou que era tarde demais. 'Pessoas da minha idade não começam a correr', você pensa. ERRADO. Este programa prova que nunca é tarde para realizar um sonho."
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Para Quem é o CorridaKickstart™?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Este programa foi criado especialmente para você que se identifica com alguma dessas histórias:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-primary/10 border-2 border-primary rounded-lg p-8 text-center">
            <p className="text-xl font-medium text-foreground">
              Se você se viu em qualquer uma dessas situações, este programa foi feito para você. 
              <strong className="block mt-4 text-2xl text-primary">
                Sua jornada de transformação começa agora.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
