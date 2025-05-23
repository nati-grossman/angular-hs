import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDemoComponent } from './popup-demo.component';

describe('PopupDemoComponent', () => {
  let component: PopupDemoComponent;
  let fixture: ComponentFixture<PopupDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
