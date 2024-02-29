import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajNumberComponent } from './caj-number.component';

describe('CajNumberComponent', () => {
  let component: CajNumberComponent;
  let fixture: ComponentFixture<CajNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CajNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CajNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
