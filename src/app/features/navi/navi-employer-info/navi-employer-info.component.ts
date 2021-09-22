import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employer } from 'src/app/models/employer/employer';

@Component({
  selector: 'app-navi-employer-info',
  templateUrl: './navi-employer-info.component.html',
  styleUrls: ['./navi-employer-info.component.css']
})
export class NaviEmployerInfoComponent implements OnInit {

  employer:Employer;
  constructor(private router: Router) { }
   ngOnInit(): void {
  }
   signOut(){
    localStorage.clear()
    this.router.navigate(['home']);
  }
   getEmployerInfo():Employer{
    this.employer=JSON.parse(localStorage.getItem("user"))
      return this.employer;
      }

}
