import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Event1 from "@/assets/event1.jpg";
import Event2 from "@/assets/event2.jpg";
import Event3 from "@/assets/event3.jpg"; 
import Event4 from "@/assets/event4.jpg";
import Event5 from "@/assets/event5.jpg";
import Event6 from "@/assets/event6.jpg"; 
import Event7 from "@/assets/event7.jpg";
import Event8 from "@/assets/event8.jpg";
import Event9 from "@/assets/event9.jpg";
import Event10 from "@/assets/event10.jpg";
import Event11 from "@/assets/event11.jpg";
import Event12 from "@/assets/event12.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: Event1,
      title: "Community Outreach Program",
      category: "Community",
    },
    {
      url: Event2,
      title: "Digital Literacy Class",
      category: "Education",
    },
    {
      url: Event3,
      title: "Mobile Health Clinic",
      category: "Healthcare",
    },
    {
      url: Event4,
      title: "Student Scholarship Ceremony",
      category: "Education",
    },
    {
      url: Event5,
      title: "Women Empowerment Workshop",
      category: "Community",
    },
    {
      url: Event6,
      title: "Health Awareness Camp",
      category: "Healthcare",
    },
    {
      url: Event7,
      title: "Volunteer Training Session",
      category: "Community",
    },
    {
      url: Event8,
      title: "Sustainable Agriculture Training",
      category: "Community",
    },
    {
      url: Event9,
      title: "Education Summit",
      category: "Education",
    },
    {
      url: Event10,
      title: "Education Summit",
      category: "Education",
    },
    {
      url: Event11,
      title: "Education Summit",
      category: "Education",
    },
    {
      url: Event12,
      title: "Education Summit",
      category: "Education",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/[0.70]" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
            alt="Gallery background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent mb-6">
              Gallery
            </h1>
            <p className="text-xl text-foreground/90 leading-relaxed">
              A visual journey through our work and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in"
                onClick={() => setSelectedImage(image.url)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white font-bold text-lg">{image.title}</p>
                    <p className="text-white/90 text-sm">{image.category}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-2xl text-foreground">×</span>
            </button>
          </div>
        </div>
      )}

        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
