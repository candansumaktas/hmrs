import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListEmployersGuard implements CanActivate {
  constructor(
    private toastrService:ToastrService,
    private router:Router,

  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(JSON.parse(localStorage.getItem("user"))){
        if(localStorage.getItem("user")){
        return true;
     }else{
      this.toastrService.error("öncelikle giriş yapmalısınız")
      this.router.navigate(["login"])
      return false;
     }
        
      }else{
        this.toastrService.error("öncelikle giriş yapmalısınız")
        this.router.navigate(["login"])
        return false;
      }
      
  }
  
}
