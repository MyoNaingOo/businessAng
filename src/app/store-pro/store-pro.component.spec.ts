import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProComponent } from './store-pro.component';

describe('StoreProComponent', () => {
  let component: StoreProComponent;
  let fixture: ComponentFixture<StoreProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
