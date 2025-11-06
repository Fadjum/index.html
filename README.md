import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero-ent-clinic.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="ERITAGE ENT CARE Clinic Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/20"></div>
      </div>
{/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-12 lg:pt-0 lg:pb-16">
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Expert ENT Care in{" "}
                <span className="text-primary">Entebbe</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-sans">
                Professional treatment for ear, nose, and throat conditions. 
                Experienced specialist care for adults and children in a modern, 
                comfortable clinic environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg" asChild>
                <a href="#contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </a>
              </Button>
              <div className="flex flex-col gap-2">
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="tel:+256740166788">
                    <Phone className="mr-2 h-5 w-5" />
                    +256 740 166 788
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="tel:+256769616091">
                    <Phone className="mr-2 h-5 w-5" />
                    +256 769 616 091
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Patients Treated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open Hours Badge */}
        <div className="absolute bottom-8 left-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden sm:block">
          <div className="text-sm font-medium">Open Hours</div>
          <div className="text-xl font-bold">Mon - Sat: 9AM - 6PM</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;