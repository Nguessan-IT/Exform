import React, { useState } from 'react';
import { GraduationCap, User, Mail, Phone, Building, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 2: Professional Info
    company: '',
    position: '',
    experience: '',
    
    // Step 3: Training Selection
    training: '',
    startDate: '',
    motivation: '',
  });

  const trainings = [
    { value: 'vibration', label: t('training.vibration') },
    { value: 'hydraulics', label: t('training.hydraulics') },
    { value: 'ammonia', label: t('training.ammonia') },
    { value: 'filtration', label: t('training.filtration') },
    { value: 'pressure', label: t('training.pressure') },
    { value: 'management', label: t('training.management') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inscription réussie !",
        description: "Nous vous contacterons sous 48h pour confirmer votre inscription.",
      });
      navigate('/thanks');
    }, 2000);
  };

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.company && formData.position;
      case 3:
        return formData.training && formData.startDate;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen pt-20 py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
            <GraduationCap className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-display text-foreground mb-4">
            {t('register.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('register.subtitle')}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12 fade-in">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step <= currentStep
                      ? 'bg-accent text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-4 transition-colors ${
                      step < currentStep ? 'bg-accent' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-8">
            <span className={`text-sm ${currentStep >= 1 ? 'text-accent font-medium' : 'text-muted-foreground'}`}>
              Informations personnelles
            </span>
            <span className={`text-sm ${currentStep >= 2 ? 'text-accent font-medium' : 'text-muted-foreground'}`}>
              Informations professionnelles
            </span>
            <span className={`text-sm ${currentStep >= 3 ? 'text-accent font-medium' : 'text-muted-foreground'}`}>
              Choix de formation
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="card-elevated max-w-2xl mx-auto fade-in">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <User className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h2 className="text-section text-foreground">
                    Informations Personnelles
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Prénom *
                    </label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom *
                    </label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Téléphone *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+225 07 00 00 00 00"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Professional Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Building className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h2 className="text-section text-foreground">
                    Informations Professionnelles
                  </h2>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Entreprise *
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Poste occupé *
                  </label>
                  <Input
                    value={formData.position}
                    onChange={(e) => handleChange('position', e.target.value)}
                    placeholder="Votre poste actuel"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Années d'expérience
                  </label>
                  <Select onValueChange={(value) => handleChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre niveau d'expérience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 ans</SelectItem>
                      <SelectItem value="3-5">3-5 ans</SelectItem>
                      <SelectItem value="6-10">6-10 ans</SelectItem>
                      <SelectItem value="10+">Plus de 10 ans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Training Selection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h2 className="text-section text-foreground">
                    Choix de Formation
                  </h2>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Formation souhaitée *
                  </label>
                  <Select onValueChange={(value) => handleChange('training', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez votre formation" />
                    </SelectTrigger>
                    <SelectContent>
                      {trainings.map((training) => (
                        <SelectItem key={training.value} value={training.value}>
                          {training.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Date de début souhaitée *
                  </label>
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleChange('startDate', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Motivation / Objectifs
                  </label>
                  <Textarea
                    value={formData.motivation}
                    onChange={(e) => handleChange('motivation', e.target.value)}
                    placeholder="Décrivez vos objectifs et motivations pour cette formation..."
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {currentStep > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Précédent
                </Button>
              ) : (
                <Link to="/training">
                  <Button type="button" variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour aux formations
                  </Button>
                </Link>
              )}

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="btn-primary"
                >
                  Suivant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!isStepValid() || isSubmitting}
                  className="btn-hero"
                >
                  {isSubmitting ? 'Inscription en cours...' : t('register.submit')}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};