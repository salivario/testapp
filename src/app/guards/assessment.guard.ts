import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Log } from '../interfaces/log';

@Injectable({
  providedIn: 'root'
})
export class AssessmentGuard implements CanActivate {
  constructor(private store: Store<Log>, private route: Router){
    this.store.select('log').subscribe(data =>this.canActive = data)
  }
  canActive!: Boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.canActive){
        return true
      }
      else{
        this.route.navigate(['/'])
        return false
      }
  }
  
}
