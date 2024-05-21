import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://piltovrbackend-2.onrender.com/api/users')
      .then(response => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Student details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map(student => (
          <Card key={student.id} className={cn("shadow-lg", "rounded-lg", "bg-white", "transition-all", "duration-300", "hover:shadow-xl", "transform", "hover:scale-105")}>
            <CardHeader className="border-b border-gray-200 p-4">
              <CardTitle className="text-primary font-bold">{student.name}</CardTitle>
              <CardDescription>Email: {student.email}</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-gray-700">Phone: {student.phonenumber}</p>
              <p className="text-gray-700">State: {student.state}</p>
              <p className="text-gray-700">Date of Birth: {new Date(student.dateofbirth).toLocaleDateString()}</p>
              <p className="text-gray-700">Qualification: {student.qualification}</p>
              <p className="text-gray-700">Course: {student.course}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Student;
