import { Component } from '@angular/core';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.scss']
})
export class NavarComponent {
  userLOCAL : any ;
  ngOnInit(){
    this.userLOCAL = JSON.parse(sessionStorage.getItem('AuthorizacionPortalRepaglas')!);
    console.log("this.userLOCAL",this.userLOCAL);
    
  }
}