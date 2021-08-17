import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './splash-animado/splash-animado.module#SplashAnimadoPageModule' },
  { path: 'lindas', loadChildren: './lindas/lindas.module#LindasPageModule' },
  { path: 'feas', loadChildren: './feas/feas.module#FeasPageModule' },
  { path: 'galeria-lindas', loadChildren: './galeria-lindas/galeria-lindas.module#GaleriaLindasPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
