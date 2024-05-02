import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProdutorComponent } from './detail-produtor.component';

describe('DetailProdutorComponent', () => {
  let component: DetailProdutorComponent;
  let fixture: ComponentFixture<DetailProdutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProdutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
