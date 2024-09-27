import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintaPaginaPageRoutingModule } from './quinta-pagina-routing.module';

import { QuintaPaginaPage } from './quinta-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintaPaginaPageRoutingModule
  ],
  declarations: [QuintaPaginaPage]
})
export class QuintaPaginaPageModule {}
