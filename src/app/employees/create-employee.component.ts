import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
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
department: 'select', // selecting default
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
  constructor(private _employeeService: EmployeeService, private _router: Router) {
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

  saveEmployee(): void {
    this._employeeService.saveEmployee(this.employee);
    this._router.navigate(['list']);
  }
}
