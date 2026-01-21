import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const AuditedReports = () => {
  const reports = [
    {
      year: "2023-2024",
      title: "Annual Report 2023-2024",
      description: "Comprehensive overview of our activities, impact, and financial statements.",
      size: "2.4 MB",
      pages: 45,
    },
    {
      year: "2022-2023",
      title: "Annual Report 2022-2023",
      description: "Complete report covering programs, achievements, and audited accounts.",
      size: "2.1 MB",
      pages: 42,
    },
    {
      year: "2021-2022",
      title: "Annual Report 2021-2022",
      description: "Detailed analysis of our work and financial performance.",
      size: "1.9 MB",
      pages: 38,
    },
    {
      year: "2020-2021",
      title: "Annual Report 2020-2021",
      description: "Annual activities report with complete financial audit.",
      size: "1.8 MB",
      pages: 36,
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
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop"
            alt="Financial reports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <FileText className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Audited Annual Reports
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              Access our complete annual reports and financial statements. Full transparency in our operations and fund utilization.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Download Reports</h2>
              <p className="text-muted-foreground">
                All reports are audited by certified chartered accountants and comply with statutory requirements.
              </p>
            </div>

            <div className="space-y-6">
              {reports.map((report, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{report.title}</h3>
                            <p className="text-sm text-muted-foreground">Financial Year {report.year}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-3 mb-2">{report.description}</p>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>📄 {report.pages} pages</span>
                          <span>💾 {report.size}</span>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-white md:self-start">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Commitment to Transparency</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The Kremmer Sandegren Foundation maintains the highest standards of financial accountability. 
              All our annual reports are audited by independent chartered accountants and comply with 
              regulations set by the Income Tax Department of India.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12A</div>
                  <p className="text-sm text-muted-foreground">Registration</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">80G</div>
                  <p className="text-sm text-muted-foreground">Tax Exemption</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <p className="text-sm text-muted-foreground">Tax Deduction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default AuditedReports;
