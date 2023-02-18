import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../services/service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
password:string="";
email:string="";

  constructor(public servi:Service,private router:Router,public http:HttpClient){
    environment.url
  }
  ngOnInit(): void {
   console.log(environment.url);

  }
//  lean22@gmailcom Leanriver12
  submit(){

    let params= {
      email:this.email,
      password:this.password,
      }

      this.servi.authenticateUser(params).subscribe(res => {
        if(res.succes) {
          
          this.servi.logged=true;
          this.servi.showLogout=true
          setTimeout(() => {
             this.servi.showLogout=false      
          }, 3000)
        this.router.navigate(["/create"]) 
        
        }
        else {
          
          this.servi.incorrectPass=true
          setTimeout(() => {
             this.servi.incorrectPass=false      
          }, 3000)
        }
      });
   /*   this.servi.login(params).subscribe(data=>{
        
        console.log("exito");
        this.servi.logged=true;
        this.servi.showLogout=true
        setTimeout(() => {
           this.servi.showLogout=false      
        }, 3000)
      this.router.navigate(["/create"]) 
  
      },error=>{
     
          this.servi.incorrectPass=true
          setTimeout(() => {
             this.servi.incorrectPass=false      
          }, 3000)
        })*/  
       
     /*       console.log(data)
          console.log("email no existe");
         this.servi.notExists=true;
         setTimeout(() => {
            this.servi.notExists=false   
         }, 3000);*/
        
        
      
       
        
  
 
  }
 /*   this.http.post(`https://dead-hare-frock.cyclic.app/login`, params).subscribe((data:any)=>{

     
  }
  
    
})*/



  toRegister(){
    this.router.navigate(["/register"])

  }
}
