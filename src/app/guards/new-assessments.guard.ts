import { AdminService } from 'src/app/services/admin.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Role } from '../interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class NewAssessmentsGuard implements CanActivate {
  role!: string;
  constructor(private adminService: AdminService, private route: Router, private store: Store<Role>){
    this.store.select('role').subscribe(data => this.role = data)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.role == 'Admin'){  
        if(this.adminService.getUserAssessment() !== undefined){
          return true;
        }
        else{
          this.route.navigate(['/'])
          return false
        }
      }
      else{
        this.route.navigate(['/'])
        return false
      }
  }
  
}
