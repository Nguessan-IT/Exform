import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';
import exformLogo from '@/assets/exform-logo.jpg';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.laboratory'), href: '/laboratory' },
    { name: t('nav.training'), href: '/training' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary/90 backdrop-blur-xl shadow-lg shadow-accent/10'
          : 'bg-primary backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo & Company Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={exformLogo} 
                alt="EXFORM Logo" 
                className="h-8 lg:h-10 w-auto transition-all duration-500 group-hover:scale-110 drop-shadow-lg animate-in fade-in-0 zoom-in-95 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-30 rounded-lg transition-all duration-500 blur-sm group-hover:blur-none"></div>
            </div>
            <div className="hidden sm:block animate-in slide-in-from-left-2 duration-1000">
              <h1 className="text-lg lg:text-xl font-bold text-primary-foreground group-hover:text-accent transition-all duration-500 tracking-wide">
                EXFORM
              </h1>
              <p className="text-xs lg:text-sm text-primary-foreground/70 group-hover:text-accent/80 transition-all duration-500">
                Expertise & Formation
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-500 group overflow-hidden animate-in slide-in-from-top-2 ${
                  isActive(item.href)
                    ? 'text-accent bg-accent/15 glow-effect scale-105 shadow-lg shadow-accent/20'
                    : 'text-primary-foreground/90 hover:text-accent hover:bg-accent/10 hover:scale-105 hover:shadow-md hover:shadow-accent/10'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">{item.name}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-accent opacity-15 rounded-xl animate-pulse"></div>
                )}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
              </Link>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="text-primary-foreground">
              <LanguageSelector />
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-primary-foreground hover:bg-accent/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-nav animate-in slide-in-from-top-2 duration-300">
            <nav className="px-4 py-6 space-y-3">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 animate-in slide-in-from-left-3 ${
                    isActive(item.href)
                      ? 'bg-gradient-accent text-white shadow-accent glow-effect'
                      : 'text-foreground hover:bg-accent/5 hover:text-accent glass-card'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};