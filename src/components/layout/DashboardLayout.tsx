
import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  allowedRoles: UserRole[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ allowedRoles }) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl font-medium">Loading...</div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect if user role is not allowed
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role}-dashboard`} replace />;
  }

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div 
        className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      >
        <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      
      <div 
        className={`
          fixed inset-y-0 left-0 md:relative md:translate-x-0 z-40
          transition duration-300 ease-in-out transform
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:flex md:flex-col md:w-64 md:static
        `}
      >
        <DashboardSidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
