import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  @Input() materia: string;

  constructor() { }

  ngOnInit() {
   
  }
  
  alert(){
    alert("Se realiza el alta de " + this.materia);
  }

}
