
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Facebook, Instagram, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [venue, setVenue] = useState('');
  const [description, setDescription] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Contact request submitted",
      description: "We'll be in touch with you shortly!",
    });
    
    // Reset form
    setFullName('');
    setPhone('');
    setEmail('');
    setEventType('');
    setStartDate('');
    setEndDate('');
    setVenue('');
    setDescription('');
  };

  return (
    <div className="p-8 flex">
      <div className="w-2/3 pr-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="fullname">Full name</Label>
            <Input
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="985025634"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email id"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="eventType">Select Event Type</Label>
            <Select value={eventType} onValueChange={setEventType}>
              <SelectTrigger>
                <SelectValue placeholder="Select Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="corporate">Corporate Event</SelectItem>
                <SelectItem value="family">Family Photoshoot</SelectItem>
                <SelectItem value="portrait">Portrait Session</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startDate">Event Date (from-to)</Label>
              <div className="relative">
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="endDate">Event Date (from-to)</Label>
              <div className="relative">
                <Input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="venue">Venue / Location*</Label>
            <Input
              id="venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              placeholder="Hotel, City, Country"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description">Describe about the event</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe here"
              rows={4}
            />
          </div>
          
          <Button type="submit" className="w-full bg-[#6B4F3B] hover:bg-[#5a4231]">
            Submit
          </Button>
        </form>
      </div>
      
      <div className="w-1/3 pl-8 border-l">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Follow me on social media</h2>
          <p className="mb-1">Reach out to us for inquiries and bookings.</p>
          <p className="mb-1">infinitystudioinfinity@gmail.com</p>
          <p className="mb-1">CALL US FOR MORE INFORMATION</p>
          <p className="mb-1">+977 9815025634</p>
          <p className="mb-4">+977 9815999442</p>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-black">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div>
          <img 
            src="/lovable-uploads/d361bf65-f40c-4ea3-b7bc-e2598ffbc47d.png" 
            alt="Contact" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
