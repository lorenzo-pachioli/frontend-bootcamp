import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryInfoCardComponent } from './story-info-card.component';

describe('StoryInfoCardComponent', () => {
  let component: StoryInfoCardComponent;
  let fixture: ComponentFixture<StoryInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryInfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
