import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

// Expanded Photography Styles Data
const photographyStyles = [
  { id: "portrait", title: "Portrait" },
  { id: "aerial", title: "Aerial" },
  { id: "fashion", title: "Fashion" },
  { id: "sports", title: "Sports" },
  { id: "fineArt", title: "Fine Art" },
  { id: "event", title: "Event" },
  { id: "travel", title: "Travel" },
  { id: "landscape", title: "Landscape" },
  { id: "wildlife", title: "Wildlife" },
  { id: "family", title: "Family" },
  { id: "wedding", title: "Wedding" },
  { id: "culture", title: "Culture" },
  { id: "nature", title: "Nature" },
  { id: "commercial", title: "Commercial" },
  { id: "other", title: "Other" }
];

const StyleSelection = () => {
  const navigate = useNavigate();
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxChange = (styleId: string) => {
    setSelectedStyles(prev =>
      prev.includes(styleId) ? prev.filter(id => id !== styleId) : [...prev, styleId]
    );
  };

  const handleContinue = () => {
    if (selectedStyles.length === 0) {
      toast.error("Please select at least one photography style");
      return;
    }

    setIsLoading(true);
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {photographyStyles.map((style) => (
              <Card
                key={style.id}
                className="flex items-center space-x-3 p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <input
                  type="checkbox"
                  id={style.id}
                  checked={selectedStyles.includes(style.id)}
                  onChange={() => handleCheckboxChange(style.id)}
                  className="w-5 h-5"
                />
                <label htmlFor={style.id} className="text-lg">
                  {style.title}
                </label>
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
