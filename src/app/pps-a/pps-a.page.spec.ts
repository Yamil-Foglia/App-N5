import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpsAPage } from './pps-a.page';

describe('PpsAPage', () => {
  let component: PpsAPage;
  let fixture: ComponentFixture<PpsAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpsAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpsAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
