import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public employee = [
    {
      eid : 101,
      name : "Raj",
      department : "Frontend",
      city : "Valsad"
    },
    {
      eid : 102,
      name : "Pruthvi",
      department : "Backend",
      city : "Ahmedabad"
    },
    {
      eid : 103,
      name : "Dharmit",
      department : "Fullstack",
      city : "Surat"
    },
    {
      eid : 104,
      name : "Jay",
      department : "Frontend",
      city : "Dahod"
    },
    {
      eid : 105,
      name : "Srushti",
      department : "QA",
      city : "Ahmedabad"
    }
  ]

  public heading = [
    {
      eid : "Eid",
      name : "Name",
      department : "Department",
      city : "City",
      action : "Action",
    }
  ]
}
