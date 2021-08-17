import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Animal} from '../../clases/animal';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import {Materia} from '../../clases/materia';
import {Usuario} from '../../clases/usuario';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-alta-mascota-admin',
  templateUrl: './alta-mascota-admin.component.html',
  styleUrls: ['./alta-mascota-admin.component.css']
})
export class AltaMascotaAdminComponent implements OnInit {

  @Output() alta: EventEmitter<{}>
  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  ListadoDeMascotas:Observable<any[]>;
  lista: Array<any> = [];
  lista3: Array<any> = [];
  unAnimal: Animal;
  unaMateria: Materia;
  unaMateria2: Materia;
  lista2: Array<any> = [];
  unAnimal2: Animal;
  modifica:boolean = false;
  id: string;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private builder: FormBuilder) {
    
    this.listar3();
    this.unAnimal = new Animal ();
    this.unaMateria = new Materia();
    this.alta = new EventEmitter();
    this.listar();
   }


   nombre = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(4)]);

    raza = new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4)]);
      
    

        edad = new FormControl('', [
          Validators.required,
          Validators.maxLength(2),
          Validators.minLength(1)]);

        

        registroForm: FormGroup = this.builder.group({
          nombre: this.nombre,
         
          raza: this.raza,
          edad: this.edad
      
        })

    
      listarTipo(tipo: string){
        
       this.coleccionTipadaFirebase= this.db.collection<any>('empleados', ref => ref.where("tipo", "==", tipo)); 
        //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
        this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
        this.ListadoDeMascotas.subscribe(x => {
            this.lista2 = x
             
        });

        
    }


   listar()
   {
     console.log("Esta es la lista de usuarios", this.listarTipo("profesor"))
    this.coleccionTipadaFirebase= this.db.collection<any>('materiaAdmin'); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeMascotas.subscribe(x => {
        this.lista = x
        
    })
   }

   listar3()
   {
     console.log("Esta es la lista de usuarios", this.listarTipo("profesor"))
    this.coleccionTipadaFirebase= this.db.collection<any>('usuarios', ref => ref.where("tipo", "==", "profesor")); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeMascotas.subscribe(x => {
        this.lista3 = x
        
    })
   }

  ngOnInit() {
  }

  /*onUpload(e)
  {
    this.id = this.unaMateria.nombre+"-"+this.unaMateria.profesor
    //console.log(this.id);
    //console.log("subir ", e.target.files[0]);
    let file = e.target.files[0];
    let filePath = 'image/'+this.id+'.jpg';
    let ref = this.storage.ref(filePath);
    let task = this.storage.upload(filePath, file);
    
  }*/


  

  subir()
  {
    console.log(this.unaMateria);
    this.id = this.unaMateria.nombre+"-"+this.unaMateria.profesor;
    const ref = this.storage.ref('image/'+this.id+'.jpg');
    
  
   
    this.db.collection("materiaAdmin").doc(this.id).set({

      nombre: this.unaMateria.nombre,
      cuatrimestre: this.unaMateria.cuatrimestre,
      cupos: this.unaMateria.cupos,
      profesor: this.unaMateria.profesor

    })
    .then(function(docRef) {
      console.log("Se guarda la materia en base ");
      
  })
  .catch(function(error) {
      console.error("Error al escribir la materia", error);
  });
  this.alta.emit();
  
  
}

  


  llenarInputs(mascota)
  {
    
    this.unaMateria2 = mascota;
    //(<HTMLInputElement> adelante para castearlo
    (<HTMLInputElement>document.getElementById('nombre')).value = mascota.nombre;
    (<HTMLInputElement>document.getElementById('tipo')).value = mascota.tipo;
    (<HTMLInputElement>document.getElementById('raza')).value = mascota.raza;
    (<HTMLInputElement>document.getElementById('edad')).value = mascota.edad;
    (<HTMLInputElement>document.getElementById('id')).value = mascota.id;
    this.modifica=true;
    
  }

  llenarAnimal()
  {
    this.unaMateria.nombre = (<HTMLInputElement>document.getElementById('nombre')).value ;
    this.unaMateria.cuatrimestre =  (<HTMLInputElement>document.getElementById('raza')).value ;
    this.unaMateria.cupos = (<HTMLInputElement>document.getElementById('edad')).value ;
    this.unaMateria.profesor = (<HTMLInputElement>document.getElementById('dueno')).value ;
    this.unaMateria.id = (<HTMLInputElement>document.getElementById('id')).value ;
  }



  modificar()
  {
    
    
    this.llenarAnimal();
    console.log("una materia: ", this.unaMateria);
    let washingtonRef = this.db.collection("materiaAdmin").doc(this.unaMateria2.id)

// Set the "capital" field of the city 'DC'
return washingtonRef.set({
  nombre: this.unaMateria.nombre,
      cuatrimestre: this.unaMateria.cuatrimestre,
      cupos: this.unaMateria.cupos,
      profesor: this.unaMateria.profesor
},
   { merge: true }
)
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
  }
}
