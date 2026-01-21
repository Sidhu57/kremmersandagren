import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Award } from "lucide-react";
import Event1 from "@/assets/event1.jpg";
import Event2 from "@/assets/event2.jpg";
import Event3 from "@/assets/event3.jpg";
import Event4 from "@/assets/event4.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Charity Marathon",
      date: "March 15, 2025",
      time: "6:00 AM",
      location: "Kremmer Sandegren Foundation,Pattukottai",
      description: "Join us for our annual marathon supporting education initiatives. All fitness levels welcome!",
      media: { type: "image", url: Event1 },
      status: "upcoming",
    },
    {
      title: "Chairman Abraham Das Extends Welfare Support",
      date: "December 11, 2025",
      location: "Kremmer Sandegren Foundation,Pattukottai",
      description: "Chairman Abraham Das, on behalf of the Kremmer Sandegren Foundation, distributed welfare support to beneficiaries..",
      media: { type: "video", url: "https://www.youtube.com/embed/_nlC2lg_KJY" },
      gallery: ["200+ educators participated"],
    },
    {
      title: "Volunteer Training Workshop",
      date: "April 10, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Kremmer Sandegren Foundation,Pattukottai",
      description: "Comprehensive training for new volunteers joining our programs.",
      media: { type: "image", url: Event2 },
      status: "upcoming",
    },
  ];

  const milestones = [
    {
      year: "1957",
      title: "Foundation Established",
      description: "Kremmer Sandegren Foundation registered in Tanjore on 01-May-1957",
    },
    {
      year: "2015",
      title: "Amendment & Expansion",
      description: "Foundation amended (SL. 07/2015) in Trichy on 19-Nov-2015",
    },
    {
      year: "2020",
      title: "Tax Exemption Status",
      description: "Received 12A & 80G approvals from Income Tax Department",
    },
    {
      year: "2025",
      title: "Serving Communities",
      description: "Continuing our mission across Tamil Nadu and beyond",
    },
  ];

  const pastEvents = [
    {
      title: "Winter Clothing Distribution Drive",
      date: "January 20, 2025",
      location: "Multiple locations across Tamil Nadu",
      description: "Distributed warm clothing to 5,000+ underprivileged individuals.",
      media: { type: "image", url: Event4 },
      gallery: ["Event successfully reached 15 communities"],
    },
    {
      title: "Chairman Abraham Das Extends Welfare Support",
      date: "December 11, 2025",
      location: "Kremmer Sandegren Foundation,Pattukottai",
      description: "Chairman Abraham Das, on behalf of the Kremmer Sandegren Foundation, distributed welfare support to beneficiaries..",
      media: { type: "video", url: "https://www.youtube.com/embed/_nlC2lg_KJY" },
      gallery: ["200+ educators participated"],
    },
    {
      title: "Community Health Fair",
      date: "November 15, 2024",
      location: "Various villages in Tamil Nadu",
      description: "Comprehensive health screenings and awareness programs.",
      media: { type: "image", url: Event4 },
      gallery: ["3,000+ people benefited"],
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
      
      {/* Hero Section with Background Video */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
            alt="Events background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent mb-4">
              Events
            </h1>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Join us in making a difference. Discover upcoming events and past achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Events Grid */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
                Upcoming Events
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden h-56">
                      {event.media.type === "image" ? (
                        <img
                          src={event.media.url}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : event.media.type === "youtube" || event.media.type === "video" ? (
                        <iframe
                          src={event.media.url}
                          title={event.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : null}
                      <Badge className="absolute top-4 right-4 bg-secondary text-white">
                        Upcoming
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="lg:w-96">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center lg:text-left border-l-4 border-primary pl-4">
                Milestones
              </h3>
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                
                {/* Timeline Items */}
                <div className="space-y-0">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index}
                      className="relative pl-20 pb-12 animate-fade-in"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {/* Year and Icon */}
                      <div className="absolute left-0 flex items-center gap-3">
                        <div className="text-2xl font-bold text-primary w-16 text-center">
                          {milestone.year}
                        </div>
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg relative z-10">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="pl-1">
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Past Events
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in"
              >
                <div className="relative overflow-hidden h-56">
                  {event.media.type === "image" ? (
                    <img
                      src={event.media.url}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : event.media.type === "video" || event.media.type === "youtube" ? (
                    <iframe
                      src={event.media.url}
                      title={event.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-semibold">{event.gallery[0]}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
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

export default Events;
