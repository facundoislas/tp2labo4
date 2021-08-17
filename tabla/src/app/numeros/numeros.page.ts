import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {
  idioma: string;
  

  constructor(private native : NativeAudio, private platform: Platform ) {
   
    
   }

   ionViewWillUnload(){
    
    
    
  }


  ngOnInit() {

    
    this.native.preloadSimple('uniqueId31', 'assets/sounds/español/uno.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId32', 'assets/sounds/ingles/one.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId33', 'assets/sounds/portugues/um.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId34', 'assets/sounds/español/dos.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId35', 'assets/sounds/ingles/two.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId36', 'assets/sounds/portugues/dois.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId37', 'assets/sounds/español/tres.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId38', 'assets/sounds/ingles/three.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId39', 'assets/sounds/portugues/tres2.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId40', 'assets/sounds/español/cuatro.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId41', 'assets/sounds/ingles/four.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId42', 'assets/sounds/portugues/quatro.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId43', 'assets/sounds/español/cinco.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId44', 'assets/sounds/ingles/five.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId45', 'assets/sounds/portugues/cinco2.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    
  }
  
  eleccionIdioma(eleccion : string)
  {
    

    switch (eleccion) {
      case "ingles":
          this.idioma = "ingles";
        break;
      case "español":
        this.idioma = "español";
        break;
      case "portugues":
        this.idioma = "portugues";
        break; 
    }

  }
  
  reproducirSonido(animal: string)
  {
    switch (animal) {
      case "uno":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId32').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId31').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId33').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;

        case "dos":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId35').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId34').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId36').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;

        case "tres":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId38').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId37').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId39').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;
    
        case "cuatro":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId41').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId40').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId42').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;

        case "cinco":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId44').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId43').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId45').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;
      default:
        break;
    }
  }

}
