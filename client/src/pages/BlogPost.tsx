import { useRoute } from "wouter";
import { usePost } from "@/hooks/use-posts";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Loader2, Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading } = usePost(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Post not found</h1>
          <Link href="/blog">
            <span className="text-secondary hover:underline cursor-pointer">Back to Blog</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog">
            <span className="inline-flex items-center text-gray-500 hover:text-primary mb-8 cursor-pointer text-sm font-medium transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Insights
            </span>
          </Link>

          <header className="mb-10 text-center">
             <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mb-6">
               <span className="flex items-center bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                 <Calendar className="w-4 h-4 mr-2 text-secondary" />
                 {post.date}
               </span>
               <span className="flex items-center bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                 <User className="w-4 h-4 mr-2 text-secondary" />
                 Kyle Hoversten
               </span>
             </div>
             
             <h1 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight mb-8">
               {post.title}
             </h1>

             {post.imageUrl && (
               <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-10">
                 <img 
                   src={post.imageUrl} 
                   alt={post.title} 
                   className="w-full h-full object-cover"
                 />
               </div>
             )}
          </header>

          <div className="prose prose-lg prose-headings:font-display prose-headings:text-primary prose-a:text-secondary max-w-none text-gray-600 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="bg-muted p-8 rounded-2xl flex items-center space-x-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-display text-2xl font-bold flex-shrink-0">
                KH
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-primary">Written by Kyle Hoversten</h3>
                <p className="text-gray-600 text-sm">Realtor® & investor — bought a first rental at 19, grew a portfolio of multi-family and rental properties, and transitioned to real estate full-time in 2023. Based in Shakopee, MN.</p>
                <Link href="/story"><span className="text-secondary font-medium hover:underline cursor-pointer">Read Kyle’s full story</span></Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
