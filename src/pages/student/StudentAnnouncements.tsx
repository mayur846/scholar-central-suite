
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, AlertCircle, Info, FileText } from 'lucide-react';

const StudentAnnouncements: React.FC = () => {
  // Mock announcements data
  const announcements = [
    {
      id: 1,
      title: 'Campus Closed for Spring Break',
      content: 'The campus will be closed from March 25-29 for Spring Break. All classes will resume on March 30.',
      date: '2025-03-15',
      category: 'campus',
      priority: 'normal',
    },
    {
      id: 2,
      title: 'Midterm Exams Schedule Released',
      content: 'The schedule for midterm examinations has been released. Please check the academic calendar for details.',
      date: '2025-03-10',
      category: 'academic',
      priority: 'high',
    },
    {
      id: 3,
      title: 'CS101 - Assignment Deadline Extended',
      content: 'The deadline for the Data Structures project has been extended to March 20.',
      date: '2025-03-05',
      category: 'course',
      priority: 'normal',
    },
    {
      id: 4,
      title: 'Career Fair - Tech Companies',
      content: 'A career fair featuring top tech companies will be held on April 2 in the Student Union Building.',
      date: '2025-03-01',
      category: 'event',
      priority: 'normal',
    },
    {
      id: 5,
      title: 'Student ID Card Renewal',
      content: 'All students are required to renew their ID cards by April 15. Please visit the Registrar\'s Office.',
      date: '2025-02-25',
      category: 'administrative',
      priority: 'high',
    },
  ];

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Function to get badge color based on category
  const getCategoryBadge = (category) => {
    switch (category) {
      case 'academic':
        return { color: 'bg-blue-100 text-blue-800', icon: <FileText className="h-3 w-3 mr-1" /> };
      case 'campus':
        return { color: 'bg-green-100 text-green-800', icon: <Info className="h-3 w-3 mr-1" /> };
      case 'course':
        return { color: 'bg-purple-100 text-purple-800', icon: <FileText className="h-3 w-3 mr-1" /> };
      case 'administrative':
        return { color: 'bg-yellow-100 text-yellow-800', icon: <AlertCircle className="h-3 w-3 mr-1" /> };
      case 'event':
        return { color: 'bg-pink-100 text-pink-800', icon: <Bell className="h-3 w-3 mr-1" /> };
      default:
        return { color: 'bg-gray-100 text-gray-800', icon: <Info className="h-3 w-3 mr-1" /> };
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Announcements</h1>
      </div>
      
      <div className="space-y-4">
        {announcements.map((announcement) => {
          const categoryBadge = getCategoryBadge(announcement.category);
          
          return (
            <Card key={announcement.id} className={announcement.priority === 'high' ? 'border-l-4 border-l-red-500' : ''}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{announcement.title}</CardTitle>
                  <div className="text-sm text-gray-500">
                    {formatDate(announcement.date)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">{announcement.content}</p>
                <div className="flex justify-between items-center">
                  <Badge className={`${categoryBadge.color} flex items-center font-normal`} variant="outline">
                    {categoryBadge.icon}
                    {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
                  </Badge>
                  {announcement.priority === 'high' && (
                    <Badge className="bg-red-100 text-red-800 flex items-center font-normal" variant="outline">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Important
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StudentAnnouncements;
