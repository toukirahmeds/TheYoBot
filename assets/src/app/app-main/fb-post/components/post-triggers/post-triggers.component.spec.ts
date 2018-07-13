import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTriggersComponent } from './post-triggers.component';

describe('PostTriggersComponent', () => {
  let component: PostTriggersComponent;
  let fixture: ComponentFixture<PostTriggersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTriggersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
