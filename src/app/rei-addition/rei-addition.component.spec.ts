import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiAdditionComponent } from './rei-addition.component';

describe('ReiAdditionComponent', () => {
  let component: ReiAdditionComponent;
  let fixture: ComponentFixture<ReiAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReiAdditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReiAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
