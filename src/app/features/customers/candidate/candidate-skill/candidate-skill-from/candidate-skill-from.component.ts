import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateSkillService } from 'src/app/services/candidate-skill/candidate-skill.service';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-candidate-skill-from',
  templateUrl: './candidate-skill-from.component.html',
  styleUrls: ['./candidate-skill-from.component.css']
})
export class CandidateSkillFromComponent implements OnInit {

  skills: Skill[] = [];
  candidateSkillForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private candidateSkillService: CandidateSkillService,
    private router: Router,
    private toastrService: ToastrService,
    private skillService: SkillService
    
  ) {}

  ngOnInit(): void {
    this.createSkillAddForm();
    this.getSkills();
  
  }

  createSkillAddForm() {
    this.candidateSkillForm=this.formBuilder.group({
      skillId: ["",Validators.required],
  })
}

  candidateSkillAdd() {
    if (this.candidateSkillForm.valid) {
      this.candidateSkillService.add(this.candidateSkillForm.value).subscribe(
        (response: any) => {
          console.log(this.candidateSkillForm.value);
          this.toastrService.success(response.message, 'Skill eklendi');
        },
        (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      );
    } else {
      this.toastrService.error('iki kere aynı pozisyon eklenemez');
    }
  }

  getSkills() {
    this.skillService.getSkill().subscribe((data: any) => {
      this.skills = data.data;
    });
  }
  

}
