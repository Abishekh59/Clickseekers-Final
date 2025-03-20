import { Link, useLocation } from "react-router-dom";
import { Camera } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-secondary" : "text-gray-600 hover:text-secondary";
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Camera className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">ClickSeekers</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive("/")} transition-colors duration-200`}>Home</Link>
            <Link to="/explore" className={`${isActive("/explore")} transition-colors duration-200`}>Explore</Link>
            <Link to="/about" className={`${isActive("/about")} transition-colors duration-200`}>About</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 text-sm text-gray-700 hover:text-primary transition">Login</Link>
            <Link to="/signup" className="px-4 py-2 text-sm text-white bg-primary rounded-lg hover:bg-secondary transition">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
