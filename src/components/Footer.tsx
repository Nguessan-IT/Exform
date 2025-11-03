import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import exformLogo from '@/assets/exform-logo.png';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.laboratory'), href: '/laboratory' },
    { name: t('nav.training'), href: '/training' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const services = [
    t('services.laboratory'),
    t('services.construction'),
    t('services.training'),
    t('services.maintenance'),
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={exformLogo} 
              alt="EXFORM Logo" 
              className="h-10 w-auto filter brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t('hero.title')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-primary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('nav.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  {t('contact.address')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info4@gmail.com" 
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info4@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="flex flex-col">
                  <a 
                    href="tel:+2250714613489" 
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    +225 07 14 61 34 89
                  </a>
                  <a 
                    href="tel:+2252733747217" 
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    +225 27 33 74 72 17
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} EXFORM. Tous droits réservés. | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};