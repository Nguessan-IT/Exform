import React, { useState } from 'react';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: language === 'fr' 
        ? "Bonjour! Je suis l'assistant virtuel d'EXFORM. Comment puis-je vous aider aujourd'hui?" 
        : "Hello! I'm EXFORM's virtual assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedResponses = {
    fr: {
      services: "EXFORM offre trois services principaux : Laboratoire d'analyse physico-chimique, Formation continue qualifiante, et BTP & équipements industriels. Voulez-vous en savoir plus sur l'un de ces services ?",
      laboratory: "Notre laboratoire propose des analyses complètes selon les normes ISO et HACCP. Nous couvrons les analyses d'eau, air, poussière, son et environnement.",
      training: "Nos formations incluent l'analyse vibratoire, hydraulique, systèmes d'étanchéité, risques liés à l'ammoniac, et bien plus. Souhaitez-vous vous inscrire ?",
      contact: "Vous pouvez nous contacter à Yopougon en face du CHU, ou utiliser notre formulaire de contact en ligne. Notre équipe vous répondra rapidement.",
      default: "Je vous remercie pour votre question. Pour des informations détaillées, je vous invite à nous contacter directement ou à consulter nos pages de services."
    },
    en: {
      services: "EXFORM offers three main services: Physico-chemical analysis laboratory, Qualifying continuing education, and Construction & industrial equipment. Would you like to know more about any of these services?",
      laboratory: "Our laboratory provides comprehensive analyses according to ISO and HACCP standards. We cover water, air, dust, sound and environmental analyses.",
      training: "Our training includes vibratory analysis, hydraulics, sealing systems, ammonia-related risks, and much more. Would you like to register?",
      contact: "You can contact us in Yopougon opposite the CHU, or use our online contact form. Our team will respond quickly.",
      default: "Thank you for your question. For detailed information, I invite you to contact us directly or consult our service pages."
    }
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    const responses = predefinedResponses[language];
    
    if (lowerMessage.includes('service') || lowerMessage.includes('offre')) {
      return responses.services;
    }
    if (lowerMessage.includes('laboratoire') || lowerMessage.includes('laboratory') || lowerMessage.includes('analyse')) {
      return responses.laboratory;
    }
    if (lowerMessage.includes('formation') || lowerMessage.includes('training') || lowerMessage.includes('cours')) {
      return responses.training;
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('adresse') || lowerMessage.includes('téléphone')) {
      return responses.contact;
    }
    
    return responses.default;
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-accent hover:bg-accent-light shadow-2xl animate-bounce-gentle"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-scale-in">
          <Card className="w-80 h-96 bg-white/95 backdrop-blur-xl border-0 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-accent p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Assistant EXFORM</div>
                    <div className="text-xs opacity-80">
                      {language === 'fr' ? 'En ligne' : 'Online'}
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-64">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm animate-fade-in ${
                      message.isBot
                        ? 'bg-muted text-muted-foreground'
                        : 'bg-accent text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-muted/50">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === 'fr' ? 'Tapez votre message...' : 'Type your message...'}
                  className="flex-1 border-0 bg-white/80 focus:ring-2 focus:ring-accent"
                />
                <Button
                  onClick={sendMessage}
                  size="icon"
                  className="bg-accent hover:bg-accent-light text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};