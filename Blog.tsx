import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Understanding Ear Infections: Symptoms and Treatment",
      description: "Learn about the common causes of ear infections, warning signs to watch for, and effective treatment options available.",
      date: "March 15, 2024",
      category: "Ear Health",
    },
    {
      title: "When Should You Consider a Tonsillectomy?",
      description: "A comprehensive guide to understanding when tonsil removal surgery might be necessary for you or your child.",
      date: "March 10, 2024",
      category: "Treatment",
    },
    {
      title: "Protecting Your Hearing: Prevention Tips",
      description: "Simple daily habits and preventive measures to maintain healthy hearing throughout your life.",
      date: "March 5, 2024",
      category: "Prevention",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Health Articles & Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest insights on ENT health, prevention, and treatment options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="text-primary">{article.category}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {article.description}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto font-semibold">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
