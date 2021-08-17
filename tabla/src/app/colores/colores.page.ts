import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  idioma: string;
  

  constructor(private native : NativeAudio, private platform: Platform ) {
   
  
   }

   


  ngOnInit() {

    this.native.preloadSimple('uniqueId16', 'assets/sounds/español/azul.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId17', 'assets/sounds/ingles/blue.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId18', 'assets/sounds/portugues/azul2.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId19', 'assets/sounds/español/rojo.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId20', 'assets/sounds/ingles/red.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId21', 'assets/sounds/portugues/vermelo.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId22', 'assets/sounds/español/verde.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId23', 'assets/sounds/ingles/green.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId24', 'assets/sounds/portugues/verde2.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId25', 'assets/sounds/ingles/amarillo.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId26', 'assets/sounds/ingles/yellow.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId27', 'assets/sounds/portugues/amarelo.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId28', 'assets/sounds/español/naranja.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId29', 'assets/sounds/ingles/orange.mp3').then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadSimple('uniqueId30', 'assets/sounds/portugues/laranja.mp3').then((success)=>{
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
      case "azul":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId17').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId16').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId18').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;

        case "rojo":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId20').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId19').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId21').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;

        case "verde":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId23').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId22').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId24').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;
    
        case "amarillo":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId26').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId25').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId27').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;

        case "naranja":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId29').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId28').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId30').then((success)=>{
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
