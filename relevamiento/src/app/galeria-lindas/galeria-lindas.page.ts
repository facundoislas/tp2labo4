import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-galeria-lindas',
  templateUrl: './galeria-lindas.page.html',
  styleUrls: ['./galeria-lindas.page.scss'],
})
export class GaleriaLindasPage implements OnInit {


  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  ListadoDeMascotas:Observable<any[]>;
  lista: Array<any> = [];
  lista2: Array<any> = [];
  tipo: string;
  mostrar:boolean = false;
  imageResources;
  rutasLindas;

  constructor(private db: AngularFirestore) {

    this.coleccionTipadaFirebase= this.db.collection<any>('cosaslidas'); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeMascotas.subscribe(x => {
        this.lista = x
        
    })
    this.imageResources = '1588539372889';
    console.log(this.getPhotoUrl());
  
   }

  getPhotoUrl()
  {
     firebase.storage().ref().child('lindas/' + this.imageResources).getDownloadURL().then((url)=>{
      
      this.rutasLindas = url;
    })
    return this.rutasLindas;
  }

  

  ngOnInit() {
  }

}
