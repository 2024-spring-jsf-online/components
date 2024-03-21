import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChsAdditionComponent } from './chs-addition.component';

describe('ChsAdditionComponent', () => {
  let component: ChsAdditionComponent;
  let fixture: ComponentFixture<ChsAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChsAdditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChsAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
