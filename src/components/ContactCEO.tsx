import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ContactCEO = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent directly to the CEO. We'll get back to you soon!");
  };

  return (
    <section id="ceo" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Direct Line to the CEO</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              At Kanyvalncolors, we value your feedback and direct inquiries. 
              Whether it's a large-scale project or a specific design vision, 
              our CEO is available to discuss your requirements.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <WhatsAppIcon className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Direct WhatsApp</h4>
                  <a href="https://wa.me/2348023000517" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors underline underline-offset-4">+234 802 300 0517</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Official Email</h4>
                  <a href="mailto:kanyvalncolors@gmail.com" className="text-white/70 hover:text-white transition-colors underline underline-offset-4">kanyvalncolors@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/719f5021-d9c3-4536-a9d4-6144dded4b1d/ceo-avatar-489e4818-1780484537215.webp" 
                alt="CEO Kanyvalncolors" 
                className="w-20 h-20 rounded-full object-cover border-2 border-secondary"
              />
              <div>
                <p className="italic text-white/90 mb-1">"We don't just sell curtains; we craft environments that inspire."</p>
                <p className="font-bold text-secondary text-sm tracking-wider uppercase">Founder & CEO, Kanyvalncolors</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-foreground shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send a Direct Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John Doe" required className="border-slate-200 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" required className="border-slate-200 focus:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Project Inquiry" required className="border-slate-200 focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Message</label>
                <Textarea 
                  placeholder="How can we help you transform your space?" 
                  className="min-h-[120px] border-slate-200 focus:ring-primary"
                  required 
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg group">
                Send Message <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
