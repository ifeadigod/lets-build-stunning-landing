import React from 'react';
import { motion } from 'framer-motion';

export const Gallery = () => {
  const images = [
    {
      url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/hero-curtains-9bdc3c31-1780484537325.webp",
      title: "Royal Living Room"
    },
    {
      url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/interior-design-1-bce78ed3-1780484536536.webp",
      title: "Modern Dining Space"
    },
    {
      url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/curtain-texture-eb8fea22-1780484537417.webp",
      title: "Premium Fabric Selection"
    },
    {
      url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/hero-curtains-9bdc3c31-1780484537325.webp",
      title: "Custom Window Treatments"
    },
    {
      url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/interior-design-1-bce78ed3-1780484536536.webp",
      title: "Elegant Office Design"
    },
    {
      url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/curtain-texture-eb8fea22-1780484537417.webp",
      title: "Luxury Textures"
    }
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look at some of our recent transformations and design projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-md"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
