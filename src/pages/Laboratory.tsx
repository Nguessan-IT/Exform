import React from 'react';
import { FlaskConical, Award, Shield, Microscope, ArrowRight, CheckCircle, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import laboratoryHero from '@/assets/laboratory-hero.jpg';

export const Laboratory: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FlaskConical,
      title: 'Analyses Physico-Chimiques',
      description: 'Analyses complètes des propriétés physiques et chimiques selon les normes internationales',
      features: ['pH et acidité', 'Composition minérale', 'Métaux lourds', 'Contaminants organiques']
    },
    {
      icon: Shield,
      title: 'Contrôle Qualité HACCP',
      description: 'Analyses de sécurité alimentaire et respect des normes HACCP pour l\'industrie agroalimentaire',
      features: ['Analyses microbiologiques', 'Contaminants alimentaires', 'Additifs et conservateurs', 'Traçabilité produits']
    },
    {
      icon: Award,
      title: 'Certifications ISO',
      description: 'Services de certification et accompagnement pour les normes ISO 9001, 14001 et 22000',
      features: ['Audit de conformité', 'Mise en conformité', 'Formation équipes', 'Suivi certification']
    },
    {
      icon: Microscope,
      title: 'Analyses Environnementales',
      description: 'Contrôle de la qualité de l\'eau, de l\'air et des sols pour la protection environnementale',
      features: ['Qualité de l\'eau', 'Pollution atmosphérique', 'Contamination des sols', 'Impact environnemental']
    }
  ];

  const equipments = [
    'Spectrophotomètre UV-Visible',
    'Chromatographe en phase gazeuse',
    'pH-mètre de précision',
    'Balance analytique',
    'Microscope électronique',
    'Autoclave de stérilisation',
  ];

  const certifications = [
    { name: 'ISO 17025', description: 'Compétence des laboratoires d\'essais et d\'étalonnage' },
    { name: 'ISO 9001', description: 'Système de management de la qualité' },
    { name: 'HACCP', description: 'Analyse des dangers et maîtrise des points critiques' },
    { name: 'GLP', description: 'Bonnes pratiques de laboratoire' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-surface">
      {/* Hero Section - Waaw Effect */}
      <section className="py-24 hero-background-laboratory text-foreground relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-15"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl animate-float glow-effect"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-primary/25 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="animate-fade-in">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-bounce-in shadow-lg">
              ✨ Laboratoire Certifié
            </span>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 drop-shadow-2xl bounce-in bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in zoom-in-50 duration-1000">
              Laboratoire d'Analyse
            </h1>
            <p className="text-2xl text-foreground/80 slide-up leading-relaxed max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-300 font-medium">
              Expertise physico-chimique, ISO, HACCP, analyses complètes de haute précision
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-in slide-in-from-bottom-8 duration-1000 delay-500">
              <Button className="bg-gradient-accent text-white hover:scale-105 hover:shadow-lg hover:shadow-accent/20 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 animate-pulse-glow">
                Découvrir nos analyses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300">
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Overview - Glass Effect */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-surface"></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <span className="inline-block px-6 py-3 glass-card text-accent rounded-full text-sm font-medium mb-8 glow-effect">
                🔬 Laboratoire de Pointe
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
                Excellence & Innovation
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="glass-card p-6 rounded-xl backdrop-blur-sm border border-accent/20">
                  Notre laboratoire d'analyse physico-chimique est équipé des technologies les plus avancées 
                  pour répondre à tous vos besoins d'analyse et de contrôle qualité.
                </p>
                <p className="glass-card p-6 rounded-xl backdrop-blur-sm border border-accent/20">
                  Avec une équipe de techniciens qualifiés et des équipements de dernière génération, 
                  nous garantissons des résultats précis, fiables et dans les délais convenus.
                </p>
                <p className="glass-card p-6 rounded-xl backdrop-blur-sm border border-accent/20">
                  Nos services s'adressent aux industries agroalimentaires, pharmaceutiques, 
                  cosmétiques, environnementales et à tous les secteurs nécessitant des analyses de qualité.
                </p>
              </div>

              <div className="mt-10">
                <Link to="/contact">
                  <Button className="glass-card hover:glow-effect px-8 py-4 text-lg font-semibold rounded-xl border-accent/30 hover:border-accent/50 transition-all duration-300 hover:scale-105 bg-gradient-accent text-white">
                    Découvrir nos services
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-accent opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={laboratoryHero}
                    alt="Laboratoire EXFORM"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass text-white p-8 rounded-2xl text-center animate-pulse">
                      <h3 className="text-2xl font-bold mb-2">Certification ISO</h3>
                      <p className="text-lg">Qualité garantie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Enhanced Glass Cards */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-vibrant opacity-5"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in">
            <span className="inline-block px-6 py-3 glass-card text-accent rounded-full text-sm font-medium mb-8 glow-effect animate-bounce">
              ⚗️ Nos Analyses
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              Services d'Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une gamme complète d'analyses pour garantir la qualité et la conformité de vos produits avec les standards les plus élevés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl hover:glow-effect transform hover:scale-105 transition-all duration-700 group animate-in slide-in-from-bottom-4" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 glow-effect">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-4 glass p-4 rounded-xl group-hover:bg-accent/5 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 animate-pulse" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Équipements de Pointe
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Notre laboratoire dispose d'équipements modernes et calibrés pour des analyses précises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipments.map((equipment, index) => (
              <div
                key={index}
                className="card-elevated text-center hover:scale-105 transition-transform fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-card-title text-card-foreground">
                  {equipment}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Certifications & Accréditations
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Notre laboratoire respecte les plus hautes normes de qualité et de sécurité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="card-elevated fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-card-title text-card-foreground">
                    {cert.name}
                  </h3>
                </div>
                <p className="text-body text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              Processus d'Analyse
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Un processus rigoureux pour garantir la qualité de nos analyses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Réception', description: 'Réception et enregistrement de l\'échantillon' },
              { step: '02', title: 'Préparation', description: 'Préparation selon les protocoles standards' },
              { step: '03', title: 'Analyse', description: 'Analyse avec équipements calibrés' },
              { step: '04', title: 'Contrôle', description: 'Contrôle qualité et validation' },
              { step: '05', title: 'Rapport', description: 'Rapport détaillé et certifié' },
            ].map((process, index) => (
              <div key={index} className="text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-card-title text-card-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultimate Waaw */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-15"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-primary-light/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-accent-light/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in relative z-10">
          <div className="glass p-12 rounded-3xl backdrop-blur-xl border border-white/30 glow-effect">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-2xl">
              Besoin d'Analyses de Qualité ?
            </h2>
            <p className="text-2xl mb-12 text-white/95 leading-relaxed max-w-3xl mx-auto">
              Contactez-nous pour discuter de vos besoins d'analyse et obtenir un devis personnalisé adapté à vos exigences
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="glass hover:glow-effect px-10 py-5 text-xl font-bold rounded-2xl border-white/40 hover:border-white/60 transition-all duration-500 hover:scale-110 bg-white/10 text-white backdrop-blur-sm">
                  Demander un devis
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/services">
                <Button className="glass px-10 py-5 text-xl rounded-2xl border-white/40 text-white hover:bg-white/10 hover:scale-110 transition-all duration-500">
                  Tous nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};