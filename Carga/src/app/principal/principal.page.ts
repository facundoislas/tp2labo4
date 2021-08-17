import { Component, OnInit } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  

  ngOnInit() {
  }
  constructor(public auth : AuthService, public router: Router) { }
  cerrarSesion(){
    this.auth.logout();
    this.router.navigate(['/home']);
    console.info("Se cierra sesion");

  }


}
