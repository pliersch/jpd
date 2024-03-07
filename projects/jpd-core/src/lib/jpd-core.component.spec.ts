import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpdCoreComponent } from './jpd-core.component';

describe('JpdCoreComponent', () => {
  let component: JpdCoreComponent;
  let fixture: ComponentFixture<JpdCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JpdCoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JpdCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
