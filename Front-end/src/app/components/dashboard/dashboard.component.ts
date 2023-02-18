import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../services/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

constructor(private router:Router,public servi:Service){

}

  status:boolean=false
desplegar(){
  this.servi.despliegue=!this.servi.despliegue
  }


  logOut(){
    this.servi.logged=false
    this.servi.showLogout=true
    setTimeout(() => {
       this.servi.showLogout=false
       
    }, 3000);
    this.router.navigate(["/login"])


    
  }
}
