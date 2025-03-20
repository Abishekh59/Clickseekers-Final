
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Camera, Upload } from "lucide-react";

const Portfolio = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Jessica Smith",
    title: "Professional Wedding & Portrait Photographer",
    location: "New York, NY",
    bio: "Passionate photographer with over 7 years of experience specializing in weddings and portraits. I focus on capturing authentic moments and emotions in a natural, storytelling style. My approach combines candid photography with gentle direction to create images that feel both genuine and polished.",
    email: "jessica@clickseekers.com",
    phone: "(555) 123-4567",
    website: "www.jessicasmithphotography.com",
    instagram: "@jessicasmith.photo",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Portfolio information updated successfully");
  };

  return (
    <Card className="p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        {isEditing ? (
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        ) : (
          <Button onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3">
          <div className="relative w-40 h-40 mx-auto mb-4">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2">
                <Upload size={16} />
              </button>
            )}
          </div>
          
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Professional Title</label>
                <Input 
                  name="title" 
                  value={formData.title} 
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <Input 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-semibold">{formData.name}</h2>
              <p className="text-gray-600">{formData.title}</p>
              <p className="text-gray-500 text-sm">{formData.location}</p>
            </div>
          )}
        </div>

        <div className="md:w-2/3">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            {isEditing ? (
              <Textarea 
                name="bio" 
                value={formData.bio} 
                onChange={handleChange} 
                rows={5}
              />
            ) : (
              <p className="text-gray-600">{formData.bio}</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div className="space-y-2">
              {isEditing ? (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <Input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Website</label>
                    <Input 
                      name="website" 
                      value={formData.website} 
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Instagram</label>
                    <Input 
                      name="instagram" 
                      value={formData.instagram} 
                      onChange={handleChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-2 items-center">
                    <span className="font-medium w-24">Email:</span>
                    <span className="text-gray-600">{formData.email}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="font-medium w-24">Phone:</span>
                    <span className="text-gray-600">{formData.phone}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="font-medium w-24">Website:</span>
                    <span className="text-gray-600">{formData.website}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="font-medium w-24">Instagram:</span>
                    <span className="text-gray-600">{formData.instagram}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Portfolio;
