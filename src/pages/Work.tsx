import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Activity, Users, Leaf } from "lucide-react";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "education", label: "Education" },
    { id: "healthcare", label: "Healthcare" },
    { id: "community", label: "Community Welfare" },
  ];

  const projects = [
    {
      category: "education",
      title: "Digital Literacy Centers",
      description: "Establishing computer labs in rural schools to bridge the digital divide and prepare students for the modern world.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      impact: "15,000+ students trained",
      icon: GraduationCap,
    },
    {
      category: "healthcare",
      title: "Mobile Health Clinics",
      description: "Bringing quality healthcare to remote villages through fully equipped mobile medical units.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      impact: "25,000+ patients served annually",
      icon: Activity,
    },
    {
      category: "community",
      title: "Women Empowerment Program",
      description: "Skill development and entrepreneurship training for women to achieve financial independence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
      impact: "5,000+ women empowered",
      icon: Users,
    },
    {
      category: "education",
      title: "Scholarship Initiative",
      description: "Providing financial support to meritorious students from underprivileged backgrounds.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      impact: "2,000+ scholarships awarded",
      icon: GraduationCap,
    },
    {
      category: "healthcare",
      title: "Nutrition Programs",
      description: "Combating malnutrition through supplementary feeding and nutrition education.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      impact: "10,000+ children benefited",
      icon: Activity,
    },
    {
      category: "community",
      title: "Sustainable Agriculture",
      description: "Training farmers in organic farming and modern agricultural practices.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      impact: "3,000+ farmers trained",
      icon: Leaf,
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
     <section className="relative h-[40vh] md:h-[60vh] flex items-start justify-center overflow-hidden pt-32 mt-6">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
            alt="Our work background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
           <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent mb-6">
              Our Work
            </h1>
            <p className="text-xl text-foreground/90 leading-relaxed">
              Discover the programs and initiatives making a real difference in communities across India.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-transparent sticky top-28 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={activeFilter === category.id ? "bg-primary text-white" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <project.icon className="w-8 h-8 mb-2" />
                      <p className="font-semibold">{project.impact}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default Work;
