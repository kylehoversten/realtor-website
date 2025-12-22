import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePosts } from "@/hooks/use-posts";
import { format } from "date-fns";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Loader2 } from "lucide-react";

export default function Blog() {
  const { data: posts, isLoading, error } = usePosts();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <div className="bg-primary py-20 px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Market Insights</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
            Stay informed with the latest trends, investment strategies, and local real estate news.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="animate-spin w-10 h-10 text-primary" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">Unable to load posts at the moment.</p>
              <p className="text-gray-500 text-sm">Please try again later.</p>
            </div>
          ) : posts?.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-display text-2xl text-gray-400 mb-2">No posts yet</h3>
              <p className="text-gray-500">Check back soon for market updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.map((post, idx) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden bg-gray-200 relative">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                        <span className="text-white/20 font-display text-4xl font-bold">KH</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="font-display text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <span className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary cursor-pointer transition-colors group/link">
                        Read Article <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
