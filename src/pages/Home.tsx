import { Link } from "react-router-dom";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import backgroundImage from "./../Images/Background.jpg";


const Home = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${backgroundImage})` }} 

    >

      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-5xl leading-tight">
          CONNECTING PHOTOGRAPHERS & CLIENTS SEAMLESSLY
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mt-6 max-w-3xl">
          Unleash the power of stunning visuals with ClickSeekers. Whether you're 
          looking to hire a photographer or showcase your work, we make it effortless.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
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
            className="border-white text-black hover:bg-white hover:text-black px-8 py-6 text-lg transition-all duration-300"
          >
            <Link to="/explore">
              Client
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
