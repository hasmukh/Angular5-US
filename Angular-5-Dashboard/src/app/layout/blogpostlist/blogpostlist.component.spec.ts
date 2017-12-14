import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostlistComponent } from './blogpostlist.component';

describe('BlogpostlistComponent', () => {
  let component: BlogpostlistComponent;
  let fixture: ComponentFixture<BlogpostlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
