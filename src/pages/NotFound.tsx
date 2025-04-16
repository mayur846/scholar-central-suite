
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FolderX } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="text-center max-w-md">
        <FolderX className="h-20 w-20 text-college-navy/50 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-college-navy mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <p className="text-gray-500 mb-6">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Button 
          onClick={() => navigate("/")} 
          className="bg-college-navy hover:bg-college-navy/90"
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
