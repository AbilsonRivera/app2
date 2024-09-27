import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartaPaginaPage } from './cuarta-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: CuartaPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuartaPaginaPageRoutingModule {}
