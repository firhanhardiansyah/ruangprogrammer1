import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrasiPage } from './registrasi.page';

describe('RegistrasiPage', () => {
  let component: RegistrasiPage;
  let fixture: ComponentFixture<RegistrasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
