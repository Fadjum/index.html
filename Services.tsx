import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ear, Volume2, Activity, Wind, Pill, Stethoscope } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ear,
      title: "Ear Infections",
      description: "Expert diagnosis and treatment of acute and chronic ear infections, including middle ear and outer ear conditions.",
    },
    {
      icon: Volume2,
      title: "Hearing Loss",
      description: "Comprehensive hearing assessments, treatment options, and hearing aid consultations for all age groups.",
    },
    {
      icon: Activity,
      title: "Tonsillectomy",
      description: "Safe and effective tonsil removal surgery for chronic tonsillitis and sleep-related breathing disorders.",
    },
    {
      icon: Wind,
      title: "Adenoidectomy",
      description: "Surgical removal of adenoids to treat breathing difficulties, chronic infections, and sleep apnea in children.",
    },
    {
      icon: Pill,
      title: "Sinus Care",
      description: "Treatment for acute and chronic sinusitis, nasal polyps, and other sinus-related conditions.",
    },
    {
      icon: Stethoscope,
      title: "Throat Disorders",
      description: "Diagnosis and management of voice disorders, swallowing difficulties, and throat infections.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our ENT Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive ear, nose, and throat care for patients of all ages with 
            state-of-the-art diagnostic and treatment facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
