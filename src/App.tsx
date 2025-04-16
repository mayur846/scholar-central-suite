
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

// Layouts
import DashboardLayout from "@/components/layout/DashboardLayout";

// Pages
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

// Admin Pages
import AdminDashboard from "@/pages/admin/AdminDashboard";

// Teacher Pages
import TeacherDashboard from "@/pages/teacher/TeacherDashboard";

// Student Pages
import StudentDashboard from "@/pages/student/StudentDashboard";
import StudentCourses from "@/pages/student/StudentCourses";
import StudentAttendance from "@/pages/student/StudentAttendance";
import StudentGrades from "@/pages/student/StudentGrades";
import StudentAnnouncements from "@/pages/student/StudentAnnouncements";
import StudentProfile from "@/pages/student/StudentProfile";

const queryClient = new QueryClient();

// Home route redirects based on auth status
const HomeRoute = () => {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to appropriate dashboard based on role
  return <Navigate to={`/${user.role}-dashboard`} replace />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              
              {/* Home route with redirection */}
              <Route path="/" element={<HomeRoute />} />

              {/* Admin routes */}
              <Route 
                path="/admin-dashboard" 
                element={<DashboardLayout allowedRoles={["admin"]} />}
              >
                <Route index element={<AdminDashboard />} />
                {/* Additional admin routes will be added here */}
              </Route>

              {/* Teacher routes */}
              <Route 
                path="/teacher-dashboard" 
                element={<DashboardLayout allowedRoles={["teacher"]} />}
              >
                <Route index element={<TeacherDashboard />} />
                {/* Additional teacher routes will be added here */}
              </Route>

              {/* Student routes */}
              <Route 
                path="/student-dashboard" 
                element={<DashboardLayout allowedRoles={["student"]} />}
              >
                <Route index element={<StudentDashboard />} />
                <Route path="courses" element={<StudentCourses />} />
                <Route path="attendance" element={<StudentAttendance />} />
                <Route path="grades" element={<StudentGrades />} />
                <Route path="announcements" element={<StudentAnnouncements />} />
                <Route path="profile" element={<StudentProfile />} />
              </Route>

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
