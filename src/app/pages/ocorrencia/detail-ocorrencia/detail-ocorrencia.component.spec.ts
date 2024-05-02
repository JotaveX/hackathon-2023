import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOcorrenciaComponent } from './detail-ocorrencia.component';

describe('DetailOcorrenciaComponent', () => {
  let component: DetailOcorrenciaComponent;
  let fixture: ComponentFixture<DetailOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
