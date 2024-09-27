import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuartaPaginaPage } from './cuarta-pagina.page';

describe('CuartaPaginaPage', () => {
  let component: CuartaPaginaPage;
  let fixture: ComponentFixture<CuartaPaginaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartaPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
