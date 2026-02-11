import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const DonationSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-10">
      <section className="-mt-16 md:-mt-20 pb-14 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-white border-2 border-primary rounded-2xl py-10 px-6 shadow-lg">
            <Heart className="w-12 h-12 text-primary mx-auto mb-5" />

            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
              Make a Meaningful Impact
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto mb-7">
              Together, we can build stronger rural communities by supporting education,
              healthcare, women’s empowerment, and long-term sustainable livelihoods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/donate/upi")}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Payment Gateway
              </button>

              <Link
                to="/donation/policy"
                className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition"
              >
                Donation Policy
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              80G tax benefits available • Secure UPI payments
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationSection;
