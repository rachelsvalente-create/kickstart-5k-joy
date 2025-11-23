import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Gift, Clock, Shield } from "lucide-react";
const benefits = ["Programa completo de 8 semanas (valor: R$ 297)", "Vídeos demonstrativos de cada exercício (valor: R$ 147)", "Plano de fortalecimento e prevenção (valor: R$ 127)", "Guia de nutrição para corredores (valor: R$ 97)", "Grupo exclusivo de suporte (valor: R$ 197)", "Planilhas de acompanhamento (valor: R$ 47)", "Acesso vitalício ao conteúdo (valor: R$ 397)", "Bônus: Audiobook motivacional (valor: R$ 77)"];
export const PriceSection = () => {
  return <section id="price-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Quanto Custa Transformar Sua Vida?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Veja o valor REAL de tudo que você está recebendo:
          </p>
          
          <Card className="shadow-elevated border-2 border-primary mb-8">
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {})}
              </div>
              
              <div className="border-t-2 border-border pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-semibold text-muted-foreground">Valor Total:</span>
                  <span className="text-3xl font-bold text-muted-foreground line-through">R$ 97 </span>
                </div>
                
                <div className="bg-gradient-hero rounded-lg p-8 text-center text-white">
                  <div className="mb-4">
                    <Gift className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-xl font-semibold">Investimento HOJE</p>
                  </div>
                  <div className="text-6xl font-bold mb-2">R$ 27</div>
                  <p className="text-xl opacity-90">Pagamento único • Acesso imediato</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-foreground mb-2">
              Por que apenas R$ 27?
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Porque acreditamos que saúde não deve ser privilégio. O preço de uma pizza não deve ser a desculpa 
              para você continuar sedentário. Este é um investimento na sua saúde que custa menos que um almoço.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-card">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-foreground">Oferta Limitada</h3>
              <p className="text-sm text-muted-foreground">Preço promocional pode acabar a qualquer momento</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-card">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-foreground">Garantia de 7 Dias</h3>
              <p className="text-sm text-muted-foreground">100% do seu dinheiro de volta se não gostar</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-card">
              <Gift className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-foreground">Acesso Vitalício</h3>
              <p className="text-sm text-muted-foreground">Pague uma vez, tenha acesso para sempre</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="cta" size="xl" className="w-full md:w-auto text-xl py-8 px-16">
              GARANTIR MINHA VAGA AGORA
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ⚡ Acesso imediato após a confirmação do pagamento
            </p>
          </div>
        </div>
      </div>
    </section>;
};