import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SplashAnimadoPage } from './splash-animado.page';

const routes: Routes = [
  {
    path: '',
    component: SplashAnimadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SplashAnimadoPage]
})
export class SplashAnimadoPageModule {}
