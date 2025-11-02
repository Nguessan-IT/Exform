import React from 'react';
import { FlaskConical, HardHat, GraduationCap, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import laboratoryHero from '@/assets/laboratory-hero.jpg';
import trainingHero from '@/assets/training-hero.jpg';
import constructionHero from '@/assets/construction-hero.jpg';
import burnerMaintenance1 from '@/assets/burner-maintenance-1.jpg';
import burnerMaintenance2 from '@/assets/burner-maintenance-2.jpg';
import burnerMaintenance3 from '@/assets/burner-maintenance-3.jpg';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const mainServices = [
    {
      title: t('services.laboratory'),
      description: 'Analyses physico-chimiques complètes selon les normes ISO et HACCP. Notre laboratoire moderne offre des services de contrôle qualité et de certification pour tous secteurs d\'activité.',
      image: laboratoryHero,
      link: '/laboratory',
      icon: FlaskConical,
      features: [
        'Analyses conformes ISO 9001',
        'Certifications HACCP',
        'Contrôle qualité alimentaire',
        'Analyses environnementales',
      ],
    },
    {
      title: t('services.construction'),
      description: 'Solutions complètes pour vos projets BTP et équipements industriels. De la conception à la réalisation, nous vous accompagnons avec expertise et professionnalisme.',
      image: constructionHero,
      link: '/services',
      icon: HardHat,
      features: [
        'Études et conception',
        'Réalisation de projets BTP',
        'Installation d\'équipements',
        'Maintenance industrielle',
      ],
    },
    {
      title: t('services.training'),
      description: 'Formations continues qualifiantes adaptées aux besoins du marché. Développez les compétences de vos équipes avec nos programmes certifiés et personnalisés.',
      image: trainingHero,
      link: '/training',
      icon: GraduationCap,
      features: [
        'Formations certifiantes',
        'Programmes sur mesure',
        'Formateurs experts',
        'Suivi post-formation',
      ],
    },
    {
      title: t('services.maintenance'),
      description: 'Services de maintenance préventive et corrective pour vos équipements industriels. Optimisez la performance et la durée de vie de vos installations.',
      image: constructionHero,
      link: '/services',
      icon: Settings,
      features: [
        'Maintenance préventive',
        'Dépannage d\'urgence',
        'Optimisation performance',
        'Contrats de maintenance',
      ],
    },
  ];

  const additionalServices = [
    'Études et projets industriels (PGE-A et EIES)',
    'Conseil en organisation industrielle',
    'Audit technique et énergétique',
    'Accompagnement certification qualité',
    'Formation en sécurité industrielle',
    'Support technique spécialisé',
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-surface">
      {/* Hero Section */}
      <section className="py-20 hero-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-15"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-28 h-28 bg-accent/30 rounded-full blur-lg animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in mb-8">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-bounce-in shadow-lg">
              Services Techniques Avancés
            </span>
            <h1 className="text-display mb-8 drop-shadow-xl bounce-in font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('services.title')}
            </h1>
            <p className="text-xl text-foreground/80 slide-up leading-relaxed max-w-3xl mx-auto font-medium">
              Des solutions techniques innovantes et des formations de qualité pour accompagner votre développement
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`bounce-in ${index % 2 === 1 ? 'lg:order-2' : ''}`} style={{animationDelay: `${index * 0.3}s`}}>
                  <div className="flex items-center mb-6 animate-shimmer">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-accent/20 animate-pulse-glow">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-section text-foreground font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-body text-muted-foreground mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/5 transition-all duration-300 animate-in slide-in-from-left-3" style={{animationDelay: `${(index * 4 + featureIndex) * 0.1}s`}}>
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 animate-pulse" />
                        <span className="text-body text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={service.link}>
                    <Button className="bg-gradient-accent text-white hover:scale-105 hover:shadow-lg hover:shadow-accent/20 px-8 py-3 rounded-xl font-semibold transition-all duration-300 animate-pulse-glow">
                      {t('common.learn_more')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className={`slide-up ${index % 2 === 1 ? 'lg:order-1' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-accent opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-all duration-500"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-20 rounded-3xl group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Burner Maintenance Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-section text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Maintenance des Brûleurs Industriels
            </h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Installation, contrôle annuel, maintenance des brûleurs gaz ou fuel des marques WEISHAUPT et SAAKE installés sur des chaudières ou des torréfacteurs
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full fade-in" style={{animationDelay: '0.2s'}}>
              <CarouselContent>
                <CarouselItem>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={burnerMaintenance1}
                      alt="Installation et maintenance de brûleurs WEISHAUPT"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={burnerMaintenance2}
                      alt="Contrôle annuel des brûleurs SAAKE"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={burnerMaintenance3}
                      alt="Maintenance des brûleurs industriels"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-elevated text-center hover:scale-105 transition-transform fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-card-title text-card-foreground mb-2 font-bold">
                Installation
              </h3>
              <p className="text-body text-muted-foreground">
                Installation professionnelle de brûleurs industriels
              </p>
            </div>
            <div className="card-elevated text-center hover:scale-105 transition-transform fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-card-title text-card-foreground mb-2 font-bold">
                Contrôle Annuel
              </h3>
              <p className="text-body text-muted-foreground">
                Contrôles périodiques et certifications
              </p>
            </div>
            <div className="card-elevated text-center hover:scale-105 transition-transform fade-in" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-card-title text-card-foreground mb-2 font-bold">
                Maintenance
              </h3>
              <p className="text-body text-muted-foreground">
                Maintenance préventive et corrective
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Services Complémentaires
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Une gamme étendue de services pour répondre à tous vos besoins techniques et industriels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="card-elevated text-center hover:scale-105 transition-transform fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-card-title text-card-foreground mb-2">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Notre Processus
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Une approche structurée pour garantir la qualité et la satisfaction de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse des Besoins', description: 'Évaluation complète de vos besoins et objectifs' },
              { step: '02', title: 'Proposition Solution', description: 'Développement d\'une solution personnalisée' },
              { step: '03', title: 'Mise en Œuvre', description: 'Réalisation avec suivi qualité rigoureux' },
              { step: '04', title: 'Suivi & Support', description: 'Accompagnement continu et support technique' },
            ].map((process, index) => (
              <div key={index} className="text-center fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-card-title text-card-foreground mb-4">
                  {process.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-section mb-6">
            Prêt à Commencer Votre Projet ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contactez nos experts pour une consultation personnalisée et un devis gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-hero bg-white text-primary hover:bg-white/90">
                {t('nav.contact')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/laboratory">
              <Button className="btn-hero bg-cyan-500 text-white hover:bg-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                {t('nav.laboratory')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};