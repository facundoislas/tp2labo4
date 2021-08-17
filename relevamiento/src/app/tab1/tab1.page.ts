import { Component } from '@angular/core';
import {AuthService} from '../servicios/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public auth : AuthService, public router: Router) { }
  cerrarSesion(){
    this.auth.logout();
    this.router.navigate(['/login']);
    console.info("Se cierra sesion");
}
}
