import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSignComponent } from './employer-sign.component';

describe('EmployerSignComponent', () => {
  let component: EmployerSignComponent;
  let fixture: ComponentFixture<EmployerSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
