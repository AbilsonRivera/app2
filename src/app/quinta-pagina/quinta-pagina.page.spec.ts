import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuintaPaginaPage } from './quinta-pagina.page';

describe('QuintaPaginaPage', () => {
  let component: QuintaPaginaPage;
  let fixture: ComponentFixture<QuintaPaginaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintaPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
