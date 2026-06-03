import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/brand-logo-181fad21-1780484537699.webp" 
        alt="Kanyvalncolors Logo" 
        className="h-full object-contain rounded-md"
      />
      <span className="font-bold text-xl tracking-tight text-primary hidden sm:inline-block">
        Kanyvaln<span className="text-secondary">colors</span>
      </span>
    </div>
  );
};
