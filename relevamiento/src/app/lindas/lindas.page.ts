import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { storage } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lindas',
  templateUrl: './lindas.page.html',
  styleUrls: ['./lindas.page.scss'],
})
export class LindasPage implements OnInit {

  foto: any;
  constructor(private router: Router, private camera: Camera, private db: AngularFirestore, private storage: AngularFireStorage) { 
    
  }

  ngOnInit() {
  }

  hacerFoto() {
    const options: CameraOptions = {
      quality: 50,
      targetHeight:600,
      targetWidth: 600,
      encodingType: this.camera.EncodingType.JPEG,
      destinationType: this.camera.DestinationType.DATA_URL,
      correctOrientation: true
    }

    const nombre = Date.now();
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
      const pictures = this.storage.ref('lindas/' + nombre);
      pictures.putString(this.foto, 'data_url');

      this.db.collection("cosaslindas").doc(nombre.toString()).set({

        nombre: nombre.toString()
  
      })
      .then(function(docRef) {
        console.log("Se guarda la materia en base ");
        
    })
    .catch(function(error) {
        console.error("Error al escribir la materia", error);
    });
      
    }, (err) => {
      console.log(err);
    });

    

    
  }




  

}
