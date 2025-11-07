import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";
import doctorImage from "@/assets/dr-fahad-juma.jpg";

const Specialist = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Specialized Expertise",
      description: "Comprehensive ENT diagnosis and treatment solutions",
    },
    {
      icon: Award,
      title: "Patient-Centered Care",
      description: "Dedicated to personalized treatment approaches",
    },
    {
      icon: Users,
      title: "Trusted by Community",
      description: "Providing compassionate care to patients across Entebbe",
    },
  ];

  return (
    <section id="specialist" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Meet Our ENT Specialist
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert care from a qualified and experienced ENT surgeon dedicated to your health.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <img
                    src={doctorImage}
                    alt="ENT Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-3 p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Dr. Fahad Juma
                    </h3>
                    <p className="text-primary font-medium">
                      ENT Specialist & Surgeon
                    </p>
                  </div>

                  <p className="text-muted-foreground">
                    Dr. Fahad Juma brings extensive experience in treating ear, nose, and throat 
                    conditions with a focus on delivering exceptional patient outcomes. His approach 
                    combines modern medical techniques with compassionate care, ensuring every patient 
                    receives personalized treatment tailored to their specific needs.
                  </p>

                  <div className="space-y-4">
                    {qualifications.map((qual, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <qual.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{qual.title}</div>
                          <div className="text-sm text-muted-foreground">{qual.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
