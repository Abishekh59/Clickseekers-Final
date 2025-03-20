
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            CONNECTING PHOTOGRAPHERS & CLIENTS SEAMLESSLY
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-slideUp">
            Unleash the power of stunning visuals with ClickSeekers. Whether you're 
            looking to hire a photographer or showcase your work, we make it effortless.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transition-all duration-300"
            >
              <Link to="/photographer/style-selection">
                <Camera className="mr-2 h-6 w-6" />
                Photographer
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg transition-all duration-300"
            >
              <Link to="/explore">
                Client
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4">For Photographers</h3>
            <p className="text-gray-600">
              Create your portfolio, set your availability, and define your pricing. 
              Our platform handles bookings, payments, and client communications, 
              so you can focus on what you do best - taking amazing photos.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4">For Clients</h3>
            <p className="text-gray-600">
              Browse portfolios, compare styles and pricing, and book directly
              through our platform. We ensure secure payments and clear
              communication throughout the entire process.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
