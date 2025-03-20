
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

// Example photographers data - in a real app, this would come from an API
const photographers = [
  {
    id: 1,
    name: "Jessica Smith",
    specialization: "Wedding Photography",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    portfolioPreview: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866",
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
    ],
  },
  {
    id: 2,
    name: "Michael Johnson",
    specialization: "Portrait Photography",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    portfolioPreview: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1488161628813-04466f872be2",
    ],
  },
  {
    id: 3,
    name: "Emily Davis",
    specialization: "Landscape Photography",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    portfolioPreview: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    ],
  },
  {
    id: 4,
    name: "David Wilson",
    specialization: "Commercial Photography",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f",
    portfolioPreview: [
      "https://images.unsplash.com/photo-1579398937948-598a7643b2b9",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      "https://images.unsplash.com/photo-1516825926085-d639e4944401",
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
            Browse through our curated list of professional photographers and find the 
            perfect match for your next project or event.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="mb-2"
            >
              All
            </Button>
            <Button 
              variant={filter === "wedding" ? "default" : "outline"}
              onClick={() => setFilter("wedding")}
              className="mb-2"
            >
              Wedding
            </Button>
            <Button 
              variant={filter === "portrait" ? "default" : "outline"}
              onClick={() => setFilter("portrait")}
              className="mb-2"
            >
              Portrait
            </Button>
            <Button 
              variant={filter === "landscape" ? "default" : "outline"}
              onClick={() => setFilter("landscape")}
              className="mb-2"
            >
              Landscape
            </Button>
            <Button 
              variant={filter === "commercial" ? "default" : "outline"}
              onClick={() => setFilter("commercial")}
              className="mb-2"
            >
              Commercial
            </Button>
          </div>

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
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-yellow-600">★ {photographer.rating}</span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="text-primary border-primary hover:bg-primary hover:text-white"
                    >
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
