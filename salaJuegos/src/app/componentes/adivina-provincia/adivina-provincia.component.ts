import { Component, OnInit } from '@angular/core';
import {JuegoAdivinaProvincia} from '../../clases/juego-adivina-provincia'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-adivina-provincia',
  templateUrl: './adivina-provincia.component.html',
  styleUrls: ['./adivina-provincia.component.css']
})
export class AdivinaProvinciaComponent implements OnInit {


  nuevoJuego : JuegoAdivinaProvincia;
  ocultarVerificar : boolean;
  ocultarNuevo : boolean;
  Mensajes:string;
  puntos:number;
  nombre:string = "Adivina la Provincia"
  arrayResultados : Array<any>;
  jugador = JSON.parse(localStorage.getItem("Id"));
  intentos: number;

  constructor() {

    this.nuevoJuego = new JuegoAdivinaProvincia("Adivina La Provincia",false,this.jugador, 0, "00");
    this.ocultarVerificar = true;
    this.puntos=0;
    this.arrayResultados = JSON.parse(this.jugador);
    this.intentos = 0;
    
    //console.info(this.arrayResultados);

   }

   public generar()
   {
     this.ocultarVerificar = false;
     this.nuevoJuego.generar();
     
     //console.log(this.nuevoJuego.elementoAdivinar);
   }

   public verificar()
   {
    //console.log(this.nuevoJuego.opcionIngresada);
    
    if(this.nuevoJuego.verificar())
      {
        this.MostarMensaje("Muy bien acertaste!!", true);
        this.nuevoJuego.nombre="Adivina La Provincia";
        
        this.nuevoJuego.intentos = this.intentos+1;
        this.intentos+=1;
        
        
      }
      else
        {
          if(this.intentos<3){
          this.nuevoJuego.nombre="Adivina La Provincia";
          
          this.MostarMensaje("Elegiste la opcion incorrecta!!",false);
          
          }
          this.nuevoJuego.intentos = this.intentos;
        }
        

        this.nuevoJuego = new JuegoAdivinaProvincia("Adivina La Provincia",false,this.jugador,0,"00");
        this.puntos+=1;
        console.log(this.puntos);
        if(this.puntos==3)
        {
          console.log("intentos: " + this.intentos);
          this.nuevoJuego.jugador=sessionStorage.getItem('user');
          this.nuevoJuego.guardarLocal();
          this.puntos=0;
          if(this.intentos>1)
          {
            this.nuevoJuego.gano = true;
            this.MostarMensaje("Ganaste! Ahora empieza un nuevo juego",true);
          }
          else
          {
            this.nuevoJuego.gano = false;
            this.MostarMensaje("Perdiste! Ahora empieza un nuevo juego",false);
          }
            console.log(this.nuevoJuego.gano);
          this.intentos = 0;
         
        }
        
        
        
   }

   MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }

  ngOnInit() {
  }

}
