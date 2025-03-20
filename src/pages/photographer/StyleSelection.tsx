
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";

// Photography styles data
const photographyStyles = [
  {
    id: "portrait",
    title: "Portrait",
    description: "Capturing the personality and essence of individuals or groups in studio or natural settings.",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
  },
  {
    id: "wedding",
    title: "Wedding",
    description: "Documenting the special moments and emotions of wedding ceremonies and celebrations.",
    imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  },
  {
    id: "landscape",
    title: "Landscape",
    description: "Showcasing the beauty of natural scenery, from mountains and forests to oceans and deserts.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "Creating compelling images for brands, products, and services for marketing and advertising.",
    imageUrl: "https://images.unsplash.com/photo-1579398937948-598a7643b2b9",
  },
  {
    id: "event",
    title: "Event",
    description: "Capturing the atmosphere and key moments of corporate events, concerts, and social gatherings.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
  },
  {
    id: "street",
    title: "Street",
    description: "Documenting everyday life, people, and urban environments in an authentic, candid style.",
    imageUrl: "https://images.unsplash.com/photo-1473679408190-0693dd22fe6a",
  },
];

const StyleSelection = () => {
  const navigate = useNavigate();
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleStyle = (styleId: string) => {
    setSelectedStyles(prev => 
      prev.includes(styleId)
        ? prev.filter(id => id !== styleId)
        : [...prev, styleId]
    );
  };

  const handleContinue = () => {
    if (selectedStyles.length === 0) {
      toast.error("Please select at least one photography style");
      return;
    }

    setIsLoading(true);
    
    // Simulate saving preferences (in a real app, this would call an API)
    setTimeout(() => {
      setIsLoading(false);
      navigate("/photographer/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            What's Your Photography Style?
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 text-center">
            Select the styles that best represent your work. This helps clients find you 
            when they're looking for a specific type of photography.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {photographyStyles.map((style) => (
              <Card 
                key={style.id}
                className={`overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                  selectedStyles.includes(style.id) 
                    ? 'ring-2 ring-primary ring-offset-2' 
                    : ''
                }`}
                onClick={() => toggleStyle(style.id)}
              >
                <div className="relative h-40">
                  <img 
                    src={style.imageUrl} 
                    alt={style.title} 
                    className="w-full h-full object-cover"
                  />
                  {selectedStyles.includes(style.id) && (
                    <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
                      <Check size={16} />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{style.title}</h3>
                  <p className="text-sm text-gray-500">{style.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleContinue}
              size="lg"
              disabled={isLoading}
              className="px-8"
            >
              {isLoading ? "Processing..." : "Continue to Dashboard"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StyleSelection;
