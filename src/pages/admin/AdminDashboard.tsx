
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  School,
  GraduationCap,
  FileText,
  Calendar,
  TrendingUp,
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  // Mock statistics for demonstration
  const stats = [
    {
      title: 'Total Students',
      value: '1,245',
      icon: <Users className="h-6 w-6 text-blue-500" />,
      change: '+12%',
      trend: 'up',
    },
    {
      title: 'Total Faculty',
      value: '68',
      icon: <School className="h-6 w-6 text-purple-500" />,
      change: '+5%',
      trend: 'up',
    },
    {
      title: 'Active Courses',
      value: '85',
      icon: <GraduationCap className="h-6 w-6 text-green-500" />,
      change: '+3%',
      trend: 'up',
    },
    {
      title: 'Departments',
      value: '12',
      icon: <FileText className="h-6 w-6 text-yellow-500" />,
      change: '0%',
      trend: 'stable',
    },
  ];

  // Mock recent activities
  const recentActivities = [
    {
      id: 1,
      action: 'New student registered',
      name: 'Alex Johnson',
      department: 'Computer Science',
      time: '2 hours ago',
    },
    {
      id: 2,
      action: 'New course added',
      name: 'Advanced Database Systems',
      department: 'Computer Science',
      time: '5 hours ago',
    },
    {
      id: 3,
      action: 'Faculty assigned to course',
      name: 'Dr. Maria Garcia to Calculus II',
      department: 'Mathematics',
      time: '1 day ago',
    },
    {
      id: 4,
      action: 'Department updated',
      name: 'Physics Department',
      department: 'Physics',
      time: '2 days ago',
    },
  ];

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Faculty Meeting',
      date: 'June 15, 2025',
      time: '10:00 AM',
    },
    {
      id: 2,
      title: 'End of Term Exams',
      date: 'June 20-25, 2025',
      time: 'All Day',
    },
    {
      id: 3,
      title: 'New Student Orientation',
      date: 'July 2, 2025',
      time: '9:00 AM',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
                <div className="rounded-full p-2 bg-gray-100">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <span className="h-4 w-4 text-gray-500 mr-1">—</span>
                )}
                <span
                  className={`font-medium ${
                    stat.trend === 'up'
                      ? 'text-green-500'
                      : 'text-gray-500'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start p-3 rounded-lg border border-gray-100 bg-white"
                >
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.name} • {activity.department}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
            <Calendar className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-b border-gray-100 pb-3 last:border-0">
                  <p className="font-medium">{event.title}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{event.date}</span>
                    <span className="mx-1">•</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
