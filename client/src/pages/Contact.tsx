import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <div className="bg-primary text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-gray-300 font-light">
              Ready to start your real estate journey? I'm here to answer your questions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-24 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            
            {/* Contact Info */}
            <div className="bg-gray-50 p-10 md:w-1/3 border-r border-gray-100">
              <h3 className="font-display text-2xl font-bold text-primary mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:612-210-7777" className="text-lg font-medium text-primary hover:text-secondary transition-colors">
                      (612) 210-7777
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:khoversten@comcast.net" className="text-lg font-medium text-primary hover:text-secondary transition-colors">
                      khoversten@comcast.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Office</p>
                    <p className="text-lg font-medium text-primary">
                      ReMax Advantage Plus<br />
                      Shakopee, MN
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Social</p>
                    <a href="https://www.linkedin.com/in/kyle-hoversten-907a956" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-primary hover:text-secondary transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:w-2/3 bg-white">
              <h3 className="font-display text-2xl font-bold text-primary mb-2">Send a Message</h3>
              <p className="text-gray-500 mb-8">Complete the form below and I will get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <Input required placeholder="Jane" className="bg-gray-50 border-gray-200 focus:border-primary h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input required placeholder="Doe" className="bg-gray-50 border-gray-200 focus:border-primary h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input required type="email" placeholder="jane@example.com" className="bg-gray-50 border-gray-200 focus:border-primary h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" className="bg-gray-50 border-gray-200 focus:border-primary h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea required placeholder="How can I help you with your real estate goals?" className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-primary resize-none p-4" />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-lg font-bold rounded-lg transition-all"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>Send Message <Send className="ml-2 w-4 h-4" /></>
                  )}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
