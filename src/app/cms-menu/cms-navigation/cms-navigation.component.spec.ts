import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsNavigationComponent } from './cms-navigation.component';

describe('CmsNavigationComponent', () => {
  let component: CmsNavigationComponent;
  let fixture: ComponentFixture<CmsNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmsNavigationComponent]
    });
    fixture = TestBed.createComponent(CmsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
