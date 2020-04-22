import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpsBPage } from './pps-b.page';

describe('PpsBPage', () => {
  let component: PpsBPage;
  let fixture: ComponentFixture<PpsBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpsBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpsBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
