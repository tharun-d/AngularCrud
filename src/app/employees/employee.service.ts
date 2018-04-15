import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Tharun',
            gender: 'male',
            contactPreference: 'Email',
            email: 'tharundintakurthi@gmail.com',
            dateOfBirth: new Date('01-01-1994'),
            department: '1',
            isActive: true,
            photoPath: 'assets/images/Tharun.jpg'
          },
          {
            id: 2,
            name: 'Vinni',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 9490285247,
            dateOfBirth: new Date('01-01-1994'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/Vinni.jpg'
          },
          {
            id: 3,
            name: 'Sujith',
            gender: 'male',
            contactPreference: 'Email',
            email: 'sujith@gmail.com',
            dateOfBirth: new Date('01-01-1994'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/Sujith.jpg'
          }
    ];
    getEmployees(): Employee[] {
        return this.listEmployees;
    }
    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
    }
    saveEmployee(employee: Employee) {
      this.listEmployees.push(employee);
    }
}
