import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPragaComponent } from './adicionar-praga.component';

describe('AdicionarPragaComponent', () => {
  let component: AdicionarPragaComponent;
  let fixture: ComponentFixture<AdicionarPragaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarPragaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarPragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
