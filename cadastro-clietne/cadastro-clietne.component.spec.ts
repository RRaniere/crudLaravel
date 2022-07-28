import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClietneComponent } from './cadastro-clietne.component';

describe('CadastroClietneComponent', () => {
  let component: CadastroClietneComponent;
  let fixture: ComponentFixture<CadastroClietneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroClietneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroClietneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
