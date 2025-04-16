
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Clock, User, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StudentCourses: React.FC = () => {
  // Mock course data
  const enrolledCourses = [
    {
      id: 'cs101',
      code: 'CS101',
      name: 'Introduction to Computer Science',
      instructor: 'Dr. John Smith',
      credits: 3,
      schedule: 'Mon, Wed 10:00 - 11:30 AM',
      room: 'Science Building 301',
      status: 'active',
    },
    {
      id: 'math201',
      code: 'MATH201',
      name: 'Calculus II',
      instructor: 'Dr. Maria Garcia',
      credits: 4,
      schedule: 'Tue, Thu 1:00 - 2:30 PM',
      room: 'Mathematics Building 105',
      status: 'active',
    },
    {
      id: 'eng121',
      code: 'ENG121',
      name: 'Academic Writing',
      instructor: 'Prof. Sarah Johnson',
      credits: 3,
      schedule: 'Fri 9:00 - 11:30 AM',
      room: 'Liberal Arts 204',
      status: 'active',
    },
  ];

  const availableCourses = [
    {
      id: 'cs201',
      code: 'CS201',
      name: 'Data Structures and Algorithms',
      instructor: 'Dr. Robert Chen',
      credits: 4,
      schedule: 'Mon, Wed 2:00 - 3:30 PM',
      room: 'Science Building 405',
      status: 'available',
    },
    {
      id: 'phys101',
      code: 'PHYS101',
      name: 'Introduction to Physics',
      instructor: 'Dr. Michael Brown',
      credits: 4,
      schedule: 'Tue, Thu 9:00 - 10:30 AM',
      room: 'Science Building 201',
      status: 'available',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">My Courses</h1>
      </div>

      <Tabs defaultValue="enrolled" className="w-full">
        <TabsList>
          <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
          <TabsTrigger value="available">Available Courses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="enrolled" className="space-y-4 mt-4">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-college-navy text-white">
                        {course.code}
                      </Badge>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{course.credits} Credits</p>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{course.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{course.room}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="available" className="space-y-4 mt-4">
          {availableCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-gray-700 text-white">
                        {course.code}
                      </Badge>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{course.credits} Credits</p>
                  </div>
                  <Button variant="outline" size="sm">Enroll</Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{course.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{course.room}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentCourses;
