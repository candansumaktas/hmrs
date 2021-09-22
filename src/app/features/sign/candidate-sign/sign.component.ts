import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})

export class CandidateSignComponent implements OnInit {

  checkEmail:boolean;
  checkId:boolean;
  signCandidateForm: FormGroup;
  candidates: Candidate[]=[]
  verifyPassword:string=""
  password:string=""

  constructor(
    private formBuilder:FormBuilder, 
    private candidateService: CandidateService, 
    private toastrService: ToastrService,
    private userService: UserService 
    ) { }

  ngOnInit(): void {
    this.createCandidateSignForm();
  }

  createCandidateSignForm(){
    this.signCandidateForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      nationalityId:["",[Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      birthYear:[0,[Validators.required, Validators.max(2021), Validators.min(1900)]],
      email: ["",[Validators.required, Validators.email]],
      password: ["",Validators.required],
      verifyPassword :["",Validators.required]
    })

  }
  
  
 

  checkCandidateNationalityIdExists(){
  this.candidateService.checkCandidateNationalityIdExists(this.signCandidateForm.value).subscribe((data:any)=>{
    if(data.data===false){
      this.checkId=false;
    }else{
      this.toastrService.error("Id mevcut");
      this.checkId=true;
    }
  })
  }

  checkCandidateEmailExists(){
  this.userService.checkEmailExists(this.signCandidateForm.value).subscribe((data:any)=>{
    if(data.data===false){
      this.checkEmail=false;
    }else{
      this.toastrService.error("Email mevcut");
      this.checkEmail=true;
    }
  })
  }  

  checkPassword(){
  if(this.password === this.verifyPassword){
    return true;
  }else{
    this.toastrService.error("aynı password değil");
  return false;
   
  }
  
  }

  add(){
   this.checkCandidateEmailExists();
   this.checkCandidateNationalityIdExists();
  
  if(this.signCandidateForm.valid){
    if(!this.checkId && !this.checkEmail && this.checkPassword()){
      this.candidateService.add(this.signCandidateForm.value).subscribe((response: any) =>{
        this.toastrService.success(response.message, "Aday eklendi");   
      })     
    }
  }else{
    this.toastrService.error("Form eksik")
  }
    
  }
}


