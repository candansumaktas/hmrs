import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Position } from 'src/app/models/position/position';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.css'],
})
export class PositionAddComponent implements OnInit {
  positionAddForm: FormGroup;
  positions: Position[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private positionService: PositionService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createPositionAddForm();
    this.getPositions();
  }

  createPositionAddForm() {
    this.positionAddForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  positionAdd() {
     if (this.positionAddForm.valid) {
      if (this.positionDuplicate(this.positionAddForm.value)) {
        this.positionService.positionAdd(this.positionAddForm.value).subscribe(
          (response: any) => {
            console.log(this.positionAddForm.value);
            this.router.navigate(['listPositions']);
            this.toastrService.success(response.message, 'Pozisyon eklendi');
          },
          (responseError) => {
            this.toastrService.error(
              JSON.stringify(responseError.error.data.errors),
              'Doğrulama hatası'
            );
          }
        );
      }else{
        this.toastrService.error('iki kere aynı pozisyon eklenemez');
      }
    } else {
      this.toastrService.error('Hata.');
    }
  }
  getPositions(){
    this.positionService.getPositions().subscribe((data :any)=>{
      this.positions=data.data;
  })
}
  
  positionDuplicate(position: Position) {
    let name = this.positions.find((p) => p.title === position.title);
    if (name) {
      console.log(name);
      return false;
    } else {
      return true;
    }
  }

}
