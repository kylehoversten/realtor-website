import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Award, Target, Briefcase, Users } from "lucide-react";

export default function Story() {
  const experiences = [
    {
      title: "Early Investor",
      role: "First rental purchase at 19",
      description: "Bought and renovated my first rental property at 19, learning hands-on how value is created through strategic improvements."
    },
    {
      title: "Portfolio Builder",
      role: "56 rental units",
      description: "Co-founded an investor LLC and helped grow a portfolio that includes duplexes, light industrial, and multi-family properties."
    },
    {
      title: "Medical Device Leadership",
      role: "Clinical & Sales Leadership",
      description: "Over 20 years in the medical field, including a decade at Medtronic as Clinical Specialist Manager for Neuromodulation — honing negotiation, leadership, and complex problem solving."
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
              <h2 className="text-3xl font-bold mb-6 border-l-4 border-secondary pl-4">About Kyle Hoversten</h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Real estate has been a defining part of my life for more than two decades—long before I became a Realtor. I purchased my first rental property at 19 using an FHA loan and a modest down payment. Over the next dozen years I renovated and improved that property, which taught me the power of strategic improvements, equity building, and long-term appreciation.
              </p>

              <p className="mb-6 leading-relaxed text-gray-600">
                Since then, I have partnered with other investors across a variety of property types, including light industrial, duplexes, and multi-family complexes. In 2014 I co-founded an LLC with three partners and together we grew a portfolio that now includes over 50 rental units. Designing systems and processes to operate and scale that portfolio is one of the most valuable experiences of my career.
              </p>

              <div className="my-12 p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-secondary" />
                  Professional Background
                </h3>
                <p className="italic text-gray-700 text-lg">
                  I spent over 20 years in the medical field, progressing from clinical support to medical device leadership. At Medtronic I served as Clinical Specialist Manager for Neuromodulation, where I learned communication, negotiation, and decision-making skills that translate directly to real estate transactions.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">Why I Do This</h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                In 2023 I transitioned into real estate full-time and earned my Realtor® license. I partner with a seasoned broker and focus on making transactions strategic and stress-free. I love helping clients understand how appreciation and thoughtful improvements can accelerate value, whether they're buying their first home or expanding a portfolio.
              </p>

              <p className="mb-6 leading-relaxed text-gray-600">
                My clinical and medical device experience also gives me a unique perspective when guiding clients through major life transitions, including moves to independent or assisted living. I take pride in providing clear, compassionate guidance at every step.
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
                href="https://docs.google.com/document/d/1pIA__DqcR9Zy7Boxd9sAAU2E-dFXhMEU/edit?usp=sharing&ouid=111821333543450558658&rtpof=true&sd=true" 
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
