import React from 'react';
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque service que nous proposons, avec des standards de qualité élevés.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous intégrons les dernières technologies et méthodes pour rester à la pointe de notre domaine.',
    },
    {
      icon: Users,
      title: 'Partenariat',
      description: 'Nous construisons des relations durables basées sur la confiance et la collaboration.',
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Nous nous engageons pleinement dans la réussite de nos clients et partenaires.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-surface">
      {/* Hero Section */}
      <section className="py-20 hero-background-laboratory text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-15"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-accent/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-bounce-in shadow-lg">
              À Propos d'EXFORM
            </span>
            <h1 className="text-display mb-8 drop-shadow-xl bounce-in font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('about.title')}
            </h1>
            <p className="text-xl text-foreground/80 slide-up leading-relaxed max-w-3xl mx-auto font-medium">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Notre Parcours
                </span>
                <h2 className="text-section text-foreground">
                  Notre Histoire
                </h2>
              </div>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  Fondée avec la vision de transformer le paysage de la formation technique et de l'expertise 
                  industrielle en Côte d'Ivoire, EXFORM s'est rapidement imposée comme un acteur incontournable 
                  du secteur.
                </p>
                <p>
                  Depuis nos débuts, nous avons formé plus de 2000 professionnels et accompagné des centaines 
                  d'entreprises dans leur développement. Notre laboratoire d'analyse physico-chimique est 
                  reconnu pour sa précision et sa conformité aux normes internationales.
                </p>
                <p>
                  Aujourd'hui, EXFORM continue d'évoluer pour répondre aux défis technologiques et industriels 
                  de demain, tout en maintenant notre engagement envers l'excellence et l'innovation.
                </p>
              </div>
            </div>
            
            <div className="fade-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="card-elevated text-center glass-card hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <AnimatedCounter 
                    end={15} 
                    suffix="+" 
                    className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-3 drop-shadow-lg animate-pulse-glow"
                  />
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">Années d'Expérience</div>
                </div>
                <div className="card-elevated text-center glass-card hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <AnimatedCounter 
                    end={2000} 
                    suffix="+" 
                    className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-3 drop-shadow-lg animate-pulse-glow"
                  />
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">Professionnels Formés</div>
                </div>
                <div className="card-elevated text-center glass-card hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <AnimatedCounter 
                    end={500} 
                    suffix="+" 
                    className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-3 drop-shadow-lg animate-pulse-glow"
                  />
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">Entreprises Partenaires</div>
                </div>
                <div className="card-elevated text-center glass-card hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <AnimatedCounter 
                    end={50} 
                    suffix="+" 
                    className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-3 drop-shadow-lg animate-pulse-glow"
                  />
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">Formations Disponibles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card-elevated fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-card-title text-card-foreground">Notre Mission</h3>
              </div>
              <p className="text-body text-muted-foreground">
                Fournir des services d'expertise technique et de formation de classe mondiale, 
                en accompagnant nos clients dans leur développement professionnel et industriel. 
                Nous nous engageons à délivrer des solutions innovantes et adaptées aux défis 
                technologiques contemporains.
              </p>
            </div>

            {/* Vision */}
            <div className="card-elevated fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-card-title text-card-foreground">Notre Vision</h3>
              </div>
              <p className="text-body text-muted-foreground">
                Devenir le leader régional de l'expertise technique et de la formation professionnelle, 
                reconnu pour notre excellence, notre innovation et notre impact positif sur le 
                développement des compétences industrielles en Afrique de l'Ouest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Nos Valeurs
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne et définissent notre identité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-card-title text-card-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Notre Équipe
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Une équipe d'experts passionnés et expérimentés, dédiée à votre succès
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md text-center fade-in">
            <div className="mb-6">
              <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-card-title text-card-foreground mb-2">
                Équipe Multidisciplinaire
              </h3>
            </div>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Notre équipe réunit des ingénieurs, des formateurs certifiés, des techniciens spécialisés 
              et des consultants expérimentés. Chaque membre apporte son expertise unique pour vous 
              offrir des services de la plus haute qualité.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-overlay text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in relative z-10">
          <div className="mb-8">
            <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-6">
              <Users className="h-8 w-8 text-accent animate-pulse" />
            </div>
            <h2 className="text-section mb-6">
              Travaillons Ensemble
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Découvrez comment EXFORM peut vous accompagner dans vos projets
            </p>
          </div>
          <Link to="/contact">
            <Button className="btn-hero bg-accent text-white hover:bg-accent-light transform hover:scale-105 transition-all duration-300">
              {t('about.cta')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};