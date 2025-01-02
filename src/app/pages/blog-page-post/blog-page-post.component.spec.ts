import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPagePostComponent } from './blog-page-post.component';

describe('BlogPagePostComponent', () => {
  let component: BlogPagePostComponent;
  let fixture: ComponentFixture<BlogPagePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPagePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogPagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
