import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: '', loadChildren: './splash-animado/splash-animado.module#SplashAnimadoPageModule' },
  { path: 'animales', loadChildren: './animales/animales.module#AnimalesPageModule' },
  { path: 'barra', loadChildren: './barra/barra.module#BarraPageModule' },
  { path: 'numeros', loadChildren: './numeros/numeros.module#NumerosPageModule' },
  { path: 'colores', loadChildren: './colores/colores.module#ColoresPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
