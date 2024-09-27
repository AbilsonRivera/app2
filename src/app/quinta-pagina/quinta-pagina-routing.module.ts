import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintaPaginaPage } from './quinta-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: QuintaPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuintaPaginaPageRoutingModule {}
