import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-employer-sign',
  templateUrl: './employer-sign.component.html',
  styleUrls: ['./employer-sign.component.css']
})
export class EmployerSignComponent implements OnInit {
 employerSignForm: FormGroup;
 checkEmail:boolean;
 password:string="";
 verifyPassword:string="";
 constructor(private formBuilder: FormBuilder, private userService: UserService, private employerService: EmployerService, private toastrService: ToastrService) { }


  ngOnInit(): void {
    this.createEmployerSignForm();
  }

  createEmployerSignForm(){
    this.employerSignForm=this.formBuilder.group({
      companyName:["",Validators.required],
      website:["",Validators.required],
      email: ["",[Validators.required, Validators.email]],
      phoneNumber:["",Validators.required],
      password: ["",Validators.required],
      verifyPassword: ["",Validators.required]

    })
  }

  add(){
    this.checkEmployerEmailExists();
    
    if(this.employerSignForm.valid){
      if( !this.checkEmail && this.checkPassword()){
        this.employerService.add(this.employerSignForm.value).subscribe((response: any) =>{
          this.toastrService.success(response.message, "Aday eklendi");
         
        }, (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      )    
      }
  
    }else{
      this.toastrService.error("Form eksik")
    }

  }

  checkEmployerEmailExists(){
    this.userService.checkEmailExists(this.employerSignForm.value).subscribe((data:any)=>{
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

}
