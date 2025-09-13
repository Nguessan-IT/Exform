import React from 'react';

export const PartnerCarousel: React.FC = () => {
  const partners = [
    'Cargill',
    'ARO',
    'Waterleau',
    'CODINORM',
    'CORAXEL',
    'Olam Cocoa',
    'El Paradis Cosmetic',
    'INHP',
    'LBTP',
  ];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section text-foreground mb-4">
              Nos Partenaires de Confiance
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Nous collaborons avec les leaders de l'industrie pour vous offrir les meilleures solutions
            </p>
          </div>

          {/* Infinite scroll carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 lg:mx-12"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-20 w-48 flex items-center justify-center border border-border">
                    <span className="text-lg font-semibold text-primary">
                      {partner}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 lg:mx-12"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-20 w-48 flex items-center justify-center border border-border">
                    <span className="text-lg font-semibold text-primary">
                      {partner}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};