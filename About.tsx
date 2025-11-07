import { Check } from "lucide-react";
import clinicImage from "@/assets/hero-ent-clinic.jpg";

const About = () => {
  const features = [
    "Modern diagnostic equipment",
    "Experienced ENT specialist",
    "Comfortable consultation rooms",
    "Child-friendly environment",
    "Comprehensive treatment plans",
    "Follow-up care included",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              About ERITAGE ENT CARE
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Katabi, just 800 meters from Victoria Mall on 
              Entebbe Road, ERITAGE ENT CARE has been serving the community with 
              expert ear, nose, and throat care for over 15 years.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to provide accessible, high-quality ENT healthcare to 
              patients of all ages. We combine advanced medical technology with 
              compassionate care to ensure the best outcomes for our patients.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={clinicImage}
              alt="ERITAGE ENT CARE Facility"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
