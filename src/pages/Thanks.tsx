import React from 'react';
import { CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Thanks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center gradient-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-elevated text-center fade-in">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          {/* Main Message */}
          <h1 className="text-display text-foreground mb-6">
            {t('thanks.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {t('thanks.message')}
          </p>

          {/* Additional Information */}
          <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
            <h3 className="text-card-title text-card-foreground mb-4 text-center">
              Prochaines Étapes
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="text-body text-foreground font-medium">Confirmation sous 48h</p>
                  <p className="text-caption">Notre équipe vous contactera pour confirmer votre inscription et les modalités pratiques.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="text-body text-foreground font-medium">Préparation de la formation</p>
                  <p className="text-caption">Réception des documents et du matériel pédagogique avant le début de la formation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="text-body text-foreground font-medium">Début de votre formation</p>
                  <p className="text-caption">Accompagnement personnalisé tout au long de votre parcours d'apprentissage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-card-title text-card-foreground mb-4">
              Une question ? Contactez-nous
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@exform.ci</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+225 07 07 00 00 00</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-hero">
                {t('common.back_home')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/training">
              <Button variant="outline">
                Voir d'autres formations
              </Button>
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/about" className="card-elevated text-center hover:scale-105 transition-transform">
            <h4 className="text-card-title text-card-foreground mb-2">À propos d'EXFORM</h4>
            <p className="text-caption">Découvrez notre histoire et nos valeurs</p>
          </Link>
          <Link to="/services" className="card-elevated text-center hover:scale-105 transition-transform">
            <h4 className="text-card-title text-card-foreground mb-2">Nos Services</h4>
            <p className="text-caption">Explorez toute notre gamme de services</p>
          </Link>
          <Link to="/contact" className="card-elevated text-center hover:scale-105 transition-transform">
            <h4 className="text-card-title text-card-foreground mb-2">Nous Contacter</h4>
            <p className="text-caption">Toutes nos coordonnées et localisation</p>
          </Link>
        </div>
      </div>
    </div>
  );
};