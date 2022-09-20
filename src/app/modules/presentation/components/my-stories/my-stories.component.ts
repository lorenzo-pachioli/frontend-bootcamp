import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';

@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.css']
})
export class MyStoriesComponent implements OnInit {

  stories = [];
  constructor(public storiesList:StoriesService) { }

  ngOnInit(): void {
    this.stories = this.storiesList.getStories()
  }
}
