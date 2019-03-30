import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaymonComponent } from './saymon.component';

describe('SaymonComponent', () => {
  let component: SaymonComponent;
  let fixture: ComponentFixture<SaymonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaymonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaymonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
