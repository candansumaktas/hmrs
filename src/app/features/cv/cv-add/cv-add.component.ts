import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill/skill';
import { CvService } from 'src/app/services/cv/cv.service';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',
  styleUrls: ['./cv-add.component.css']
})
export class CvAddComponent implements OnInit {
  
  cvAddForm: FormGroup;
  constructor(private cvService: CvService, private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
   ) { }

  ngOnInit(): void {
    this.createCvAddForm();
  }

  createCvAddForm() {
    this.cvAddForm = this.formBuilder.group({
      candidateJobExperienceIds: ['', Validators.required],
      candidateLanguageIds:['', Validators.required],
      candidateSchoolIds: ['', Validators.required],
      candidateSkillIds: ['', Validators.required],
      coverLetter: ['', Validators.required],
      title: ['', Validators.required],
      linkedinAccount:['', Validators.required],
      githubAccount:['', Validators.required],
    });
  }

  cvAdd() {
    if (this.cvAddForm.valid) {
    
       this.cvService.add(this.cvAddForm.value).subscribe(
         (response: any) => {
           console.log(this.cvAddForm.value);
           
           this.toastrService.success(response.message, 'CV eklendi');
         },
         (responseError) => {
           this.toastrService.error(
             JSON.stringify(responseError.error.data.errors),
             'Doğrulama hatası'
           );
         }
       );
     }else {
      this.toastrService.error('Hata.');
    }
  } 

  

 

}
