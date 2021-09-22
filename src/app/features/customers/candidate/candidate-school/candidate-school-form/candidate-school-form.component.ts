import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department/department';
import { School } from 'src/app/models/school/school';
import { CandidateSchoolService } from 'src/app/services/candidate-school/candidate-school.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-candidate-school-form',
  templateUrl: './candidate-school-form.component.html',
  styleUrls: ['./candidate-school-form.component.css'],
})
export class CandidateSchoolFormComponent implements OnInit {
  schools: School[] = [];
  departments: Department[]=[]
  candidateSchoolForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private candidateSchoolService: CandidateSchoolService,
    private router: Router,
    private toastrService: ToastrService,
    private schoolService: SchoolService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.createSchoolAddForm();
    this.getSchools();
    this.getDepartments();
  }

  createSchoolAddForm() {
    this.candidateSchoolForm = this.formBuilder.group({
      departmentId: ['', Validators.required],
      graduationYear: ['', Validators.required],
      schoolId: ['', Validators.required],
      startYear: ['', Validators.required],
    });
  }

  candidateSchoolAdd() {
    if (this.candidateSchoolForm.valid) {
      this.candidateSchoolService.add(this.candidateSchoolForm.value).subscribe(
        (response: any) => {
          console.log(this.candidateSchoolForm.value);
          this.router.navigate(['listPositions']);
          this.toastrService.success(response.message, 'Okul eklendi');
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

  getSchools() {
    this.schoolService.getSchool().subscribe((data: any) => {
      this.schools = data.data;
    });
  }
  getDepartments() {
    this.departmentService.getDepartment().subscribe((data: any) => {
      this.departments = data.data;
    });
  }

  
}
