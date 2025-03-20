
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
            About ClickSeekers
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 text-center">
            Connecting talented photographers with clients who value exceptional visual content.
          </p>

          <Card className="p-8 mb-10 glass-card">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              ClickSeekers was founded with a simple mission: to bridge the gap between photographers 
              and clients, creating a seamless platform where visual storytelling thrives. We believe 
              that finding the right photographer shouldn't be complicated, and showcasing your work 
              as a photographer should be straightforward and effective.
            </p>
            <p className="text-gray-600">
              Our platform is designed to simplify the process of connecting photographers with clients, 
              ensuring that each project finds the perfect creative match. By providing a centralized hub 
              for photography services, we're empowering both photographers to grow their businesses and 
              clients to find exactly the visual aesthetic they're looking for.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="p-6 h-full glass-card transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">For Photographers</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Showcase your portfolio to a targeted audience</li>
                <li>Manage bookings and client communications in one place</li>
                <li>Set your own availability and pricing</li>
                <li>Build your reputation with client reviews</li>
                <li>Connect with clients looking specifically for your style</li>
              </ul>
            </Card>
            
            <Card className="p-6 h-full glass-card transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3">For Clients</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Browse photographers by style, specialty, and location</li>
                <li>Compare portfolios and pricing in one convenient place</li>
                <li>Book your preferred photographer directly through our platform</li>
                <li>Communicate easily throughout the project</li>
                <li>Share feedback and reviews after your session</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 glass-card">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              ClickSeekers was born from the frustration experienced by both photographers 
              and clients in finding each other. Our founder, a photographer who struggled 
              with showcasing their work and connecting with the right clients, envisioned 
              a platform that would solve these challenges.
            </p>
            <p className="text-gray-600">
              Since our launch, we've grown to support thousands of photographers and clients, 
              facilitating countless successful projects across various photography specialties. 
              We continue to evolve our platform based on feedback from our community, always 
              with the goal of making visual storytelling more accessible and rewarding for everyone.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
