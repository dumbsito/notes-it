import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../services/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

constructor(private router:Router,public service:Service){

}

  status:boolean=false
desplegar(){
  this.service.despliegue=!this.service.despliegue
  }


  logOut(){
    this.service.logged=false
    this.service.showLogout=true
    setTimeout(() => {
       this.service.showLogout=false
       
    }, 3000);
    this.router.navigate(["/login"])


    
  }
}
