import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDeleteConfirmationComponent } from './story-delete-confirmation.component';

describe('StoryDeleteConfirmationComponent', () => {
  let component: StoryDeleteConfirmationComponent;
  let fixture: ComponentFixture<StoryDeleteConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryDeleteConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
