
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { School } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await login(email, password);
      // Navigation will be handled by the effect below when isAuthenticated changes
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  // Redirect to appropriate dashboard based on role if already authenticated
  if (isAuthenticated && user) {
    const dashboardPath = `/${user.role}-dashboard`;
    return <Navigate to={dashboardPath} replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg animate-fade-in">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <School className="h-12 w-12 text-college-navy" />
          </div>
          <CardTitle className="text-2xl font-bold text-college-navy">College Management System</CardTitle>
          <CardDescription>Enter your credentials to sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="admin@college.edu"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-college-navy hover:bg-college-navy/90" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-sm text-center">
            <p className="text-gray-500">Demo accounts:</p>
            <div className="grid grid-cols-3 gap-2 mt-1 text-xs">
              <div className="p-1 bg-gray-100 rounded">
                <p>admin@college.edu</p>
                <p>admin123</p>
              </div>
              <div className="p-1 bg-gray-100 rounded">
                <p>teacher@college.edu</p>
                <p>teacher123</p>
              </div>
              <div className="p-1 bg-gray-100 rounded">
                <p>student@college.edu</p>
                <p>student123</p>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
