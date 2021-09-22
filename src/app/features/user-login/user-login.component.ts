import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginUserForm();
  }

  loginUserForm() {
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  loginUser() {
    let user: User = this.loginForm.value;
    this.userService.getLogin(user).subscribe(
      (response: any) => {
        if (response.data) {
          this.toastrService.success('Sisteme giriş yapıldı.');
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['home']);
        } else {
          this.toastrService.error('Böyle bir kullanıcı bulunmuyor');
        }
      },
      (responseError) => {
        this.toastrService.error(
          JSON.stringify(responseError.error.data.errors),
          'Doğrulama hatası'
        );
      }
    );
  }

  // loginUser() {
  //   let user: User = this.loginForm.value;

  //   this.userService.getLogin(user).subscribe(
  //     (response: any) => {

  //       let message = response.message

  //       if (message === "systemEmployee Logged in") {
  //         this.toastrService.success(message);
  //         localStorage.setItem("systemEmployee", JSON.stringify(response))
  //         this.router.navigate(['']);

  //       } else if (message === "employer Logged in") {
  //         this.toastrService.success("Sisteme giriş yapıldı.");
  //         localStorage.setItem("employer", JSON.stringify(response))
  //         this.router.navigate(['']);

  //       } else if (response.data.message === "candidate Logged in") {
  //         this.toastrService.success("Sisteme giriş yapıldı.");
  //         localStorage.setItem("candidate", JSON.stringify(response))
  //         this.router.navigate(['']);

  //       } else {
  //         this.toastrService.error("Kullanıcı bilgileri eksik.")
  //       }
  //     }, (responseError) => {
  //       this.toastrService.error(
  //         JSON.stringify(responseError.error.data.errors),
  //         'Doğrulama hatası'
  //       );
  //     })

  // }

  // checkLoginEmployer() {
  //   let user: User = this.loginForm.value;
  //   this.userService.getLogin(user).subscribe(
  //     (response: any) => {
  //       let message = response.message
  //       if (message === "candidate Logged in") {
  //         this.toastrService.success("Sisteme giriş yapıldı.");
  //         localStorage.setItem("candidate", JSON.stringify(response))
  //         this.router.navigate(['']);
  //       } else {
  //         this.toastrService.error("Kullanıcı bilgileri eksik.")
  //       }
  //     })
  // }

  // checkLoginCandidate() {
  //   let user: User = this.loginForm.value;
  //   this.userService.getLogin(user).subscribe(
  //     (response: any) => {
  //       let message = response.message
  //       if (message === "employer Logged in") {
  //         this.toastrService.success("Sisteme giriş yapıldı.");
  //         localStorage.setItem("employer", JSON.stringify(response))
  //         this.router.navigate(['']);
  //       } else {
  //         this.toastrService.error("Kullanıcı bilgileri eksik.")
  //       }
  //     })
  // }

  // checkLoginSystemPersonel() {
  //   let user: User = this.loginForm.value;
  //   this.userService.getLogin(user).subscribe(
  //     (response: any) => {
  //       let message = response.message
  //       if (message === "systemEmployee Logged in") {
  //         this.toastrService.success("Sisteme giriş yapıldı.");
  //         localStorage.setItem("systemEmployee", JSON.stringify(response))
  //         this.router.navigate(['']);
  //       } else {
  //         this.toastrService.error("Kullanıcı bilgileri eksik.")
  //       }
  //     })
  // }

  // loginUser() {
  //   if (this.loginForm.valid) {
  //     this.checkLoginEmployer()
  //     this.checkLoginEmployer()
  //     this.checkLoginSystemPersonel()
  //     this.router.navigate([""])
  //   }
  //   else {
  //     this.toastrService.error("Hata")
  //   }
  // }
}
