import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceraPaginaPage } from './tercera-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: TerceraPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceraPaginaPageRoutingModule {}
