import { Component } from '@angular/core';
import {AuthService} from '../servicios/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public auth : AuthService, public router: Router) { }
  cerrarSesion(){
    this.auth.logout();
    this.router.navigate(['/login']);
    console.info("Se cierra sesion");
}
}
