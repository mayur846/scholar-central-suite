
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, BarChart3, FileText } from 'lucide-react';

const StudentGrades: React.FC = () => {
  // Mock semester data
  const semesters = [
    { id: 'spring2025', name: 'Spring 2025' },
    { id: 'fall2024', name: 'Fall 2024' },
    { id: 'spring2024', name: 'Spring 2024' },
  ];
  
  // Mock current semester grades
  const currentSemesterGrades = [
    {
      id: 'cs101',
      code: 'CS101',
      name: 'Introduction to Computer Science',
      credits: 3,
      midterm: 85,
      assignments: 92,
      finalExam: null,
      currentGrade: 'B+',
    },
    {
      id: 'math201',
      code: 'MATH201',
      name: 'Calculus II',
      credits: 4,
      midterm: 78,
      assignments: 88,
      finalExam: null,
      currentGrade: 'B',
    },
    {
      id: 'eng121',
      code: 'ENG121',
      name: 'Academic Writing',
      credits: 3,
      midterm: 90,
      assignments: 95,
      finalExam: null,
      currentGrade: 'A',
    },
  ];
  
  // Mock past semester grades
  const pastSemesterGrades = {
    'fall2024': [
      {
        id: 'cs100',
        code: 'CS100',
        name: 'Computer Literacy',
        credits: 2,
        grade: 'A',
        points: 4.0,
      },
      {
        id: 'math200',
        code: 'MATH200',
        name: 'Calculus I',
        credits: 4,
        grade: 'B+',
        points: 3.5,
      },
      {
        id: 'eng120',
        code: 'ENG120',
        name: 'English Composition',
        credits: 3,
        grade: 'A-',
        points: 3.7,
      },
      {
        id: 'hist101',
        code: 'HIST101',
        name: 'World History',
        credits: 3,
        grade: 'B',
        points: 3.0,
      },
    ],
    'spring2024': [
      {
        id: 'bio101',
        code: 'BIO101',
        name: 'Introduction to Biology',
        credits: 4,
        grade: 'B',
        points: 3.0,
      },
      {
        id: 'psy101',
        code: 'PSY101',
        name: 'Introduction to Psychology',
        credits: 3,
        grade: 'A',
        points: 4.0,
      },
      {
        id: 'art110',
        code: 'ART110',
        name: 'Art Appreciation',
        credits: 2,
        grade: 'A-',
        points: 3.7,
      },
    ],
  };

  // Calculate GPA for each semester
  const calculateGPA = (courses) => {
    let totalPoints = 0;
    let totalCredits = 0;
    
    courses.forEach(course => {
      totalPoints += course.points * course.credits;
      totalCredits += course.credits;
    });
    
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Grades & Performance</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <BarChart3 className="mr-2 h-5 w-5" />
            Current Semester - Spring 2025
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Midterm</TableHead>
                <TableHead>Assignments</TableHead>
                <TableHead>Final Exam</TableHead>
                <TableHead>Current Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentSemesterGrades.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{course.code}</div>
                      <div className="text-sm text-muted-foreground">{course.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{course.credits}</TableCell>
                  <TableCell>{course.midterm}%</TableCell>
                  <TableCell>{course.assignments}%</TableCell>
                  <TableCell>{course.finalExam || 'Pending'}</TableCell>
                  <TableCell>
                    <div className="font-medium">{course.currentGrade}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Academic History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="fall2024">
            <TabsList className="mb-4">
              {semesters.slice(1).map((semester) => (
                <TabsTrigger key={semester.id} value={semester.id}>{semester.name}</TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(pastSemesterGrades).map(([semesterId, courses]) => (
              <TabsContent key={semesterId} value={semesterId}>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-md font-medium">Semester GPA</h3>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      <span className="font-semibold">{calculateGPA(courses)}</span>
                    </div>
                  </div>
                  <Progress value={calculateGPA(courses) * 25} className="h-2" />
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Grade Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{course.code}</div>
                            <div className="text-sm text-muted-foreground">{course.name}</div>
                          </div>
                        </TableCell>
                        <TableCell>{course.credits}</TableCell>
                        <TableCell>{course.grade}</TableCell>
                        <TableCell>{course.points.toFixed(1)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentGrades;
