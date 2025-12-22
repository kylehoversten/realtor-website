import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Award, Target, Briefcase, Users } from "lucide-react";

export default function Story() {
  const experiences = [
    {
      title: "Real Estate Professional",
      role: "Realtor & Investor",
      description: "Combining market analysis with negotiation expertise to serve buyers, sellers, and investors in the Twin Cities market."
    },
    {
      title: "Medical Device Leadership",
      role: "Strategic Professional",
      description: "Years of experience in high-pressure environments, managing complex stakeholders and delivering critical results."
    },
    {
      title: "Community Focused",
      role: "Shakopee Resident",
      description: "Deeply invested in the local community, understanding the nuances of our schools, neighborhoods, and future developments."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <div className="bg-muted py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">My Story</h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              A journey defined by leadership, strategic vision, and a commitment to excellence.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="prose prose-lg prose-headings:font-display prose-headings:text-primary prose-a:text-secondary max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 border-l-4 border-secondary pl-4">A Foundation of Excellence</h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                My path to real estate wasn't traditional, and that's exactly why I bring unique value to my clients. With a robust background as a Medical Device Professional, I spent years honing skills that are directly transferable to your real estate transaction: strategic planning, complex negotiation, and an unyielding focus on results.
              </p>
              
              <div className="my-12 p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-secondary" />
                  My Philosophy
                </h3>
                <p className="italic text-gray-700 text-lg">
                  "Real estate is one of the most significant financial decisions you will make. You deserve a partner who approaches it with the same rigor, professionalism, and strategic foresight as a major business acquisition."
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">Why I Became an Agent</h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                I've always been passionate about real estate investing. After seeing the gap in the market for truly data-driven, professional representation, I decided to transition my skills to help others achieve their property goals. Whether it's finding the perfect family home in Shakopee or identifying a high-yield investment property, I treat every transaction as if it were my own.
              </p>
            </motion.div>

            {/* Experience Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 not-prose">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4 text-secondary">
                    {idx === 0 ? <Briefcase /> : idx === 1 ? <Award /> : <Users />}
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-1">{exp.title}</h3>
                  <p className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">{exp.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="https://docs.google.com/document/d/1yWlVl_q_4XwX-YhZ-ZzZz/edit" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all px-8 py-6 rounded-full text-lg">
                  <FileText className="mr-2 w-5 h-5" />
                  View Professional Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
