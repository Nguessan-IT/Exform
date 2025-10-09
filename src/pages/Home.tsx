import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Zap, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { PartnerCarousel } from '@/components/PartnerCarousel';
import { Chatbot } from '@/components/Chatbot';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import laboratoryHero from '@/assets/laboratory-hero.jpg';
import trainingHero from '@/assets/training-hero.jpg';
import constructionHero from '@/assets/construction-hero.jpg';
import exformLogo from '@/assets/exform-logo.jpg';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.laboratory'),
      description: 'Analyses complètes et certifiées selon les normes internationales ISO et HACCP',
      image: laboratoryHero,
      link: '/laboratory',
    },
    {
      title: t('services.construction'),
      description: 'Solutions complètes pour vos projets de construction et équipements industriels',
      image: constructionHero,
      link: '/services',
    },
    {
      title: t('services.training'),
      description: 'Formations qualifiantes adaptées aux besoins du marché et de votre entreprise',
      image: trainingHero,
      link: '/training',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: t('home.stats.clients') },
    { icon: Award, value: '15+', label: t('home.stats.experience') },
    { icon: Zap, value: '50+', label: t('home.stats.formations') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-background-home">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-accent/20 animate-float blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-orange/20 animate-float blur-xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-primary-light/30 animate-float blur-lg" style={{animationDelay: '2s'}}></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-display text-foreground mb-6 drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <Link to="/services">
              <Button className="btn-hero scale-in bg-accent hover:bg-accent-light transform hover:scale-105 transition-all duration-300 shadow-2xl text-white text-lg px-10 py-4">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-foreground/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center fade-in card-elevated hover:scale-105 transition-transform bg-white/80 backdrop-blur-sm animate-counter" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl mb-4 animate-pulse-glow">
                      <stat.icon className="h-8 w-8 text-white animate-bounce-gentle" />
                    </div>
                    <div className="text-3xl font-bold text-accent mb-2 animate-number-count">{stat.value}</div>
                    <div className="text-muted-foreground animate-fade-in-up" style={{animationDelay: `${index * 0.3}s`}}>{stat.label}</div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 gradient-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              {t('common.services_badge')}
            </span>
            <h2 className="text-section text-foreground mb-6">
              {t('services.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="fade-in transform hover:scale-105 transition-all duration-500" style={{animationDelay: `${index * 0.2}s`}}>
                <ServiceCard
                  {...service}
                  buttonText={t('common.learn_more')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-section text-foreground mb-6">
                {t('home.why.title')}
              </h2>
              <p className="text-body text-muted-foreground mb-8">
                {t('home.why.subtitle')}
              </p>
              
              <div className="space-y-4">
                {[
                  t('home.why.point1'),
                  t('home.why.point2'),
                  t('home.why.point3'),
                  t('home.why.point4')
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-body text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/about">
                  <Button className="btn-primary">
                    {t('about.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="fade-in">
              <div className="relative">
                <img
                  src={laboratoryHero}
                  alt="EXFORM Laboratory"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 gradient-hero opacity-20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnerCarousel />

      {/* FAQ Section */}
      <section className="py-20 gradient-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl mb-6 animate-pulse-glow">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-section text-foreground mb-4">
              {t('home.faq.title')}
            </h2>
            <p className="text-body text-muted-foreground">
              {t('home.faq.subtitle')}
            </p>
          </div>

          <div className="fade-in card-elevated bg-white/80 backdrop-blur-sm" style={{animationDelay: '0.2s'}}>
            <Accordion type="single" collapsible className="w-full">
              {[1, 2, 3, 4, 5].map((num) => (
                <AccordionItem key={num} value={`item-${num}`} className="border-b border-border/50 last:border-0">
                  <AccordionTrigger className="text-left hover:text-accent transition-colors py-6 px-6 text-lg font-semibold">
                    {t(`home.faq.q${num}`)}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {t(`home.faq.a${num}`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-10 fade-in" style={{animationDelay: '0.4s'}}>
            <p className="text-muted-foreground mb-4">
              Vous avez d'autres questions ?
            </p>
            <Link to="/contact">
              <Button className="btn-primary">
                {t('nav.contact')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #E31937 0%, #C71530 50%, #A01228 100%)'}}>
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in relative z-10">
          <div className="mb-8">
            <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-6 animate-pulse-glow">
              <ArrowRight className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h2 className="text-section mb-6 text-white">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/95">
              {t('home.cta.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-hero bg-white text-[#E31937] hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                {t('nav.contact')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/training">
              <Button variant="outline" className="glass border-white/50 text-white hover:bg-white/20 backdrop-blur-sm">
                {t('nav.training')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Chatbot and WhatsApp */}
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
};