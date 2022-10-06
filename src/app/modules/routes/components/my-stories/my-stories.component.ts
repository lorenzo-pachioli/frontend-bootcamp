import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';

@Component({
	selector: 'app-my-stories',
	templateUrl: './my-stories.component.html',
	styleUrls: ['./my-stories.component.scss']
})
export class MyStoriesComponent implements OnInit {

	stories = [];
	loading = true;
	constructor(public storiesList: StoriesService) {
		this.storiesList.storiesList$.subscribe(data => {
			if (data.length > 0) {
				this.stories = data;
			} else {
				this.loading = false;
			}
		})
	}

	ngOnInit(): void {
	}

	OnDestroy(): void {
		this.storiesList.storiesList$.unsubscribe();
	}
}
