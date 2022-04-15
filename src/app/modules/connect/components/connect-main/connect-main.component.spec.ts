import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectMainComponent } from './connect-main.component';

describe('ConnectMainComponent', () => {
  let component: ConnectMainComponent;
  let fixture: ComponentFixture<ConnectMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
