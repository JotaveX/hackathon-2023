import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropriedadeComponent } from './list-propriedade.component';

describe('ListPropriedadeComponent', () => {
  let component: ListPropriedadeComponent;
  let fixture: ComponentFixture<ListPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPropriedadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
