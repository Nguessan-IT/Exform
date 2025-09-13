import React from 'react';
import { GraduationCap, Users, Clock, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import trainingHero from '@/assets/training-hero.jpg';

export const Training: React.FC = () => {
  const { t } = useLanguage();

  const trainings = [
    {
      title: t('training.vibration'),
      duration: '3 jours',
      level: 'Intermédiaire',
      description: 'Formation complète sur l\'analyse vibratoire pour le diagnostic et la maintenance prédictive des équipements industriels.',
      features: [
        'Théorie des vibrations',
        'Techniques de mesure',
        'Analyse spectrale',
        'Diagnostic des défauts',
      ],
    },
    {
      title: t('training.hydraulics'),
      duration: '5 jours',
      level: 'Tous niveaux',
      description: 'Maîtrisez les systèmes hydrauliques industriels, de la conception à la maintenance en passant par la réparation.',
      features: [
        'Principes hydrauliques',
        'Composants et circuits',
        'Maintenance préventive',
        'Dépannage pratique',
      ],
    },
    {
      title: t('training.ammonia'),
      duration: '2 jours',
      level: 'Spécialisé',
      description: 'Formation spécialisée sur les risques liés à l\'ammoniac et les mesures de sécurité dans l\'industrie frigorifique.',
      features: [
        'Propriétés de l\'ammoniac',
        'Procédures de sécurité',
        'Équipements de protection',
        'Gestion des urgences',
      ],
    },
    {
      title: t('training.filtration'),
      duration: '3 jours',
      level: 'Technique',
      description: 'Apprenez les techniques de filtration d\'air pour l\'industrie et les environnements contrôlés.',
      features: [
        'Types de filtres',
        'Dimensionnement',
        'Installation et maintenance',
        'Contrôle qualité air',
      ],
    },
    {
      title: t('training.pressure'),
      duration: '4 jours',
      level: 'Avancé',
      description: 'Formation sur les équipements sous pression et autoclaves, réglementation et sécurité.',
      features: [
        'Réglementation ESP',
        'Contrôles périodiques',
        'Maintenance sécurisée',
        'Certifications requises',
      ],
    },
    {
      title: t('training.management'),
      duration: '2 jours',
      level: 'Management',
      description: 'Développez vos compétences managériales pour diriger efficacement vos équipes techniques.',
      features: [
        'Leadership technique',
        'Gestion d\'équipe',
        'Communication efficace',
        'Résolution de conflits',
      ],
    },
  ];

  const advantages = [
    {
      icon: Users,
      title: 'Formateurs Experts',
      description: 'Nos formateurs sont des professionnels expérimentés avec une expertise terrain reconnue.',
    },
    {
      icon: Award,
      title: 'Certifications Reconnues',
      description: 'Obtenez des certifications reconnues par l\'industrie et valorisez vos compétences.',
    },
    {
      icon: Clock,
      title: 'Flexibilité Horaire',
      description: 'Formations adaptées à votre planning avec des sessions en journée ou en soirée.',
    },
    {
      icon: CheckCircle,
      title: 'Suivi Personnalisé',
      description: 'Un accompagnement individualisé pour garantir votre progression et réussite.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-background-training text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-15"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-accent/25 rounded-full blur-md animate-float" style={{animationDelay: '2.5s'}}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-bounce-in shadow-lg">
              Formation Continue
            </span>
            <h1 className="text-display mb-8 drop-shadow-xl bounce-in font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('training.title')}
            </h1>
            <p className="text-xl text-foreground/80 slide-up leading-relaxed max-w-3xl mx-auto font-medium">
              Développez vos compétences techniques avec nos formations certifiantes dispensées par des experts
            </p>
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-section text-foreground mb-6">
                Formation Continue Qualifiante
              </h2>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  EXFORM propose un catalogue complet de formations techniques adaptées aux besoins 
                  du marché industriel. Nos programmes sont conçus pour développer vos compétences 
                  et vous maintenir à la pointe des technologies.
                </p>
                <p>
                  Que vous soyez débutant ou expert, nos formations modulaires vous permettent 
                  d'évoluer à votre rythme avec un accompagnement personnalisé de nos formateurs 
                  certifiés.
                </p>
                <p>
                  Chaque formation débouche sur une certification reconnue par l'industrie, 
                  valorisant ainsi vos nouvelles compétences auprès de vos employeurs ou clients.
                </p>
              </div>
            </div>

            <div className="fade-in">
              <div className="relative">
                <img
                  src={trainingHero}
                  alt="Formation EXFORM"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 gradient-hero opacity-10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Nos Programmes de Formation
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Choisissez parmi notre catalogue de formations techniques spécialisées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainings.map((training, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl hover:glow-effect transform hover:scale-105 transition-all duration-700 group bounce-in animate-shimmer" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-2 bg-gradient-accent text-white text-sm font-medium rounded-full shadow-lg animate-pulse">
                    {training.level}
                  </span>
                  <span className="text-sm text-muted-foreground font-semibold bg-accent/10 px-3 py-1 rounded-full">
                    {training.duration}
                  </span>
                </div>
                
                <h3 className="text-card-title text-card-foreground mb-6 group-hover:text-accent transition-colors duration-300 font-bold text-xl">
                  {training.title}
                </h3>
                
                <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                  {training.description}
                </p>

                <div className="space-y-3 mb-8">
                  {training.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/5 transition-all duration-300 animate-in slide-in-from-left-2" style={{animationDelay: `${(index * 4 + featureIndex) * 0.1}s`}}>
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 animate-pulse" />
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/register">
                  <Button className="w-full bg-gradient-accent text-white hover:scale-105 hover:shadow-lg hover:shadow-accent/20 py-3 rounded-xl font-semibold transition-all duration-300 animate-pulse-glow">
                    {t('training.register')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Pourquoi Choisir Nos Formations ?
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Les avantages qui font la différence dans votre parcours de formation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                  <advantage.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-card-title text-card-foreground mb-4">
                  {advantage.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Processus de Formation
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Un parcours structuré pour maximiser votre apprentissage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inscription', description: 'Choisissez votre formation et inscrivez-vous en ligne' },
              { step: '02', title: 'Évaluation', description: 'Évaluation de votre niveau pour adapter le programme' },
              { step: '03', title: 'Formation', description: 'Sessions théoriques et pratiques avec nos experts' },
              { step: '04', title: 'Certification', description: 'Examen final et remise de votre certification' },
            ].map((process, index) => (
              <div key={index} className="text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
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
            Investissez dans Votre Avenir
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Rejoignez les milliers de professionnels qui ont développé leurs compétences avec EXFORM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="btn-hero bg-white text-primary hover:bg-white/90">
                {t('training.register')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Demander des informations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};