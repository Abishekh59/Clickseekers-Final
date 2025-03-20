
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Plus, X, Upload } from "lucide-react";

// Example gallery images
const initialImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    title: "Wedding - Sarah & John",
    category: "Wedding",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Family Portrait - The Smiths",
    category: "Portrait",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
    title: "Mountain Sunset",
    category: "Landscape",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    title: "Emily - Portfolio Shoot",
    category: "Portrait",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Lakeside Reflection",
    category: "Landscape",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1516825926085-d639e4944401",
    title: "Product Shoot - Watch",
    category: "Commercial",
  },
];

const categories = ["All", "Wedding", "Portrait", "Landscape", "Commercial", "Event"];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isUploading, setIsUploading] = useState(false);

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleDelete = (id: number) => {
    setImages(images.filter(img => img.id !== id));
    toast.success("Image removed from gallery");
  };

  const handleUpload = () => {
    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      const newImage = {
        id: Date.now(),
        url: "https://images.unsplash.com/photo-1579398937948-598a7643b2b9",
        title: "New Upload",
        category: "Commercial",
      };
      
      setImages([newImage, ...images]);
      setIsUploading(false);
      toast.success("Image uploaded successfully");
    }, 1500);
  };

  return (
    <Card className="p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Gallery</h1>
        <Button onClick={handleUpload} disabled={isUploading}>
          {isUploading ? (
            "Uploading..."
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload Images
            </>
          )}
        </Button>
      </div>

      <div className="flex overflow-x-auto space-x-2 pb-4 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="whitespace-nowrap"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 my-10">
            No images in this category. Upload some images to showcase your work!
          </p>
        ) : (
          filteredImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-md">
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <Button 
                  variant="destructive" 
                  size="icon" 
                  className="self-end"
                  onClick={() => handleDelete(image.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="text-white">
                  <h3 className="font-medium">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

export default Gallery;
