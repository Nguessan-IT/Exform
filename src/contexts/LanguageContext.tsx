import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'Présentation',
    'nav.services': 'Services',
    'nav.laboratory': 'Laboratoire',
    'nav.training': 'Formations',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Expertise Technique & Formation aux Métiers',
    'hero.subtitle': 'Excellence, Innovation et Professionnalisme au service de votre développement',
    'hero.cta': 'Découvrir nos services',
    
    // About
    'about.title': 'À propos d\'EXFORM',
    'about.subtitle': 'Notre mission, nos valeurs, notre vision',
    'about.cta': 'Contactez-nous',
    
    // Services
    'services.title': 'Découvrez nos services de pointe',
    'services.laboratory': 'Laboratoire d\'analyse physico-chimique',
    'services.construction': 'BTP et équipements industriels',
    'services.training': 'Formation continue qualifiante',
    'services.maintenance': 'Pluri-mécanique et maintenance industrielle',
    
    // Training
    'training.title': 'Nos Formations',
    'training.register': 'Je m\'inscris',
    'training.vibration': 'Analyse vibratoire',
    'training.hydraulics': 'Hydraulique',
    'training.ammonia': 'Ammoniac',
    'training.filtration': 'Filtration air',
    'training.pressure': 'Pression/Autoclave',
    'training.management': 'Management',
    
    // Laboratory
    'lab.title': 'Laboratoire d\'Analyse',
    'lab.subtitle': 'Expertise physico-chimique, ISO, HACCP, analyses complètes',
    'lab.cta': 'Contactez-nous pour vos analyses',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets',
    'contact.address': 'Yopougon – en face du CHU',
    'contact.form.title': 'Envoyez-nous un Message',
    'contact.form.name': 'Nom complet',
    'contact.form.name.placeholder': 'Votre nom complet',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre.email@exemple.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Décrivez votre besoin ou votre question...',
    'contact.form.send': 'Envoyer',
    'contact.form.sending': 'Envoi en cours...',
    'contact.info.title': 'Nos Coordonnées',
    'contact.info.address': 'Adresse',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.hours': 'Horaires',
    'contact.hours.weekday': 'Lundi - Vendredi: 8h - 18h',
    'contact.hours.saturday': 'Samedi: 8h - 13h',
    'contact.map.title': 'Notre Localisation',
    'contact.map.subtitle': 'Retrouvez-nous facilement à Yopougon, en face du CHU',
    'contact.map.placeholder': 'Intégration Google Maps',
    'contact.map.coming': 'Carte interactive disponible prochainement',
    'contact.faq.title': 'Questions Fréquentes',
    'contact.faq.q1': 'Quels sont vos délais de réponse ?',
    'contact.faq.a1': 'Nous nous engageons à répondre à toute demande dans les 24h ouvrées.',
    'contact.faq.q2': 'Proposez-vous des formations sur site ?',
    'contact.faq.a2': 'Oui, nous pouvons organiser des formations directement dans vos locaux selon vos besoins.',
    'contact.faq.q3': 'Comment obtenir un devis pour une analyse ?',
    'contact.faq.a3': 'Contactez-nous avec les détails de votre besoin, nous vous fournirons un devis gratuit sous 48h.',
    'contact.quick.training': 'S\'inscrire à une formation',
    'contact.quick.analysis': 'Demander une analyse',
    'contact.toast.success': 'Message envoyé !',
    'contact.toast.description': 'Nous vous contacterons très bientôt.',
    
    // Home
    'home.stats.clients': 'Clients Satisfaits',
    'home.stats.experience': 'Années d\'Expérience',
    'home.stats.formations': 'Formations Dispensées',
    'home.services.subtitle': 'Découvrez notre gamme complète de services techniques et de formations professionnelles',
    'home.why.title': 'Pourquoi Choisir EXFORM ?',
    'home.why.subtitle': 'Avec plus de 15 ans d\'expérience, EXFORM s\'impose comme le partenaire de référence pour vos besoins en expertise technique et formation professionnelle.',
    'home.why.point1': 'Expertise technique certifiée et reconnue',
    'home.why.point2': 'Formations adaptées aux besoins du marché',
    'home.why.point3': 'Laboratoire équipé aux normes internationales',
    'home.why.point4': 'Accompagnement personnalisé de vos projets',
    'home.cta.title': 'Prêt à Développer Vos Compétences ?',
    'home.cta.subtitle': 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins en formation et expertise technique',
    
    // Registration
    'register.title': 'Inscription à une formation',
    'register.subtitle': 'Bonjour, veuillez remplir le formulaire pour vous inscrire à une formation',
    'register.submit': 'S\'inscrire',
    
    // Thanks
    'thanks.title': 'Merci !',
    'thanks.message': 'Nous vous contacterons très bientôt',
    
    // Common
    'common.learn_more': 'En savoir plus',
    'common.back_home': 'Retour à l\'accueil',
    'common.services_badge': 'Nos Services',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.laboratory': 'Laboratory',
    'nav.training': 'Training',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Technical Expertise & Professional Training',
    'hero.subtitle': 'Excellence, Innovation and Professionalism serving your development',
    'hero.cta': 'Explore our Services',
    
    // About
    'about.title': 'About EXFORM',
    'about.subtitle': 'Our mission, our values, our vision',
    'about.cta': 'Contact us',
    
    // Services
    'services.title': 'Discover our cutting-edge services',
    'services.laboratory': 'Physico-chemical Analysis Laboratory',
    'services.construction': 'Construction & Industrial Equipment',
    'services.training': 'Continuous Professional Training',
    'services.maintenance': 'Multi-mechanics & Industrial Maintenance',
    
    // Training
    'training.title': 'Our Training Programs',
    'training.register': 'Register now',
    'training.vibration': 'Vibration Analysis',
    'training.hydraulics': 'Hydraulics',
    'training.ammonia': 'Ammonia Safety',
    'training.filtration': 'Air Filtration',
    'training.pressure': 'Pressure/Autoclave',
    'training.management': 'Management',
    
    // Laboratory
    'lab.title': 'Analysis Laboratory',
    'lab.subtitle': 'Physico-chemical expertise, ISO, HACCP, comprehensive analysis',
    'lab.cta': 'Contact us for your analyses',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.subtitle': 'We are here to listen and answer all your questions and support you in your projects',
    'contact.address': 'Yopougon – opposite CHU Hospital',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Full name',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email': 'Email address',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Describe your needs or ask your question...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.info.title': 'Our Contact Information',
    'contact.info.address': 'Address',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.hours': 'Business Hours',
    'contact.hours.weekday': 'Monday - Friday: 8am - 6pm',
    'contact.hours.saturday': 'Saturday: 8am - 1pm',
    'contact.map.title': 'Our Location',
    'contact.map.subtitle': 'Find us easily in Yopougon, opposite CHU Hospital',
    'contact.map.placeholder': 'Google Maps Integration',
    'contact.map.coming': 'Interactive map coming soon',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.q1': 'What are your response times?',
    'contact.faq.a1': 'We are committed to responding to any request within 24 working hours.',
    'contact.faq.q2': 'Do you offer on-site training?',
    'contact.faq.a2': 'Yes, we can organize training directly at your premises according to your needs.',
    'contact.faq.q3': 'How to get a quote for analysis?',
    'contact.faq.a3': 'Contact us with the details of your needs, we will provide you with a free quote within 48 hours.',
    'contact.quick.training': 'Register for training',
    'contact.quick.analysis': 'Request analysis',
    'contact.toast.success': 'Message sent!',
    'contact.toast.description': 'We will contact you very soon.',
    
    // Home
    'home.stats.clients': 'Satisfied Clients',
    'home.stats.experience': 'Years of Experience',
    'home.stats.formations': 'Training Programs Delivered',
    'home.services.subtitle': 'Discover our complete range of technical services and professional training programs',
    'home.why.title': 'Why Choose EXFORM?',
    'home.why.subtitle': 'With over 15 years of experience, EXFORM has established itself as the reference partner for your technical expertise and professional training needs.',
    'home.why.point1': 'Certified and recognized technical expertise',
    'home.why.point2': 'Training adapted to market needs',
    'home.why.point3': 'Laboratory equipped to international standards',
    'home.why.point4': 'Personalized project support',
    'home.cta.title': 'Ready to Develop Your Skills?',
    'home.cta.subtitle': 'Contact us today to discuss your training and technical expertise needs',
    
    // Registration
    'register.title': 'Training Registration',
    'register.subtitle': 'Please fill in the form to register for a training program',
    'register.submit': 'Register',
    
    // Thanks
    'thanks.title': 'Thank you!',
    'thanks.message': 'We will contact you shortly',
    
    // Common
    'common.learn_more': 'Learn more',
    'common.back_home': 'Back to home',
    'common.services_badge': 'Our Services',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};