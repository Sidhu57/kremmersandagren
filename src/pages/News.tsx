import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const News = () => {
  const articles = [
    {
      title: "50,000 Lives Impacted: A Milestone Achievement",
      excerpt: "Hope Foundation celebrates reaching 50,000 beneficiaries across India, marking a significant milestone in our journey of community transformation.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      date: "February 28, 2025",
      author: "Priya Sharma",
      category: "Impact Story",
      featured: true,
    },
    {
      title: "New Digital Learning Centers Launch in Rural Bihar",
      excerpt: "Five new digital literacy centers equipped with modern technology open their doors to students in remote villages of Bihar.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      date: "February 20, 2025",
      author: "Vikram Singh",
      category: "Education",
      featured: false,
    },
    {
      title: "Mobile Health Clinics Expand to Three New States",
      excerpt: "Our healthcare initiative extends its reach to Maharashtra, Gujarat, and Kerala, bringing quality medical care to underserved communities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      date: "February 15, 2025",
      author: "Anita Desai",
      category: "Healthcare",
      featured: false,
    },
    {
      title: "Women Entrepreneurs Success Stories",
      excerpt: "Meet five inspiring women who transformed their lives through our skill development and entrepreneurship programs.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
      date: "February 10, 2025",
      author: "Rajesh Kumar",
      category: "Community",
      featured: false,
    },
    {
      title: "Annual Charity Marathon Raises Record Funds",
      excerpt: "This year's marathon saw unprecedented participation with over 10,000 runners supporting education initiatives.",
      image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=600&fit=crop",
      date: "February 5, 2025",
      author: "Priya Sharma",
      category: "Events",
      featured: false,
    },
    {
      title: "Partnership with Tech Giants for Digital Education",
      excerpt: "Hope Foundation announces collaboration with leading technology companies to enhance digital learning infrastructure.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      date: "January 28, 2025",
      author: "Vikram Singh",
      category: "Education",
      featured: false,
    },
  ];

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

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
      
      {/* Hero Section with Background Video */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/news-bg.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=1080&fit=crop" alt="News background" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              Stay updated with our latest stories, achievements, and community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-white">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                    {featuredArticle.category}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      {featuredArticle.author}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-primary" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1 text-primary" />
                      {article.author}
                    </div>
                  </div>
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

export default News;
