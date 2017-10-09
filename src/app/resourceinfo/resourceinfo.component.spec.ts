import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceinfoComponent } from './resourceinfo.component';

describe('ResourceinfoComponent', () => {
  let component: ResourceinfoComponent;
  let fixture: ComponentFixture<ResourceinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
