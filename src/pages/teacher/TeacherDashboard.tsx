
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Users,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  Bell,
} from 'lucide-react';

const TeacherDashboard: React.FC = () => {
  // Mock courses data
  const myCourses = [
    {
      id: 1,
      code: 'CS301',
      name: 'Database Management Systems',
      students: 35,
      nextClass: 'Monday, 10:00 AM',
    },
    {
      id: 2,
      code: 'CS204',
      name: 'Data Structures and Algorithms',
      students: 42,
      nextClass: 'Tuesday, 2:00 PM',
    },
    {
      id: 3,
      code: 'CS401',
      name: 'Advanced Web Development',
      students: 28,
      nextClass: 'Wednesday, 11:00 AM',
    },
  ];

  // Mock pending tasks
  const pendingTasks = [
    {
      id: 1,
      task: 'Grade CS301 Midterm Exams',
      deadline: 'June 15, 2025',
      priority: 'High',
    },
    {
      id: 2,
      task: 'Prepare CS401 Project Assignments',
      deadline: 'June 18, 2025',
      priority: 'Medium',
    },
    {
      id: 3,
      task: 'Submit CS204 Attendance Records',
      deadline: 'June 20, 2025',
      priority: 'Low',
    },
  ];

  // Mock announcements
  const announcements = [
    {
      id: 1,
      title: 'Faculty Meeting',
      content: 'All faculty members are requested to attend the meeting on June 15, 2025 at 10:00 AM.',
      date: 'June 10, 2025',
    },
    {
      id: 2,
      title: 'End of Term Evaluations',
      content: 'Please submit your course evaluations by June 25, 2025.',
      date: 'June 5, 2025',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Teacher Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Courses */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>My Courses</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myCourses.map((course) => (
                  <div 
                    key={course.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center mb-2 sm:mb-0">
                      <div className="p-2 rounded-md bg-blue-50 text-blue-700 mr-4">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{course.name}</h3>
                        <p className="text-sm text-gray-500">{course.code}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-500" />
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                        <span>{course.nextClass}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pending Tasks</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.map((task) => (
                  <div 
                    key={task.id}
                    className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-md mr-4 ${
                        task.priority === 'High' 
                          ? 'bg-red-50 text-red-700' 
                          : task.priority === 'Medium'
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-green-50 text-green-700'
                      }`}>
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{task.task}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>Due {task.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button size="sm" variant="ghost" className="text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Complete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Announcements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="border-b pb-3 last:border-0">
                  <h3 className="font-medium">{announcement.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{announcement.content}</p>
                  <p className="text-xs text-gray-400 mt-2">{announcement.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Take Attendance
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Upload Grades
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Create Announcement
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
