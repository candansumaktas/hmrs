import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';
import { Position } from 'src/app/models/position/position';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-job-advertisement-list',
  templateUrl: './job-advertisement-list.component.html',
  styleUrls: ['./job-advertisement-list.component.css']
})
export class JobAdvertisementListComponent implements OnInit {

  jobAdvertisements: JobAdvertisement[]=[]
  page: number = 1;
  itemsPerPage:number=10;
  constructor(private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getActiveJobAdvertisement();
  }

  getActiveJobAdvertisement(){
    this.jobAdvertisementService.getActiveJobAdvertisements().subscribe((data:any)=>{
      this.jobAdvertisements=data.data;
      console.log(data.data)
    
  })
  }

  changeStatus(id:number, active:boolean){
   
    this.jobAdvertisementService.closeJobAdvertisement(id,active).subscribe((data: any) => {
      this.jobAdvertisements = data.data
      this.toastrService.success("İlan pasif hale getirildi")
      console.log(this.jobAdvertisements)
    })
  }  
  

  SortByCreatedDate(){
    this.jobAdvertisementService.getActiveJobAdvertisementsByDate(1).subscribe((data: any) => {
      this.jobAdvertisements = data.data
      console.log(this.jobAdvertisements)
    })
   
  }


  checkUser(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  checkEmployer(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let value = user.message;
      if (value.includes("employer")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
