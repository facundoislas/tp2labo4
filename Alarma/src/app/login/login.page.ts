import { Component, OnInit } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';
import {AuthService} from '../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  ngOnInit() {
  }

  tipoUser:string;
  user= { email : '', password : ''};
  constructor(public navCtrl: NavController, public auth : AuthService,
    public alertCtrl : AlertController, private router: Router) {
  }


  UserValido()
  {
    switch(this.tipoUser){
      case "admin":{
        this.user.email="admin@gmail.com";
        this.user.password="111111";
        break;
      }
      case "usuario":{
        this.user.email="usuario@gmail.com";
        this.user.password="333333";
        break;
      }
      case "invitado":{
        this.user.email="invitado@gmail.com";
        this.user.password="222222";
        break;
      }                           
      case "anonimo":{
        this.user.email="anonimo@gmail.com";
        this.user.password="444444";
        break;}
      case "tester":{
        this.user.email="test@gmail.com";
        this.user.password="555555";
        break;}        
    }

  
  }  
  
   async login()
  {

      this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
        this.router.navigate(['/tabs']);
        }
      )
       .catch(async err=>{
        let alert = await this.alertCtrl.create({
          header: 'Error',
          buttons: ['Aceptar'],
          message: "error al loguearse"
        });
        alert.present();
      })
      
    }
    borrar()
    {
      this.user.email=null;
      this.user.password=null;
    }

}
