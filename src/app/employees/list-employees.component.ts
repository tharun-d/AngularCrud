import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[] = [
  {
    id: 1,
    name: 'Tharun',
    gender: 'male',
    contactPreference: 'Email',
    email: 'tharundintakurthi@gmail.com',
    dateOfBirth: new Date('01-01-1994'),
    department: 'IT',
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
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/Vinni.jpg'
  },
  {
    id: 1,
    name: 'Sujith',
    gender: 'male',
    contactPreference: 'Email',
    email: 'sujith@gmail.com',
    dateOfBirth: new Date('01-01-1994'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/Sujith.jpg'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
