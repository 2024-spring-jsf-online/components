import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtunaAdditionComponent } from './mtuna-addition.component';

describe('MtunaAdditionComponent', () => {
  let component: MtunaAdditionComponent;
  let fixture: ComponentFixture<MtunaAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtunaAdditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtunaAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
