import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.toast.success'),
        description: t('contact.toast.description'),
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      details: [t('contact.address')],
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      details: ['info@exform.ci', 'contact@exform.ci'],
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      details: ['+225 07 07 00 00 00', '+225 05 05 00 00 00'],
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      details: [t('contact.hours.weekday'), t('contact.hours.saturday')],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 hero-background-contact text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-display mb-6 bounce-in text-foreground">
            {t('contact.title')}
          </h1>
          <p className="text-xl mb-8 text-foreground/80 slide-up">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className="slide-right">
              <div className="card-elevated form-float glass-card animate-shimmer">
                <h2 className="text-section text-foreground mb-6 animate-pulse-glow">
                  {t('contact.form.title')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-float">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full input-glow transition-all duration-300"
                      placeholder={t('contact.form.name.placeholder')}
                    />
                  </div>

                  <div className="form-float">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full input-glow transition-all duration-300"
                      placeholder={t('contact.form.email.placeholder')}
                    />
                  </div>

                  <div className="form-float">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full input-glow transition-all duration-300"
                      placeholder={t('contact.form.message.placeholder')}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
                  >
                    {isSubmitting ? (
                      <span className="loading-pulse">{t('contact.form.sending')}</span>
                    ) : (
                      <>
                        {t('contact.form.send')}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="slide-left">
              <h2 className="text-section text-foreground mb-8 animate-fade-in">
                {t('contact.info.title')}
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card-elevated hover:scale-105 transition-all duration-300 animate-shimmer" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-card-title text-card-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-body text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Quick Actions */}
              <div className="mt-8 space-y-4">
                <Link to="/training" className="block">
                  <Button variant="outline" className="w-full justify-start hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 glass">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {t('contact.quick.training')}
                  </Button>
                </Link>
                <Link to="/laboratory" className="block">
                  <Button variant="outline" className="w-full justify-start hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 glass">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {t('contact.quick.analysis')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 bounce-in">
            <h2 className="text-section text-foreground mb-6">
              {t('contact.map.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('contact.map.subtitle')}
            </p>
          </div>

          <div className="card-elevated hover:scale-105 transition-all duration-500 slide-up">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full flex items-center justify-center gradient-hero">
                <div className="text-center text-white">
                  <MapPin className="h-16 w-16 text-white mx-auto mb-4 animate-float" />
                  <h3 className="text-card-title mb-2">
                    {t('contact.map.placeholder')}
                  </h3>
                  <p className="text-body text-white/80">
                    {t('contact.map.coming')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 gradient-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              {t('contact.faq.title')}
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: t('contact.faq.q1'),
                answer: t('contact.faq.a1')
              },
              {
                question: t('contact.faq.q2'),
                answer: t('contact.faq.a2')
              },
              {
                question: t('contact.faq.q3'),
                answer: t('contact.faq.a3')
              }
            ].map((faq, index) => (
              <div key={index} className="card-elevated hover:scale-105 transition-all duration-300 animate-shimmer glass-card" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-card-title text-card-foreground mb-3 animate-pulse-glow">
                  {faq.question}
                </h3>
                <p className="text-body text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};