import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { City } from '../../../models/city/city';
import { Employer } from '../../../models/employer/employer';
import { Position } from '../../../models/position/position';
import { CityService } from '../../../services/city/city.service';
import { EmployerService } from '../../../services/employer/employer.service';
import { JobAdvertisementService } from '../../../services/job-advertisement/job-advertisement.service';
import { PositionService } from '../../../services/position/position.service';

@Component({
  selector: 'app-job-advertisement',
  templateUrl: './job-advertisement.component.html',
  styleUrls: ['./job-advertisement.component.css']
})
export class JobAdvertisementComponent implements OnInit {

  jobAdvertisementForm:FormGroup;
  positions: Position[] = []
  cities: City[] = []
  employers: Employer[]=[]

  constructor(private formBuilder: FormBuilder,
    private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService,
    private cityService: CityService,
    private employerService: EmployerService,
    private positionService: PositionService) { }

  ngOnInit(): void {
    this.createEmployerSignForm();
    this.getCities();
    this.getEmployers();
    this.getJobPositions();
  }

  createEmployerSignForm(){
    this.jobAdvertisementForm=this.formBuilder.group({
      cityId: ["", Validators.required],
      deadline: ["", Validators.required],
      employerId: ["", Validators.required],
      jobDescription: ["", Validators.required],
      maxSalary: [""],
      minSalary: [""],
      openPositions: ["", Validators.required],
      positionId: ["", Validators.required],
      workModel: ["", Validators.required],
      workTime: ["", Validators.required],
    })
  }

  add(){
    
    
    if(this.jobAdvertisementForm.valid){
      
        this.jobAdvertisementService.add(this.jobAdvertisementForm.value).subscribe((response: any) =>{
          console.log(this.jobAdvertisementForm.value)
          this.toastrService.success(response.message, "Aday eklendi");
         
        }, (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      )    
      }else{
      this.toastrService.error("Form eksik")
    }

  }

  getCities(){
    this.cityService.getCities().subscribe((data: any) => {
      this.cities = data.data
      console.log(this.cities)
    })
  }

  getJobPositions() {
    this.positionService.getPositions().subscribe((data: any) => {
      this.positions = data.data
      console.log(this.positions)
    })
  }

  getEmployers(){
    this.employerService.getEmployer().subscribe((data:any)=>{
      this.employers=data.data
    })
  }


}
