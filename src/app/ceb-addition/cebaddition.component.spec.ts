import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CebAdditionComponent } from './cebladdition.component';

describe('CebAdditionComponent', () => {
  let component: CebAdditionComponent;
  let fixture: ComponentFixture<CebAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CebAdditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CebAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
