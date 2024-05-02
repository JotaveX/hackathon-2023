import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdutorComponent } from './list-produtor.component';

describe('ListProdutorComponent', () => {
  let component: ListProdutorComponent;
  let fixture: ComponentFixture<ListProdutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProdutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
