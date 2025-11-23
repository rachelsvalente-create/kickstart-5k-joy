import { AlertCircle } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <AlertCircle className="w-12 h-12 text-destructive" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            Você Está Travado na Largada?
          </h2>
          
          <div className="prose prose-lg max-w-none text-center text-foreground/80">
            <p className="text-xl leading-relaxed">
              Você sempre quis correr, mas cada tentativa termina em frustração. A dor no joelho aparece no terceiro dia. 
              O fôlego acaba antes mesmo de completar 1 km. Você assiste vídeos, lê artigos, mas na prática... nada funciona.
            </p>
            <p className="text-xl leading-relaxed mt-6">
              E o pior: você vê outras pessoas correndo com facilidade e se pergunta: <strong>"Por que comigo é diferente?"</strong>
            </p>
            <p className="text-xl leading-relaxed mt-6">
              A verdade é que você não nasceu para ficar parado. Seu corpo foi feito para se mover. 
              O problema não é você - é o método que você está usando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
