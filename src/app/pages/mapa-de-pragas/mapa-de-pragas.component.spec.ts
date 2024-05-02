import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDePragasComponent } from './mapa-de-pragas.component';

describe('MapaDePragasComponent', () => {
  let component: MapaDePragasComponent;
  let fixture: ComponentFixture<MapaDePragasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaDePragasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaDePragasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
