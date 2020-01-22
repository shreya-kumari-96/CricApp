import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStasticsComponent } from './player-stastics.component';

describe('PlayerStasticsComponent', () => {
  let component: PlayerStasticsComponent;
  let fixture: ComponentFixture<PlayerStasticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStasticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStasticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
