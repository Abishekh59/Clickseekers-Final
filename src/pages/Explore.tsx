import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const photographers = [
  {
    id: 1,
    name: "Abishek Joshi",
    specialization: "Photographer",
    imageUrl: "https://your-profile-photo-url.com", // Replace with your actual profile photo URL
    portfolioPreview: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866", // Add your own portfolio photo links here
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
    ],
  },
  {
    id: 2,
    name: "Prashant Shrestha",
    specialization: "Wedding Photography",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    portfolioPreview: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866",
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
    ],
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    specialization: "Portrait Photography",
    imageUrl: "https://images.unsplash.com/photo-1593052124109-6d4a007a2a72",
    portfolioPreview: [
      "https://images.unsplash.com/photo-1582719475424-6b242ddc2f56",
      "https://images.unsplash.com/photo-1573125301542-b0437f8a2e6f",
      "https://images.unsplash.com/photo-1501594907355-d93b0a04d1a4",
    ],
  },
  {
    id: 4,
    name: "Sushil Sharma",
    specialization: "Nature & Landscape Photography",
    imageUrl: "https://images.unsplash.com/photo-1502070993753-69e0efb7eb67",
    portfolioPreview: [
      "https://images.unsplash.com/photo-1485554609066-4b8e0b3d5440",
      "https://images.unsplash.com/photo-1496236079656-dadfa4002851",
      "https://images.unsplash.com/photo-1515740506181-6b61c83bfb66",
    ],
  },
  {
    id: 5,
    name: "Sunita Rai",
    specialization: "Event Photography",
    imageUrl: "https://images.unsplash.com/photo-1487990161238-f36ad64be0cc",
    portfolioPreview: [
      "https://images.unsplash.com/photo-1585284384515-e37827ca3be9",
      "https://images.unsplash.com/photo-1601362235423-cd40a55b9cf3",
      "https://images.unsplash.com/photo-1507742160467-8f5cc2cf7c4b",
    ],
  },
];

const Explore = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
            Discover Talented Photographers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
            Browse through our curated list of professional photographers and find the perfect match for your next project or event.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {photographers.map((photographer) => (
              <Card key={photographer.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={photographer.portfolioPreview[0]} 
                    alt={`${photographer.name}'s work`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <img src={photographer.imageUrl} alt={photographer.name} />
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{photographer.name}</h3>
                      <p className="text-sm text-gray-500">{photographer.specialization}</p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button asChild variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                      <a href={`/photographer/dashboard/${photographer.id}`}>View Profile</a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
