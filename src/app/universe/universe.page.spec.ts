import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UniversePage } from './universe.page';

describe('UniversePage', () => {
  let component: UniversePage;
  let fixture: ComponentFixture<UniversePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(UniversePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
