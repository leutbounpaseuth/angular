import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMgrComponent } from './contact-mgr.component';

describe('ContactMgrComponent', () => {
  let component: ContactMgrComponent;
  let fixture: ComponentFixture<ContactMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
