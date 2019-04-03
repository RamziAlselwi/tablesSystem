import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRequestComponent } from './local-request.component';

describe('LocalRequestComponent', () => {
  let component: LocalRequestComponent;
  let fixture: ComponentFixture<LocalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
