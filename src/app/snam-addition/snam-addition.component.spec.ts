import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnamAdditionComponent } from './snam-addition.component';

describe('SnamAdditionComponent', () => {
  let component: SnamAdditionComponent;
  let fixture: ComponentFixture<SnamAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnamAdditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnamAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
