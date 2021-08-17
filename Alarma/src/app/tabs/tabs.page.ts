import { Component } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import { Router } from '@angular/router';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  alarmaActivada: Boolean;
  titulo: string;
  ultimoAlpha: number;
  ultimoBeta: number;
  ultimoGamma: number;
  private timeoutLeft: NodeJS.Timeout;
  private timeoutRight: NodeJS.Timeout;
  private timeoutVertical: NodeJS.Timeout;
  private timeoutHorizontal: NodeJS.Timeout;
  private flagLeft: boolean;
  private flagRight: boolean;
  private flagHorizontal: boolean;
  private flagVertical: boolean;
  private flagObtenerDatos: boolean;
  private eventListener;
  private aux : number;

  constructor(public auth : AuthService, public router: Router, private vibration: Vibration,
    private flashlight: Flashlight, private native : NativeAudio) { 

      this.alarmaActivada = false;
    this.titulo = 'Alarma de Robo - Desactivada';
    this.flagHorizontal = false;
    this.flagVertical = false;
    this.flagRight = false;
    this.flagLeft = false;
    this.flagObtenerDatos = true;
    this.eventListener = event => {
      this.processOrientation(event);
    };

    setInterval(x => {
      this.flagObtenerDatos = true;
    }, 1000);

    this.native.preloadSimple('uniqueId1', 'assets/sounds/izquierda.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId2', 'assets/sounds/derecha.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId3', 'assets/sounds/vertical.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId4', 'assets/sounds/horizontal.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });

    }

    
  
  flag: boolean;
/*
  prender()
  {
    this.flag = true;
    this.vibration.vibrate(5000);
    
  }

  apagar()
  {
    this.flag = false;
    
  }
*/

ActivarAlarma() {
  this.vibration.vibrate(300);
  this.alarmaActivada = !this.alarmaActivada;
  this.aux = -1;
  const elistener = this.eventListener;
  this.flagHorizontal = false;
  this.flagVertical = false;
  this.flagRight = false;
  this.flagLeft = false;
  this.stopVertical();
  this.stopHorizontal();
  this.stopLeft();
  this.stopRight();

  if (this.alarmaActivada) {
    window.addEventListener('deviceorientation', elistener, true);
    
  } else {
    this.flagHorizontal = false;
    this.flagVertical = false;
    this.flagRight = false;
    this.flagLeft = false;
    this.stopVertical();
    this.stopHorizontal();
    this.stopLeft();
    this.stopRight();
    window.removeEventListener('deviceorientation', elistener, true);
  }
}


private stopVertical() {
  this.flagLeft = false;
  this.flagRight = false;
  this.flashlight.switchOff();

  clearTimeout(this.timeoutVertical);
}

private startVertical() {
    this.flagVertical = true;
    this.flagHorizontal = false;
    this.flagLeft = true;
    this.flagRight = true;
    this.flashlight.switchOn();
    this.native.play('uniqueId3').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });
    this.timeoutVertical = setTimeout(x => {
      this.stopVertical(); }, 5000);
    // setTimeout(x => {
    //   this.flagVertical = false;
    // }, 5000);
}

private stopHorizontal() {
  this.flagLeft = false;
  this.flagRight = false;
  this.vibration.vibrate(0);
  clearTimeout(this.timeoutHorizontal);
}

private startHorizontal() {
  if(this.aux === 0){
    this.flagHorizontal = true;
    this.flagVertical = false;
    this.flagLeft = true;
    this.flagRight = true;
    this.vibration.vibrate(5000);
    this.native.play('uniqueId4').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });
    this.timeoutHorizontal = setTimeout(x => {
      this.stopHorizontal(); }, 5000);
    // setTimeout(x => {
    //   this.flagHorizontal = false;
    // }, 5000);
  }
  this.aux = 0 ;
}

private stopLeft() {
  clearTimeout(this.timeoutLeft);
}

private startLeft() {
    this.flagLeft = true;
    this.flagRight = false;
    this.native.play('uniqueId1').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });
    this.timeoutLeft = setTimeout(x => {
      this.stopLeft(); }, 5000);
    // setTimeout(x => {
    //   this.flagLeft = false;
    // }, 5000);
}

private stopRight() {
  clearTimeout(this.timeoutRight);
}

private startRight() {
    this.flagRight = true;
    this.flagLeft = false;
    this.native.play('uniqueId2').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });
    this.timeoutRight = setTimeout(x => {
      this.stopRight(); }, 5000);
    // setTimeout(x => {
    //   this.flagRight = false;
    // }, 5000);
}

private processOrientation(event: DeviceOrientationEvent) {
  const alpha = event.alpha === null ? 0 : Math.round(event.alpha);
  const beta = event.beta === null ? 0 : Math.round(event.beta);
  const gamma = event.gamma === null ? 0 : Math.round(event.gamma);
  if (this.flagObtenerDatos) {
    this.ultimoAlpha = alpha;
    this.ultimoGamma = gamma;
    this.ultimoBeta = beta;
    this.flagObtenerDatos = false;
  }

  if (this.flagVertical === false && (beta >= 80 && beta <= 100)) {
    // Vertical.
    this.stopHorizontal();
    this.stopRight();
    this.stopLeft();
    this.startVertical();
  } else if (this.flagHorizontal === false && (beta >= -5 && beta <= 5)) {
    // Horizontal.
    this.stopVertical();
    this.stopRight();
    this.stopLeft();
    this.startHorizontal();
  } else if (this.flagLeft === false && alpha - this.ultimoAlpha > 30) {
    // Izquierda.
    this.stopRight();
    this.startLeft();
  } else if (this.flagRight === false && alpha - this.ultimoAlpha < -30) {
    // Derecha.
    this.stopLeft();
    this.startRight();
  }

}
}

