
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Camera } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"photographer" | "client">("photographer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication (in a real app, this would call an API)
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Logged in successfully as ${userType}`);
      
      // Redirect based on user type
      if (userType === "photographer") {
        navigate("/photographer/dashboard");
      } else {
        navigate("/explore");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent to-white p-4">
      <Card className="w-full max-w-md p-8 glass-card animate-fadeIn">
        <div className="flex justify-center mb-6">
          <Link to="/" className="flex items-center">
            <Camera className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">ClickSeekers</span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>

        <Tabs defaultValue="photographer" className="mb-6" onValueChange={(value) => setUserType(value as "photographer" | "client")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="photographer">Photographer</TabsTrigger>
            <TabsTrigger value="client">Client</TabsTrigger>
          </TabsList>
        </Tabs>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
