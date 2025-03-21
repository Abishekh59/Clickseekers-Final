import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, X, Upload } from "lucide-react";

// Example gallery images categorized
const initialImages = [
  // Wedding Category
  {
    id: 1,
    url: "/src/Images/INFI0332.jpg",
    title: "Wedding - Lucky & Bina",
    category: "Wedding",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1608500076184-cd76b3c82d01",
    title: "Wedding - Beach Vows",
    category: "Wedding",
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1519387151017-375c6feab1c4",
    title: "Wedding - Elegant Moments",
    category: "Wedding",
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1548899068-b57201b1d65b",
    title: "Wedding - Forest Ceremony",
    category: "Wedding",
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1601740141520-1f22e209e9e1",
    title: "Wedding - Golden Hour Vows",
    category: "Wedding",
  },

  // Portrait Category
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Family Portrait - The Smiths",
    category: "Portrait",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    title: "Emily - Portfolio Shoot",
    category: "Portrait",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1600996376192-bb7a6f9647f5",
    title: "Portrait - Close-up Smile",
    category: "Portrait",
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1506742068462-3e6c820ee2b0",
    title: "Portrait - Natural Light",
    category: "Portrait",
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1562162743-2b68c9156161",
    title: "Portrait - Young Professional",
    category: "Portrait",
  },

  // Landscape Category
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
    title: "Mountain Sunset",
    category: "Landscape",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Lakeside Reflection",
    category: "Landscape",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1597435374706-0221f63ca44e",
    title: "Nature's Beauty",
    category: "Landscape",
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1470832037363-55b4cbf74cba",
    title: "Rocky Shore",
    category: "Landscape",
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1491788368044-d1b6a2d7d42d",
    title: "Golden Fields",
    category: "Landscape",
  },

  // Commercial Category
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1516825926085-d639e4944401",
    title: "Product Shoot - Watch",
    category: "Commercial",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1602542905147-2a5c1b5b876d",
    title: "Commercial - Product in Studio",
    category: "Commercial",
  },
  {
    id: 20,
    url: "https://images.unsplash.com/photo-1512621776951-35a0f81e6a01",
    title: "Product Photography - Shoes",
    category: "Commercial",
  },
  {
    id: 21,
    url: "https://images.unsplash.com/photo-1531865353441-bcf8201d8790",
    title: "Commercial - Electronics Display",
    category: "Commercial",
  },
  {
    id: 22,
    url: "https://images.unsplash.com/photo-1547457800-8f53ec8e38ff",
    title: "Commercial - Fashion Shoot",
    category: "Commercial",
  },

  // Event Category
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1608500076184-cd76b3c82d01",
    title: "Event - Conference",
    category: "Event",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1526490055-babb6f43da97",
    title: "Event - Wedding Reception",
    category: "Event",
  },
  {
    id: 23,
    url: "https://images.unsplash.com/photo-1531752038361-c9b61ac90b90",
    title: "Event - Outdoor Gathering",
    category: "Event",
  },
  {
    id: 24,
    url: "https://images.unsplash.com/photo-1584544446494-f8f1708f199b",
    title: "Event - Birthday Celebration",
    category: "Event",
  },
  {
    id: 25,
    url: "https://images.unsplash.com/photo-1579633835083-8d4cd3d518fe",
    title: "Event - Corporate Seminar",
    category: "Event",
  }
];


const categories = ["All", "Wedding", "Portrait", "Landscape", "Commercial", "Event"];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isUploading, setIsUploading] = useState(false);
  const [newImage, setNewImage] = useState<File | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleDelete = (id: number) => {
    setImages(images.filter(img => img.id !== id));
    toast.success("Image removed from gallery");
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setNewImage(file);
    }
  };

  const handleSaveUpload = () => {
    if (!newImage) return;

    // Simulate upload delay
    setIsUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImageUrl = reader.result as string;

      const uploadedImage = {
        id: Date.now(),
        url: newImageUrl,
        title: "New Upload",
        category: "Commercial",
      };

      setImages([uploadedImage, ...images]);
      setIsUploading(false);
      setNewImage(null);
      toast.success("Image uploaded successfully");
    };

    reader.readAsDataURL(newImage);
  };

  return (
    <Card className="p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Gallery</h1>
        <div className="flex gap-2">
          <label htmlFor="file-upload" className="cursor-pointer">
            <Button onClick={() => document.getElementById("file-upload")?.click()} disabled={isUploading}>
              {isUploading ? (
                "Uploading..."
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Images
                </>
              )}
            </Button>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          {newImage && (
            <Button onClick={handleSaveUpload} disabled={isUploading}>Save Image</Button>
          )}
        </div>
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
