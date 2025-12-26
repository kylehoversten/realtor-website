import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";


export default function Resume() {
  const docId = "1pIA__DqcR9Zy7Boxd9sAAU2E-dFXhMEU"; // same doc ID as the current Story link
  const embedSrc = `https://docs.google.com/document/d/${docId}/preview`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow pt-20">
        <div className="bg-muted py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Resume</h1>
            <p className="text-gray-600 mb-6">View or download my professional resume below. If the embed doesn't load, open it in a new tab.</p>
            <div className="mb-6">
              <a href={"https://docs.google.com/document/d/" + docId + "/edit"} className="text-sm text-secondary underline" target="_blank" rel="noopener noreferrer">Open in Google Docs</a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="aspect-[4/3] sm:aspect-[16/9] w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              src={embedSrc}
              title="Kyle Hoversten Resume"
              className="w-full h-full"
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>

          <div className="text-center mt-6">
            <a href={"https://docs.google.com/document/d/" + docId + "/export?format=pdf"} className="inline-block bg-secondary text-primary rounded-full px-6 py-3 font-bold hover:bg-secondary/90 transition" target="_blank" rel="noopener noreferrer">Download PDF</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
