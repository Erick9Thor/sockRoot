import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSocketComponent } from './check-socket.component';

describe('CheckSocketComponent', () => {
  let component: CheckSocketComponent;
  let fixture: ComponentFixture<CheckSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
