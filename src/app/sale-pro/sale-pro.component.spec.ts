import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleProComponent } from './sale-pro.component';

describe('SaleProComponent', () => {
  let component: SaleProComponent;
  let fixture: ComponentFixture<SaleProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
