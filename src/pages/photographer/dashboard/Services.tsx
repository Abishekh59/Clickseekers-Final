
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Plus, Edit, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Example service data
const initialServices = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Full day coverage of your special day, from preparation to reception. Includes 300+ edited photos, online gallery, and a custom album.",
    price: 2500,
    duration: "Full day (8-10 hours)",
  },
  {
    id: 2,
    title: "Engagement Session",
    description: "1-2 hour photoshoot at a location of your choice. Includes 50+ edited photos and digital delivery.",
    price: 500,
    duration: "1-2 hours",
  },
  {
    id: 3,
    title: "Portrait Session",
    description: "Individual or family portraits in studio or at an outdoor location. Includes 30+ edited photos and digital delivery.",
    price: 350,
    duration: "1 hour",
  },
];

const Services = () => {
  const [services, setServices] = useState(initialServices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentService, setCurrentService] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    duration: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentService((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = () => {
    if (!currentService.title || !currentService.description || !currentService.price) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (isEditing) {
      setServices(services.map(service => 
        service.id === currentService.id ? currentService : service
      ));
      toast.success("Service updated successfully");
    } else {
      const newService = {
        ...currentService,
        id: Date.now(),
      };
      setServices([...services, newService]);
      toast.success("Service added successfully");
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (service: any) => {
    setCurrentService(service);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setServices(services.filter(service => service.id !== id));
    toast.success("Service deleted successfully");
  };

  const resetForm = () => {
    setCurrentService({
      id: 0,
      title: "",
      description: "",
      price: 0,
      duration: "",
    });
    setIsEditing(false);
  };

  return (
    <Card className="p-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Services</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => {
              resetForm();
              setIsDialogOpen(true);
            }}>
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{isEditing ? "Edit Service" : "Add New Service"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <label className="block text-sm font-medium mb-1">Service Name*</label>
                <Input 
                  name="title" 
                  value={currentService.title} 
                  onChange={handleChange}
                  placeholder="e.g., Wedding Photography"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description*</label>
                <Textarea 
                  name="description" 
                  value={currentService.description} 
                  onChange={handleChange}
                  placeholder="Describe what's included in this service..."
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price ($)*</label>
                <Input 
                  name="price" 
                  type="number"
                  value={currentService.price || ""} 
                  onChange={handleChange}
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Duration</label>
                <Input 
                  name="duration" 
                  value={currentService.duration} 
                  onChange={handleChange}
                  placeholder="e.g., 2 hours, Full day"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSubmit}>{isEditing ? "Update Service" : "Add Service"}</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {services.length === 0 ? (
          <p className="text-center text-gray-500 my-10">No services added yet. Add your first service to attract clients!</p>
        ) : (
          services.map((service) => (
            <Card key={service.id} className="p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-600 mt-1">{service.description}</p>
                  <div className="flex gap-6 mt-3">
                    <div>
                      <span className="font-semibold text-primary">${service.price}</span>
                    </div>
                    {service.duration && (
                      <div className="text-gray-500">
                        <span>{service.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </Card>
  );
};

export default Services;
