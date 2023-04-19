import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

headings = [
  {
    id : "ID",
    name : "Name",
    department : "Department",
    empType : "Employment Type",
    action: "Action",
  }
]

employees = [
  {
    id : 101,
    name : "Raj",
    department : "Frontend",
    empType : "Internship",
  },
  {
    id : 102,
    name : "Darshan",
    department : "Database",
    empType : "Internship",
  },
  {
    id : 103,
    name : "Anirudh",
    department : "BA",
    empType : "Internship",
  },
  {
    id : 104,
    name : "Jignesh",
    department : "QA",
    empType : "Internship",
  }
]
}
