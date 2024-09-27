import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerceraPaginaPage } from './tercera-pagina.page';

describe('TerceraPaginaPage', () => {
  let component: TerceraPaginaPage;
  let fixture: ComponentFixture<TerceraPaginaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
