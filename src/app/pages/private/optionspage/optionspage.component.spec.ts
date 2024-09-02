import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionspageComponent } from './optionspage.component';

describe('OptionspageComponent', () => {
  let component: OptionspageComponent;
  let fixture: ComponentFixture<OptionspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionspageComponent]
    });
    fixture = TestBed.createComponent(OptionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
