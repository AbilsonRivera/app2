import { Component, OnInit, ViewChild } from '@angular/core';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tercera-pagina',
  templateUrl: './tercera-pagina.page.html',
  styleUrls: ['./tercera-pagina.page.scss'],
})
export class TerceraPaginaPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal; // Operador de aserción no nula
  isOpen = false; // Controla la visibilidad del modal

  constructor() {
    // Agregar íconos aquí
    addIcons({
      library: library,
      playCircle: playCircle,
      radio: radio,
      search: search
    });
  }

  ngOnInit() {
    // Cualquier inicialización adicional que necesites
  }

  openModal() {
    this.isOpen = true; // Abre el modal
  }

  closeModal() {
    this.isOpen = false; // Cierra el modal
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // Manejar el evento de cierre si es necesario
  }
}
