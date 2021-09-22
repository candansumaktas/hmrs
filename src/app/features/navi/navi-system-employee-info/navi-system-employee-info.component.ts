import { Component, OnInit } from '@angular/core';
import { SystemEmployee } from 'src/app/models/system-employee/system-employee';

@Component({
  selector: 'app-navi-system-employee-info',
  templateUrl: './navi-system-employee-info.component.html',
  styleUrls: ['./navi-system-employee-info.component.css']
})
export class NaviSystemEmployeeInfoComponent implements OnInit {
 systemEmployee:SystemEmployee;
  constructor() { }

  ngOnInit(): void {
  }

  signOut(){
    localStorage.clear()
  }

  getSystemEmployeeInfo():SystemEmployee{
    this.systemEmployee=JSON.parse(localStorage.getItem("systemEmployee"))
      return this.systemEmployee;
  }

}
