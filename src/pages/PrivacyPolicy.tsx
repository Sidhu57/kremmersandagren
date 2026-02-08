import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [bgOpacity, setBgOpacity] = useState(0.85);
  useEffect(() => {
    const handleScroll = () => {
    const scrollY = window.scrollY;

    const fadeStart = 200;   // start fading after intro
    const fadeEnd = 900;     // fully transparent after this scroll

    let opacity = 0.85;

    if (scrollY > fadeStart) {
      opacity =
        0.85 -
        Math.min((scrollY - fadeStart) / fadeEnd, 1) * 0.85;
    }

    setBgOpacity(opacity);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

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
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
            alt="Privacy background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Shield className="w-16 h-16 text-foreground/90 mx-auto mb-6" />
            <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card
  className="border-none shadow-none transition-all duration-300"
  style={{
    backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
    backdropFilter: "blur(6px)",
  }}
>


              <CardContent className="p-8 md:p-12 space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-8">Last Updated: March 1, 2024</p>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Kremmer Sandegren Foundation ("we," "us," or "our") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                    you visit our website or engage with our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect information about you in a variety of ways. The information we may collect includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Personal identification information (name, email address, phone number)</li>
                    <li>Demographic information</li>
                    <li>Donation and payment information</li>
                    <li>Volunteer application details</li>
                    <li>Website usage data and analytics</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Process donations and issue tax receipts</li>
                    <li>Communicate about our programs and activities</li>
                    <li>Process volunteer applications</li>
                    <li>Send newsletters and updates (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                    over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Sharing Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Service providers who assist in our operations</li>
                    <li>Legal authorities when required by law</li>
                    <li>Auditors for compliance purposes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze website 
                    traffic, and understand user preferences. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <p className="text-foreground font-semibold">Kremmer Sandegren Foundation</p>
                    <p className="text-muted-foreground">No.16, St.John's Church Complex, Rockins Road</p>
                    <p className="text-muted-foreground">Trichy - 620 001, Tamil Nadu, India</p>
                    <p className="text-muted-foreground">Email: info@kremmersandegren.org</p>
                  </div>
                </div>
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

export default PrivacyPolicy;
