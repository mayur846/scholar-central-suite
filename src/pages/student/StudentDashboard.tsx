
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  Bell, 
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart,
} from 'lucide-react';

const StudentDashboard: React.FC = () => {
  // Mock enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      code: 'CS301',
      name: 'Database Management Systems',
      instructor: 'Dr. Emily Chen',
      nextClass: 'Monday, 10:00 AM',
      grade: 'A-',
    },
    {
      id: 2,
      code: 'CS204',
      name: 'Data Structures and Algorithms',
      instructor: 'Prof. Michael Johnson',
      nextClass: 'Tuesday, 2:00 PM',
      grade: 'B+',
    },
    {
      id: 3,
      code: 'CS401',
      name: 'Advanced Web Development',
      instructor: 'Dr. Sarah Williams',
      nextClass: 'Wednesday, 11:00 AM',
      grade: 'A',
    },
  ];

  // Mock upcoming assignments
  const upcomingAssignments = [
    {
      id: 1,
      course: 'CS301',
      title: 'Database Design Project',
      deadline: 'June 18, 2025',
      status: 'Pending',
    },
    {
      id: 2,
      course: 'CS204',
      title: 'Algorithm Analysis',
      deadline: 'June 15, 2025',
      status: 'Urgent',
    },
    {
      id: 3,
      course: 'CS401',
      title: 'React Frontend Implementation',
      deadline: 'June 22, 2025',
      status: 'Submitted',
    },
  ];

  // Mock announcements
  const announcements = [
    {
      id: 1,
      title: 'Final Exam Schedule',
      content: 'Final examinations will be held from June 25 to July 2, 2025. Check your course portal for specific dates.',
      date: 'June 10, 2025',
    },
    {
      id: 2,
      title: 'Summer Registration',
      content: 'Summer session registration opens on June 15, 2025.',
      date: 'June 5, 2025',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grade Summary */}
        <Card>
          <CardHeader>
            <CardTitle>GPA Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-4">
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-32 h-32">
                    <circle
                      className="text-gray-200"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="56"
                      cx="64"
                      cy="64"
                    />
                    <circle
                      className="text-college-teal"
                      strokeWidth="8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="56"
                      cx="64"
                      cy="64"
                      strokeDasharray="352"
                      strokeDashoffset="88"
                    />
                  </svg>
                  <span className="absolute text-3xl font-bold">3.7</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">Term GPA</p>
                <div className="flex items-center justify-center mt-4 text-sm">
                  <BarChart className="h-4 w-4 mr-1 text-green-500" />
                  <span className="text-green-500 font-medium">+0.2</span>
                  <span className="text-gray-500 ml-1">from last term</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{course.code}</p>
                    <p className="text-sm text-gray-500">{course.name}</p>
                  </div>
                  <div>
                    <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-2 rounded-full ${
                          course.id === 1 ? 'bg-green-500 w-[85%]' :
                          course.id === 2 ? 'bg-yellow-500 w-[76%]' :
                          'bg-green-500 w-[92%]'
                        }`}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">
                      {course.id === 1 ? '85%' :
                       course.id === 2 ? '76%' :
                       '92%'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrolled Courses */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>My Courses</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
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
                        <p className="text-sm text-gray-500">{course.code} • {course.instructor}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                        <span>{course.nextClass}</span>
                      </div>
                      <div className="px-2 py-1 bg-green-50 text-green-700 rounded">
                        Grade: {course.grade}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Upcoming Assignments</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAssignments.map((assignment) => (
                  <div 
                    key={assignment.id}
                    className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-md mr-4 ${
                        assignment.status === 'Urgent' 
                          ? 'bg-red-50 text-red-700' 
                          : assignment.status === 'Pending'
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-green-50 text-green-700'
                      }`}>
                        {assignment.status === 'Urgent' ? (
                          <AlertCircle className="h-5 w-5" />
                        ) : assignment.status === 'Pending' ? (
                          <FileText className="h-5 w-5" />
                        ) : (
                          <CheckCircle className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{assignment.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="font-medium text-blue-600 mr-1">{assignment.course}</span>
                          <span>•</span>
                          <Calendar className="h-3 w-3 mx-1" />
                          <span>Due {assignment.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {assignment.status !== 'Submitted' && (
                        <Button size="sm" variant={assignment.status === 'Urgent' ? "default" : "outline"}>
                          Submit
                        </Button>
                      )}
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
                Class Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Course Registration
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart className="h-4 w-4 mr-2" />
                Grade Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
