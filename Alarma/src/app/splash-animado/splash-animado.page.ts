import { Component, OnInit } from '@angular/core';
import{timer} from 'rxjs';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-splash-animado',
  templateUrl: './splash-animado.page.html',
  styleUrls: ['./splash-animado.page.scss'],
})
export class SplashAnimadoPage implements OnInit {

  showsplash :boolean = true;
  constructor(private router : Router) { 

    timer(5000).subscribe(()=>
      {
        this.showsplash = false;
        this.router.navigate(['/login']);
      });
  }

  ngOnInit() {
  }

}
