import { AdminService } from 'src/app/services/admin.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewAssessmentsGuard implements CanActivate {
  constructor(private adminService: AdminService, private route: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.adminService.getUserAssessment !== undefined){
        return true;
      }
      else{
        this.route.navigate(['/'])
        return false
      }
  }
  
}
