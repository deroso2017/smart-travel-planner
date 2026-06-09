import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripsListComponent } from './trips-list.component';
import { Apollo } from 'apollo-angular';

describe('TripsListComponent', () => {
  let component: TripsListComponent;
  let fixture: ComponentFixture<TripsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsListComponent],
      providers: [{ provide: Apollo, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(TripsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
