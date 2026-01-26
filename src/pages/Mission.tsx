import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, BookOpen, Stethoscope, Home, Users } from "lucide-react";

const Mission = () => {
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
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
            alt="Mission background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent mb-4">
              Our Mission & Vision
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Transforming lives through compassionate service and sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A compassionate society where every individual has access to quality education, healthcare, and opportunities for sustainable growth, enabling them to live with dignity and purpose.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Creating self-reliant communities</p>
                  <p>• Ensuring equal opportunities for all</p>
                  <p>• Building a sustainable future</p>
                  <p>• Fostering dignity and empowerment</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-gradient-to-br from-secondary/10 to-accent/5 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To empower marginalized communities through integrated development programs, focusing on education, healthcare, and livelihood enhancement while fostering self-reliance and community participation.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Holistic community development</p>
                  <p>• Integrated service delivery</p>
                  <p>• Sustainable livelihood programs</p>
                  <p>• Community-led initiatives</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Areas */}
      <section className="-mt-16 pb-20">
        <div className="container mx-auto px-2">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">Education</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-semibold text-foreground">Empowering Through Learning</p>
                  <p className="text-sm">• Quality education for underprivileged children</p>
                  <p className="text-sm">• Scholarship programs and mentorship</p>
                  <p className="text-sm">• Vocational training and skill development</p>
                  <p className="text-sm">• Digital literacy initiatives</p>
                  <p className="text-sm">• Teacher training programs</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">Healthcare</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-semibold text-foreground">Caring for Health</p>
                  <p className="text-sm">• Free medical camps and consultations</p>
                  <p className="text-sm">• Essential medicines and treatments</p>
                  <p className="text-sm">• Health awareness campaigns</p>
                  <p className="text-sm">• Maternal and child healthcare</p>
                  <p className="text-sm">• Preventive health programs</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">Orphanage Care</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-semibold text-foreground">Providing Safe Homes</p>
                  <p className="text-sm">• Safe and nurturing residential care</p>
                  <p className="text-sm">• Education and skill development</p>
                  <p className="text-sm">• Emotional and psychological support</p>
                  <p className="text-sm">• Nutrition and health services</p>
                  <p className="text-sm">• Family reintegration programs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
     <section className="pt-4 pb-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guiding principles that shape everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Compassion",
                description: "Acting with empathy and kindness in all our endeavors"
              },
              {
                title: "Integrity",
                description: "Maintaining transparency and accountability in our work"
              },
              {
                title: "Excellence",
                description: "Striving for quality and impact in every program"
              },
              {
                title: "Collaboration",
                description: "Working together with communities and partners"
              }
            ].map((value, index) => (
              <Card key={index} className="border-none bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
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

export default Mission;
