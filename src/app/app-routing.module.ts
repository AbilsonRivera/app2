import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'primera-pagina',
    loadChildren: () => import('./primera-pagina/primera-pagina.module').then( m => m.PrimeraPaginaPageModule)
  },
  {
    path: 'segunda-pagina',
    loadChildren: () => import('./segunda-pagina/segunda-pagina.module').then( m => m.SegundaPaginaPageModule)
  },
  {
    path: 'tercera-pagina',
    loadChildren: () => import('./tercera-pagina/tercera-pagina.module').then( m => m.TerceraPaginaPageModule)
  },
  {
    path: 'cuarta-pagina',
    loadChildren: () => import('./cuarta-pagina/cuarta-pagina.module').then( m => m.CuartaPaginaPageModule)
  },
  {
    path: 'quinta-pagina',
    loadChildren: () => import('./quinta-pagina/quinta-pagina.module').then( m => m.QuintaPaginaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
