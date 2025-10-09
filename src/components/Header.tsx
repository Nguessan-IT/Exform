import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';
import exformLogo from '@/assets/exform-logo.jpg';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
    { 
      name: t('nav.services'), 
      href: '/services',
      submenu: [
        { name: t('nav.laboratory'), href: '/laboratory' },
        { name: t('nav.training'), href: '/training' }
      ]
    },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-2xl shadow-2xl shadow-accent/20 border-b border-accent/20'
          : 'bg-gradient-to-r from-primary via-primary-dark to-primary backdrop-blur-lg'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo & Company Name - Enhanced 3x */}
          <Link to="/" className="flex items-center gap-4 lg:gap-6 group relative z-10">
            <div className="relative">
              {/* Animated Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-accent-light/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-110 animate-pulse-glow"></div>
              
              {/* Logo Container with 3D Effect */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 lg:p-3 border border-white/20 shadow-2xl group-hover:shadow-accent/50 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                <img 
                  src={exformLogo} 
                  alt="EXFORM Logo" 
                  className="h-14 lg:h-20 w-auto transition-all duration-700 group-hover:drop-shadow-2xl filter brightness-110 group-hover:brightness-125"
                />
              </div>
              
              {/* Rotating Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-accent/0 group-hover:border-accent/50 transition-all duration-700 group-hover:rotate-6"></div>
            </div>
            
            <div className="hidden sm:flex flex-col gap-1 animate-in slide-in-from-left-3 duration-1000">
              {/* Company Name with Gradient */}
              <h1 className="text-2xl lg:text-4xl font-black bg-gradient-to-r from-primary-foreground via-accent-light to-primary-foreground bg-clip-text text-transparent group-hover:from-accent group-hover:via-accent-light group-hover:to-accent transition-all duration-700 tracking-tight drop-shadow-lg">
                EXFORM
              </h1>
              
              {/* Tagline with Animation */}
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-8 bg-gradient-to-r from-accent to-transparent rounded-full group-hover:w-12 transition-all duration-500"></div>
                <p className="text-sm lg:text-base font-semibold text-primary-foreground/90 group-hover:text-accent-light transition-all duration-500 tracking-wide">
                  Expertise & Formation
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              item.submenu ? (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-500 flex items-center gap-1 overflow-hidden animate-in slide-in-from-top-2 ${
                      isActive(item.href) || item.submenu.some(sub => isActive(sub.href))
                        ? 'text-accent bg-accent/15 glow-effect scale-105 shadow-lg shadow-accent/20'
                        : 'text-primary-foreground/90 hover:text-accent hover:bg-accent/10 hover:scale-105 hover:shadow-md hover:shadow-accent/10'
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">{item.name}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    {(isActive(item.href) || item.submenu.some(sub => isActive(sub.href))) && (
                      <div className="absolute inset-0 bg-gradient-accent opacity-15 rounded-xl animate-pulse"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                  </Link>
                  
                  {/* Submenu Dropdown */}
                  <div 
                    className={`absolute top-full left-0 mt-2 w-56 bg-primary/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-accent/20 overflow-hidden transition-all duration-300 origin-top ${
                      isServicesOpen 
                        ? 'opacity-100 scale-100 translate-y-0 visible' 
                        : 'opacity-0 scale-95 -translate-y-2 invisible'
                    }`}
                    style={{ zIndex: 100 }}
                  >
                    <div className="p-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                            isActive(subItem.href)
                              ? 'bg-accent/20 text-accent shadow-md shadow-accent/10 glow-effect'
                              : 'text-primary-foreground/90 hover:bg-accent/10 hover:text-accent hover:translate-x-1'
                          }`}
                        >
                          <span className="relative z-10">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
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
          <div className="lg:hidden absolute top-full left-0 right-0 glass-nav animate-in slide-in-from-top-2 duration-300" style={{ zIndex: 99 }}>
            <nav className="px-4 py-6 space-y-3">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 animate-in slide-in-from-left-3 ${
                      isActive(item.href) || (item.submenu && item.submenu.some(sub => isActive(sub.href)))
                        ? 'bg-gradient-accent text-white shadow-accent glow-effect'
                        : 'text-foreground hover:bg-accent/5 hover:text-accent glass-card'
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                            isActive(subItem.href)
                              ? 'bg-accent/20 text-accent font-medium'
                              : 'text-foreground/80 hover:bg-accent/5 hover:text-accent'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};