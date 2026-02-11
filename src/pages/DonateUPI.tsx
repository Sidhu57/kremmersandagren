import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const DonateUPI = () => {
  const [amount, setAmount] = useState<number | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  const upiId = "kremmersandegrenfoundation@upi";
  const payeeName = "Kremmer Sandegren Foundation";
  const note = "Donation Support";

  const isFormValid =
    name.trim() &&
    email.includes("@") &&
    phone.length === 10 &&
    amount !== "";

  const upiLink =
  `upi://pay?pa=${upiId}` +
  `&pn=${encodeURIComponent(payeeName)}` +
  `&am=${amount}` +
  `&cu=INR` +
  `&tn=${encodeURIComponent(note)}`;

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
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
            alt="Donation background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent mb-4">
              Donate Us
            </h1>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Your Contribution Helps Us.
            </p>
          </div>
        </div>
      </section>

      {/* DONATION SECTION — IMAGE ONLY (NO GREEN) */}
    <section className="relative -mt-20 pb-24 px-4 z-10">
  {/* Your Content Here */}
  <div className="relative z-10">
  </div>
  </section>
        <div className="max-w-xl mx-auto rounded-2xl shadow-xl p-8 bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Donate Now
          </h2>

          <div className="space-y-4 mb-6">
            <input
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg"
            />
            <input
              placeholder="Phone Number *"
              maxLength={10}
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
              className="w-full border px-4 py-2 rounded-lg"
            />
            <input
  placeholder="Address (Optional)"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  className="w-full border px-4 py-2 rounded-lg"
/>

          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[500, 1000, 2000].map((v) => (
              <button
                key={v}
                onClick={() => setAmount(v)}
                className={`border py-2 rounded-lg ${
                  amount === v
                    ? "border-primary bg-primary/10"
                    : "hover:border-primary"
                }`}
              >
                ₹{v}
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Custom Amount *"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value ? Number(e.target.value) : "")
            }
            className="w-full border px-4 py-2 rounded-lg mb-6"
          />

          <a
  href={isFormValid ? upiLink : undefined}
  target="_blank"
  rel="noopener noreferrer"
  className={`block text-center py-3 rounded-xl font-semibold transition ${
    isFormValid
      ? "bg-primary text-white hover:opacity-90"
      : "bg-gray-300 text-gray-600 pointer-events-none"
  }`}
>
  Pay Now via UPI
</a>


          <p className="text-xs text-muted-foreground text-center mt-6">
            Supported apps: Google Pay, PhonePe, Paytm, BHIM <br />
            80G tax benefits available
          </p>
        </div>

      <Footer />
    </div>
    </div>
  );
};

export default DonateUPI;
