import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public auth : AuthService, public router: Router, private native : NativeAudio) { }

  cerrarSesion(){
    this.auth.logout();
    this.router.navigate(['/home']);
    console.info("Se cierra sesion");
}


  ngOnInit() {
  }

}
