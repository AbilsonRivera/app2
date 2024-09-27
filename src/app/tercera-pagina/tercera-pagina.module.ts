import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceraPaginaPageRoutingModule } from './tercera-pagina-routing.module';

import { TerceraPaginaPage } from './tercera-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceraPaginaPageRoutingModule
  ],
  declarations: [TerceraPaginaPage]
})
export class TerceraPaginaPageModule {}
