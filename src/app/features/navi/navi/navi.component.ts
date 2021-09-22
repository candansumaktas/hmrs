import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
  
@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {

  }

  checkUser(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  checkEmployer(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let value = user.message;
      if (value.includes("employer")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkCandidate(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let value = user.message;
      if (value.includes("candidate")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkSystemEmployee(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let value = user.message;
      if (value.includes("systemEmployee")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
  }







