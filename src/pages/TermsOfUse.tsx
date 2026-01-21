import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck } from "lucide-react";

const TermsOfUse = () => {
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
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop"
            alt="Legal documents"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <FileCheck className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              Please read these terms carefully before using our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-8">Effective Date: March 1, 2024</p>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the Kremmer Sandegren Foundation website, you accept and agree to be bound by 
                    these Terms of Use. If you do not agree to these terms, please do not use our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Use of Website</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, 
                    restrict, or inhibit anyone else's use of the website. Prohibited behavior includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Harassing or causing distress to any person</li>
                    <li>Transmitting obscene or offensive content</li>
                    <li>Disrupting the normal flow of dialogue on the website</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Using automated systems or software to extract data</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website, including text, graphics, logos, images, audio clips, and software, is the 
                    property of Kremmer Sandegren Foundation or its content suppliers and is protected by Indian and 
                    international copyright laws. Unauthorized use of any content may violate copyright, trademark, and other laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Donations</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When making donations through our website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>All donations are voluntary and non-refundable</li>
                    <li>Donations are subject to our Donation Policy</li>
                    <li>You are responsible for ensuring the accuracy of your donation information</li>
                    <li>Tax receipts will be issued as per Indian Income Tax regulations</li>
                    <li>We reserve the right to refuse or return any donation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">User Submissions</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By submitting content to our website (including volunteer applications, comments, or feedback), you grant 
                    us a non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and distribute such content 
                    for the purposes of operating and promoting the Foundation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. These links are provided for your convenience only. 
                    We do not endorse or assume responsibility for the content, privacy policies, or practices of third-party sites.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This website is provided "as is" without any representations or warranties. We make no warranties, expressed 
                    or implied, regarding the accuracy, reliability, or availability of the website content or services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kremmer Sandegren Foundation shall not be liable for any direct, indirect, incidental, special, or 
                    consequential damages arising out of the use or inability to use this website or its content.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon 
                    posting on this page. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes 
                    arising from these terms shall be subject to the exclusive jurisdiction of the courts in Trichy, Tamil Nadu.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about these Terms of Use, please contact:
                  </p>
                  <div className="p-4 bg-primary/5 rounded-lg">
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

export default TermsOfUse;
