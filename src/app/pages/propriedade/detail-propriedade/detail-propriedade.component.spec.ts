import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPropriedadeComponent } from './detail-propriedade.component';

describe('DetailPropriedadeComponent', () => {
  let component: DetailPropriedadeComponent;
  let fixture: ComponentFixture<DetailPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPropriedadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
