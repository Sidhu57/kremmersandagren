import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, CheckCircle } from "lucide-react";

const DonationPolicy = () => {
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
            <source src="/videos/donation-bg.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&h=1080&fit=crop" alt="Donation background" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Donation Policy
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              Understanding how your generous contributions make a difference and our commitment to transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg mb-8">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Every donation to Kremmer Sandegren Foundation is valued and utilized with the utmost responsibility. 
                    We are committed to transparency in how we receive, manage, and allocate funds to maximize impact 
                    for the communities we serve.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Tax Benefits</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Kremmer Sandegren Foundation is registered under Section 12A and holds 80G certification from the 
                    Income Tax Department, Government of India:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">50% Tax Deduction:</strong> All donations are eligible 
                        for 50% tax deduction under Section 80G
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Registration Details:</strong> Reg. No. 5/1957 (Tanjore), 
                        Amended SL. 07/2015 (Trichy)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Tax Receipts:</strong> Issued within 7-10 working days 
                        of donation receipt
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Donation Methods</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We accept donations through various secure methods:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Online payments via credit/debit cards, UPI, and net banking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Bank transfers and cheques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">International donations through wire transfer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">In-kind donations (subject to approval)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Fund Utilization</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your donations are allocated as follows:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    <Card className="bg-primary/5">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">80%</div>
                        <p className="text-sm text-muted-foreground">Program Activities</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-secondary/5">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-secondary mb-2">15%</div>
                        <p className="text-sm text-muted-foreground">Administrative Costs</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-accent/5">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">5%</div>
                        <p className="text-sm text-muted-foreground">Fundraising</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Refund Policy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All donations are voluntary and generally non-refundable. However, refunds may be considered in the following cases:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4 list-disc list-inside">
                    <li>Duplicate donations made by mistake</li>
                    <li>Donations made in excess of the intended amount</li>
                    <li>Technical errors in payment processing</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Refund requests must be submitted within 7 days of the donation with valid supporting documents.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Privacy and Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We employ industry-standard security measures to protect your donation information. Your personal and 
                    financial details are encrypted and never shared with third parties except as necessary to process 
                    your donation or as required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Recurring Donations</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Monthly recurring donations help us plan and sustain long-term programs:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4 list-disc list-inside">
                    <li>Easy to set up and cancel at any time</li>
                    <li>Automatic tax receipts for each donation</li>
                    <li>Option to modify donation amount or frequency</li>
                    <li>Dedicated support for recurring donors</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Donor Recognition</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We value and acknowledge our donors' generosity. Unless you request anonymity, your name may be 
                    included in our donor honor roll in annual reports and on our website. You can opt-out of public 
                    recognition at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about donations or this policy:
                  </p>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="text-foreground font-semibold">Kremmer Sandegren Foundation</p>
                    <p className="text-muted-foreground">No.16, St.John's Church Complex, Rockins Road</p>
                    <p className="text-muted-foreground">Trichy - 620 001, Tamil Nadu, India</p>
                    <p className="text-muted-foreground">Email: donations@kremmersandegren.org</p>
                    <p className="text-muted-foreground">Phone: +91 431 XXXX XXX</p>
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

export default DonationPolicy;
