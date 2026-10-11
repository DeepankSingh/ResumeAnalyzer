import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseumePreviewPageComponent } from './reseume-preview-page.component';

describe('ReseumePreviewPageComponent', () => {
  let component: ReseumePreviewPageComponent;
  let fixture: ComponentFixture<ReseumePreviewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReseumePreviewPageComponent]
    });
    fixture = TestBed.createComponent(ReseumePreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
