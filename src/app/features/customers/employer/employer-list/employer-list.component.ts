import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/models/employer/employer';
import { BaseListResponse } from 'src/app/models/listResponse/listResponse';
import { EmployerService } from 'src/app/services/employer/employer.service';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employerList: Employer[]=[]
  page: number = 1;
  itemsPerPage:number=10;
  constructor(private employerService : EmployerService) { }
  
  ngOnInit(): void {
    this.getEmployers();
  }

  getEmployers(){
    this.employerService.getEmployer().subscribe((data:any)=>{
      this.employerList=data.data;
      console.log(data.data)
    
  })
  }

}
