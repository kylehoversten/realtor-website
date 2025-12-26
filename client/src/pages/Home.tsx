import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home as HomeIcon, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Unsplash image of modern luxury home architecture */}
            <img 
              src="https://pixabay.com/get/g2650246cdb84d6d7191094da7a2fc2ac76d777c974426d45c4ee7a0a4098634369e955a9a00a7166a78d3e8da95588bc6a8ff06751b43a9cab64b43f6f4fcfed_1280.jpg" 
              alt="Luxury Real Estate" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-secondary font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                Your Trusted Partner in Real Estate
              </h2>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Results Driven.<br/>
                <span className="text-white/90 font-light italic font-display">Client Focused.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                Realtor® & investor — buying and improving properties since 19. I combine real-world investing experience and a background in medical device leadership to deliver strategic, data-driven results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="h-14 px-8 text-lg bg-secondary text-primary hover:bg-white hover:text-primary transition-all duration-300 font-bold rounded-full">
                    Start Your Journey
                  </Button>
                </Link>
                <Link href="/story">
                  <Button variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-medium rounded-full bg-transparent">
                    Meet Kyle
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-4">Why Choose Kyle?</h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Real estate isn't just about transactions; it's about life transitions. With a background in high-stakes professional environments, I bring a unique level of precision, strategy, and negotiation to every deal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <TrendingUp className="w-10 h-10 text-secondary" />,
                  title: "Strategic Insight",
                  description: "Leveraging data and market trends to position your property for maximum value."
                },
                {
                  icon: <Users className="w-10 h-10 text-secondary" />,
                  title: "Client-Centric",
                  description: "A tailored approach that respects your timeline, goals, and unique situation."
                },
                {
                  icon: <HomeIcon className="w-10 h-10 text-secondary" />,
                  title: "Local Expert",
                  description: "Deep roots in Shakopee and the Twin Cities metro area ensure you have the inside track."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="bg-white p-4 rounded-full w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Unsplash image of professional man in suit/business casual */}
                  <img 
                    src="/headshot_2.PNG" 
                    alt="Kyle Hoversten" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              </motion.div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-secondary font-bold tracking-widest uppercase mb-2">About Kyle Hoversten</h4>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-6">Investor • Realtor® • Portfolio Manager</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I bought my first rental at 19 and have been investing ever since—renovating properties, building systems, and scaling a portfolio that now includes multi-family units and other rentals.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With a 20+ year background in the medical device industry and a full-time shift to real estate in 2023, I help clients make strategic, informed decisions throughout every major life transition.
                </p>
                
                <div className="pt-4">
                  <Link href="/story">
                    <Button variant="ghost" className="text-primary hover:text-secondary hover:bg-transparent p-0 font-bold text-lg group">
                      Read Full Bio <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            {/* Abstract architectural pattern */}
            <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Make Your Move?</h2>
            <p className="text-xl text-gray-300 mb-10 font-light max-w-2xl mx-auto">
              Whether you're buying your first home, selling a luxury property, or investing for the future, I'm here to guide you every step of the way.
            </p>
            <Link href="/contact">
              <Button className="bg-secondary text-primary hover:bg-white transition-all px-10 py-6 text-lg font-bold rounded-full shadow-lg shadow-black/20">
                Contact Kyle Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
