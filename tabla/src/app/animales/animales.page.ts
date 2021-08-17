import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit { 

  idioma: string;
  

  constructor(private native : NativeAudio, private platform: Platform ) {
   
    platform.ready().then(() => {
    
  });
   }

  


  ngOnInit() {
    this.native.preloadComplex('uniqueId1', 'assets/sounds/español/perro.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId2', 'assets/sounds/ingles/dog.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId3', 'assets/sounds/portugues/cachorro.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId4', 'assets/sounds/español/gato.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId5', 'assets/sounds/ingles/cat.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId6', 'assets/sounds/portugues/gato2.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId7', 'assets/sounds/español/leon.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId8', 'assets/sounds/ingles/lion.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId9', 'assets/sounds/portugues/leao.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId10', 'assets/sounds/español/pajaro.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId11', 'assets/sounds/ingles/bird.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId12', 'assets/sounds/portugues/pasaro.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId13', 'assets/sounds/español/mono.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId14', 'assets/sounds/ingles/monkey.mp3', 1, 1, 0).then((success)=>{
      console.log("success");
    },(error)=>{
      console.log(error);
    });
    this.native.preloadComplex('uniqueId15', 'assets/sounds/portugues/macaco.mp3', 1, 1, 0).then((success)=>{
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
      case "perro":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId2').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId1').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId3').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;

        case "gato":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId5').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId4').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId6').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;

        case "leon":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId8').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId7').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId9').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;
    
        case "pajaro":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId11').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId10').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId12').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
            }
            
        
        break;

        case "mono":
            switch(this.idioma)
            {
              case "ingles":
                  this.native.play('uniqueId14').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
              break;
              
              case "español":
                  this.native.play('uniqueId13').then((success)=>{
                    console.log("success playing");
                  },(error)=>{
                    console.log(error);
                  });
                  break;

                  case "portugues":
                  this.native.play('uniqueId15').then((success)=>{
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
