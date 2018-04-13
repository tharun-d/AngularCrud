import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
// gender = 'male'; // default check
employee: Employee = {
id: null,
name: null,
gender: null,
email: '',
phoneNumber: null,
contactPreference: null,
dateOfBirth: null,
department: '-1', // selecting default
isActive: null,
photoPath: null
};
departments: Department[] = [
  {
    id: 1,
    name: 'IT'
  },
  {
    id: 2,
    name: 'Admin'
  },
  {
    id: 3,
    name: 'Manager'
  }
];
datePickerConfig: Partial<BsDatepickerConfig>; // change theme
dateOfBirth: Date = new Date('04-12-2018');
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass : 'theme-dark-blue',
        showWeekNumbers: false
      }
    );
   }

   previewPhoto = false;
   togglePhotoPreview() {
     this.previewPhoto = !this.previewPhoto;
   }
  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}
