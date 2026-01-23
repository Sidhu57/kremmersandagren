import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, GraduationCap, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const causes = [
    {
      icon: GraduationCap,
      title: "Education & Child Development",
      description: "Holistic child development through creches, balwadis, after-school programs, and educational scholarships ensuring quality early education.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Users,
      title: "Women's Empowerment",
      description: "Strengthening Self-Help Groups, skill development training, micro-credit programs, and awareness on health, rights, and gender equality.",
      color: "from-secondary to-accent",
    },
    {
      icon: Activity,
      title: "Community Health & Agriculture",
      description: "Preventive healthcare through camps and awareness programs, promoting organic farming and sustainable livelihoods for rural communities.",
      color: "from-accent to-secondary",
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
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
            alt="Community service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up font-['Comic_Sans_MS',_'Comic_Sans',_cursive]">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>
              Kremmer Sandegren Foundation Pattukottai
            </h1>
            
            <p className="text-base md:text-lg text-foreground/90 mb-4 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
              Creating self-reliant rural communities in Thanjavur district through grassroots empowerment, sustainable development, and participatory programs since 1985.
            </p>
            
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-white/95 via-warm-accent to-white/95 backdrop-blur-md rounded-full px-8 py-4 border-2 border-primary/40 shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
              <Heart className="w-6 h-6 text-primary animate-float drop-shadow-lg" />
              <span className="text-base md:text-lg font-bold text-primary drop-shadow-md tracking-wide">
                Empowering Rural Communities Since 1985
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Focus Area
              </h2>
        </div>

          <div className="grid md:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-none bg-card animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cause.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <cause.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="mb-3 group-hover:text-primary transition-colors">
                    {cause.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {cause.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
               { number: "40+ Years", label: "Serving Rural Communities" },
              { number: "100+", label: "Villages Reached" },
              { number: "2,000+", label: "Self-Help Groups" },
              { number: "15,000+", label: "Families Empowered" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-warm-accent mb-2">{stat.number}</div>
                <div className="text-warm-accent/90 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us in building self-reliant communities. Your support helps empower women, educate children, and create sustainable livelihoods in rural Tamil Nadu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/volunteer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                    Join Our Team
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
