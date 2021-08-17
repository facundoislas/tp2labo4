import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {AuthService} from '../servicios/auth/auth.service';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {

  constructor(public auth : AuthService, public router: Router) { }
  cerrarSesion(){
    this.auth.logout();
    this.router.navigate(['/']);
    console.info("Se cierra sesion");
  }
}
