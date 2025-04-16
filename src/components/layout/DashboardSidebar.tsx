
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { 
  School,
  LayoutDashboard, 
  Users, 
  BookOpen, 
  GraduationCap, 
  CalendarCheck, 
  FileText, 
  Bell, 
  Settings,
  User,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardSidebarProps {
  closeSidebar?: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ closeSidebar }) => {
  const { user } = useAuth();

  // Navigation items based on user role
  const getNavItems = () => {
    if (user?.role === 'admin') {
      return [
        { name: 'Dashboard', path: '/admin-dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
        { name: 'Departments', path: '/admin-dashboard/departments', icon: <BookOpen className="h-5 w-5" /> },
        { name: 'Courses', path: '/admin-dashboard/courses', icon: <GraduationCap className="h-5 w-5" /> },
        { name: 'Faculty', path: '/admin-dashboard/teachers', icon: <Users className="h-5 w-5" /> },
        { name: 'Students', path: '/admin-dashboard/students', icon: <Users className="h-5 w-5" /> },
        { name: 'Reports', path: '/admin-dashboard/reports', icon: <FileText className="h-5 w-5" /> },
        { name: 'Settings', path: '/admin-dashboard/settings', icon: <Settings className="h-5 w-5" /> },
      ];
    }
    
    if (user?.role === 'teacher') {
      return [
        { name: 'Dashboard', path: '/teacher-dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
        { name: 'My Courses', path: '/teacher-dashboard/courses', icon: <GraduationCap className="h-5 w-5" /> },
        { name: 'Attendance', path: '/teacher-dashboard/attendance', icon: <CalendarCheck className="h-5 w-5" /> },
        { name: 'Grades', path: '/teacher-dashboard/grades', icon: <FileText className="h-5 w-5" /> },
        { name: 'Announcements', path: '/teacher-dashboard/announcements', icon: <Bell className="h-5 w-5" /> },
        { name: 'Profile', path: '/teacher-dashboard/profile', icon: <User className="h-5 w-5" /> },
      ];
    }
    
    return [
      { name: 'Dashboard', path: '/student-dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
      { name: 'My Courses', path: '/student-dashboard/courses', icon: <BookOpen className="h-5 w-5" /> },
      { name: 'Attendance', path: '/student-dashboard/attendance', icon: <CalendarCheck className="h-5 w-5" /> },
      { name: 'Grades', path: '/student-dashboard/grades', icon: <FileText className="h-5 w-5" /> },
      { name: 'Announcements', path: '/student-dashboard/announcements', icon: <Bell className="h-5 w-5" /> },
      { name: 'Profile', path: '/student-dashboard/profile', icon: <User className="h-5 w-5" /> },
    ];
  };

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <div className="bg-white border-r border-gray-200 w-64 h-full flex flex-col">
      {/* Mobile close button */}
      <div className="md:hidden flex justify-between items-center h-16 px-4 border-b border-gray-200">
        <div className="flex items-center">
          <School className="h-6 w-6 text-college-navy" />
          <span className="ml-2 text-lg font-semibold text-college-navy">CMS</span>
        </div>
        <Button variant="ghost" size="sm" onClick={closeSidebar}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Logo for desktop */}
      <div className="hidden md:flex h-16 items-center justify-center border-b border-gray-200">
        <School className="h-8 w-8 text-college-navy" />
        <span className="ml-2 text-xl font-semibold text-college-navy">CMS</span>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto">
        <div className="pb-2 mb-2">
          <p className="text-sm font-medium text-gray-500">{user?.role?.toUpperCase()}</p>
          <p className="text-base font-semibold truncate">{user?.name}</p>
        </div>
        
        <nav className="space-y-1 mt-6">
          {getNavItems().map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'bg-college-navy text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )
              }
              onClick={handleLinkClick}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
