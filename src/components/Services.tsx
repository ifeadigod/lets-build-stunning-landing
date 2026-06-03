import React from 'react';
import { Paintbrush, Scissors, Ruler, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Services = () => {
  const services = [
    {
      title: 'Custom Curtains',
      description: 'Bespoke window treatments designed to match your interior perfectly.',
      icon: Scissors,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/curtain-texture-eb8fea22-1780484537417.webp"
    },
    {
      title: 'Interior Design',
      description: 'Complete space planning and aesthetic consultations for your home or office.',
      icon: Paintbrush,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/interior-design-1-bce78ed3-1780484536536.webp"
    },
    {
      title: 'Measurement & Fitting',
      description: 'Professional on-site measurements and precision installation services.',
      icon: Ruler,
    },
    {
      title: 'Color Consulting',
      description: 'Expert advice on palettes that bring harmony and vibrance to your rooms.',
      icon: Sparkles,
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide end-to-end solutions from fabric selection to the final stroke of design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <CardHeader className={service.image ? 'pt-6' : 'pt-10'}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
