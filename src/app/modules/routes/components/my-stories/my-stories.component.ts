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
	constructor(public storiesList: StoriesService) { }

	ngOnInit(): void {
		const token = sessionStorage.getItem('token');
		this.storiesList.fetchStories(token).subscribe(storyResponse => {
			if (storyResponse.success) {
				this.storiesList.storiesList$.next(storyResponse.data);
			}
		});
		this.storiesList.storiesList$.subscribe(data => {
			if (data) {
				this.stories = data;
			} else {
				this.loading = false;
			}
		})
	}

	OnDestroy(): void {
		this.storiesList.storiesList$.unsubscribe();
	}
}
