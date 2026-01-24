import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Users, Clock, Award, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
   emailjs.send(
    "service_ifktf7l",     // 🔁 put your Service ID
    "template_qz5hhtl",    // 🔁 put your Template ID
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interest,
      message: formData.message,
    },
    "CZTEGobLiON3JKAeu"      // 🔁 put your Public Key
  )
  .then(() => {
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", interest: "", message:"" });
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    toast({
      title: "Failed to send message",
      description: "Please try again later.",
      variant: "destructive",
    });
  });
};


  const programs = [
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Engage directly with communities, organize awareness programs, and help build lasting relationships.",
      commitment: "4-6 hours/week",
    },
    {
      icon: Users,
      title: "Teaching & Mentoring",
      description: "Share your knowledge by teaching students or mentoring young adults in various skills.",
      commitment: "6-8 hours/week",
    },
    {
      icon: Clock,
      title: "Event Support",
      description: "Help organize and manage our events, from health camps to fundraising activities.",
      commitment: "Flexible",
    },
    {
      icon: Award,
      title: "Professional Services",
      description: "Contribute your professional expertise in areas like marketing, design, or finance.",
      commitment: "Flexible",
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop"
            alt="Volunteers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              Be the change you wish to see. Join our community of passionate volunteers making a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Volunteer?
            </h2>
            <p className="text-lg text-muted-foreground">
              Volunteering is more than giving time—it's about creating meaningful connections, learning new skills, and being part of something bigger than yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Active Volunteers</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Programs</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">States Covered</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <p className="text-muted-foreground">Lives Touched</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Programs */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Volunteer Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    Time Commitment: {program.commitment}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Join Our Team
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get in touch with you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest">Area of Interest *</Label>
                    <Input
                      id="interest"
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      placeholder="e.g., Education, Healthcare, Community"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Why do you want to volunteer? *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your motivation and skills..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default Volunteer;
