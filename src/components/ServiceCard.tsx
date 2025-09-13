import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  link,
  buttonText,
  className = "",
}) => {
  return (
    <div className={`card-service group ${className}`}>
      <div className="aspect-video mb-6 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-card-title text-card-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-body text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <Link to={link}>
          <Button 
            variant="ghost" 
            className="group/button p-0 h-auto font-medium text-primary hover:text-accent"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};