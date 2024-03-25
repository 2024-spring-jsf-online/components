import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbrummelAdditionComponent } from './pbrummel-addition.component';

describe('PbrummelAdditionComponent', () => {
  let component: PbrummelAdditionComponent;
  let fixture: ComponentFixture<PbrummelAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PbrummelAdditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PbrummelAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
