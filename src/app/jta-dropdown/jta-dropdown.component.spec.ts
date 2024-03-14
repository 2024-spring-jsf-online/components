import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JtaDropdownComponent } from './jta-dropdown.component';

describe('JtaDropdownComponent', () => {
  let component: JtaDropdownComponent;
  let fixture: ComponentFixture<JtaDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JtaDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JtaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
