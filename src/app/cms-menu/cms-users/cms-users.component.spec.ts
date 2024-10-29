import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsUsersComponent } from './cms-users.component';

describe('CmsUsersComponent', () => {
  let component: CmsUsersComponent;
  let fixture: ComponentFixture<CmsUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmsUsersComponent]
    });
    fixture = TestBed.createComponent(CmsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
