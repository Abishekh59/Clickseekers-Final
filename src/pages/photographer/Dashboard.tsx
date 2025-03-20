
import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Camera, User, Image, Calendar, Settings, MessageSquare, LogOut } from "lucide-react";

// Import dashboard sub-pages
import Portfolio from "./dashboard/Portfolio";
import Services from "./dashboard/Services";
import Gallery from "./dashboard/Gallery";
import Bookings from "./dashboard/Bookings";
import Contact from "./dashboard/Contact";

const PhotographerDashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <Camera className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold text-primary">ClickSeekers</span>
            </Link>

            <div className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Profile" />
              </Avatar>
              <span className="font-medium">Jessica Smith</span>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 shrink-0">
            <Card className="p-4">
              <nav className="space-y-2">
                <Button
                  variant={location.pathname.includes('/portfolio') || location.pathname === '/photographer/dashboard' ? "default" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/photographer/dashboard/portfolio">
                    <User className="mr-2 h-5 w-5" />
                    Portfolio
                  </Link>
                </Button>
                
                <Button
                  variant={location.pathname.includes('/services') ? "default" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/photographer/dashboard/services">
                    <Settings className="mr-2 h-5 w-5" />
                    Services
                  </Link>
                </Button>
                
                <Button
                  variant={location.pathname.includes('/gallery') ? "default" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/photographer/dashboard/gallery">
                    <Image className="mr-2 h-5 w-5" />
                    Gallery
                  </Link>
                </Button>
                
                <Button
                  variant={location.pathname.includes('/bookings') ? "default" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/photographer/dashboard/bookings">
                    <Calendar className="mr-2 h-5 w-5" />
                    Bookings
                  </Link>
                </Button>
                
                <Button
                  variant={location.pathname.includes('/contact') ? "default" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/photographer/dashboard/contact">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contact
                  </Link>
                </Button>
              </nav>
            </Card>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PhotographerDashboard;
