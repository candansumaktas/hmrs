import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employer/employer';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementResponse } from 'src/app/models/job-advertisement/job-advertisementResponse';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';

@Component({
  selector: 'app-job-advertisement-list-by-employer',
  templateUrl: './job-advertisement-list-by-employer.component.html',
  styleUrls: ['./job-advertisement-list-by-employer.component.css']
})
export class JobAdvertisementListByEmployerComponent implements OnInit {

  jobAdvertisements: JobAdvertisement[]=[]
  page: number = 1;
  itemsPerPage:number=10;
  constructor(private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getActiveJobAdvertisementsByEmployer(params["employerId"])
  })
  }

  getActiveJobAdvertisementsByEmployer(employerId:number){
    return this.jobAdvertisementService. getActiveJobAdvertisementsByCompany(employerId).subscribe((data:any) => {
      this.jobAdvertisements = data.data
      console.log(data.data);
    });
  }

  SortByCreatedDate(){
    this.jobAdvertisementService.getActiveJobAdvertisementsByDate(1).subscribe((data: any) => {
      this.jobAdvertisements = data.data
      console.log(this.jobAdvertisements)
    })
   
  }

}
