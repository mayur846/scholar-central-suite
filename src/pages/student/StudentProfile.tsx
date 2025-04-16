
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Mail, Phone, MapPin, Building, Calendar, GraduationCap, Unlock } from 'lucide-react';

const StudentProfile: React.FC = () => {
  const { user } = useAuth();
  
  // Mock student data - in a real app this would come from the API
  const studentData = {
    id: '10089453',
    name: user?.name || 'Student Name',
    email: user?.email || 'student@college.edu',
    phone: '(555) 123-4567',
    address: '123 College Ave, Apt 456, University City, CA 92092',
    dateOfBirth: 'January 15, 2000',
    major: 'Computer Science',
    minor: 'Mathematics',
    year: 'Junior',
    enrollmentDate: 'August 2023',
    advisor: 'Dr. Emily Chen',
    gpa: '3.75',
  };
  
  // State for form values
  const [formValues, setFormValues] = useState({
    phone: studentData.phone,
    address: studentData.address,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the API
    console.log('Form submitted:', formValues);
    // Show success message
  };
  
  // Handle password update
  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send password update to the API
    console.log('Password update:', {
      currentPassword: formValues.currentPassword,
      newPassword: formValues.newPassword,
    });
    // Reset form and show success message
    setFormValues({
      ...formValues,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };
  
  // Get user initials for avatar
  const getInitials = () => {
    if (!studentData.name) return 'SN';
    return studentData.name
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="h-24 w-24 mx-auto">
              <AvatarFallback className="text-xl bg-college-navy text-white">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="mt-4">{studentData.name}</CardTitle>
            <CardDescription>Student ID: {studentData.id}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">{studentData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">{studentData.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">{studentData.address}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">DOB: {studentData.dateOfBirth}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Academic Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs text-gray-500">Major</Label>
                <div className="flex items-center mt-1">
                  <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{studentData.major}</span>
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Minor</Label>
                <div className="flex items-center mt-1">
                  <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{studentData.minor}</span>
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Current Year</Label>
                <div className="flex items-center mt-1">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{studentData.year}</span>
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Enrollment Date</Label>
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{studentData.enrollmentDate}</span>
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Academic Advisor</Label>
                <div className="flex items-center mt-1">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{studentData.advisor}</span>
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Current GPA</Label>
                <div className="flex items-center mt-1">
                  <Building className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{studentData.gpa}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="contact">
            <TabsList className="mb-4">
              <TabsTrigger value="contact">Contact Information</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formValues.address}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit">Update Information</Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="password">
              <form onSubmit={handlePasswordUpdate}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      name="currentPassword"
                      type="password"
                      value={formValues.currentPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={formValues.newPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formValues.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" className="flex items-center">
                    <Unlock className="h-4 w-4 mr-2" />
                    Update Password
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentProfile;
