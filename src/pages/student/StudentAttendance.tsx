
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, CalendarRange } from 'lucide-react';

const StudentAttendance: React.FC = () => {
  // Mock attendance data
  const courses = [
    {
      id: 'cs101',
      code: 'CS101',
      name: 'Introduction to Computer Science',
      attended: 12,
      total: 15,
      percentage: 80,
    },
    {
      id: 'math201',
      code: 'MATH201',
      name: 'Calculus II',
      attended: 14,
      total: 15,
      percentage: 93,
    },
    {
      id: 'eng121',
      code: 'ENG121',
      name: 'Academic Writing',
      attended: 10,
      total: 15,
      percentage: 67,
    },
  ];

  // Mock detailed attendance records
  const attendanceRecords = [
    {
      date: '2025-04-01',
      day: 'Monday',
      courses: [
        { code: 'CS101', status: 'present' },
        { code: 'MATH201', status: 'present' },
      ],
    },
    {
      date: '2025-04-02',
      day: 'Tuesday',
      courses: [
        { code: 'ENG121', status: 'absent' },
      ],
    },
    {
      date: '2025-04-03',
      day: 'Wednesday',
      courses: [
        { code: 'CS101', status: 'present' },
        { code: 'MATH201', status: 'present' },
      ],
    },
    {
      date: '2025-04-04',
      day: 'Thursday',
      courses: [
        { code: 'ENG121', status: 'present' },
      ],
    },
    {
      date: '2025-04-05',
      day: 'Friday',
      courses: [
        { code: 'CS101', status: 'absent' },
        { code: 'MATH201', status: 'present' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">
                {course.code}: {course.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Attendance</span>
                  <span className="font-medium">
                    {course.attended}/{course.total} ({course.percentage}%)
                  </span>
                </div>
                <Progress value={course.percentage} className="h-2" />
                <p className="text-sm text-muted-foreground pt-2">
                  {course.percentage >= 75 
                    ? "Good standing" 
                    : "Attendance below required minimum (75%)"}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <CalendarRange className="mr-2 h-5 w-5" />
            Recent Attendance Record
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Day</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceRecords.flatMap((record) =>
                record.courses.map((course, idx) => (
                  <TableRow key={`${record.date}-${course.code}`}>
                    {idx === 0 && (
                      <>
                        <TableCell rowSpan={record.courses.length} className="align-middle">
                          {new Date(record.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell rowSpan={record.courses.length} className="align-middle">
                          {record.day}
                        </TableCell>
                      </>
                    )}
                    <TableCell>{course.code}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {course.status === 'present' ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                            <span className="text-green-600">Present</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-4 w-4 text-red-500 mr-1" />
                            <span className="text-red-600">Absent</span>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentAttendance;
