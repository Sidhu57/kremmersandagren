import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DonationSection from "@/components/DonationSection";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react"; // ✅ Import Shield

const Donate = () => {
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

          <div className="container mx-auto px-4 relative z-10 -mt-8 md:-mt-12">
  <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
    <Shield className="w-16 h-20 text-foreground/90 mx-auto mb-6" />
    <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
      Support Our Mission
    </h1>
    <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
      Your contribution helps empower rural communities through education, healthcare, women empowerment, and sustainable livelihoods. Every donation makes a difference.
    </p>
  </div>
</div>

        </section>

        {/* Test Link */}
        <div className="text-center my-8">
          <Link to="/donate/policy" className="text-red-600 text-xl">
            TEST DONATION POLICY
          </Link>
        </div>

        {/* Donation Section */}
        <DonationSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Donate;
