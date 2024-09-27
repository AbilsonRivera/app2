import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartaPaginaPageRoutingModule } from './cuarta-pagina-routing.module';

import { CuartaPaginaPage } from './cuarta-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuartaPaginaPageRoutingModule
  ],
  declarations: [CuartaPaginaPage]
})
export class CuartaPaginaPageModule {}
