import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/hero-curtains-9bdc3c31-1780484537325.webp"
          alt="Luxury Curtains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Elegance in Every <span className="text-secondary">Fold</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Premium curtains and bespoke interior design solutions tailored to your unique style. 
            Transform your living space with Kanyvalncolors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8">
              View Gallery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
