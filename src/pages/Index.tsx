
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { School } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page after showing splash screen briefly
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-college-navy/90 to-college-navy">
      <div className="text-center animate-fade-in">
        <School className="h-20 w-20 text-white mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-2">College Management System</h1>
        <p className="text-xl text-white/80">Loading...</p>
      </div>
    </div>
  );
};

export default Index;
