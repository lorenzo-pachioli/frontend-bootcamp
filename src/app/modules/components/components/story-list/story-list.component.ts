import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { IUrl } from 'src/app/modules/core/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
	selector: 'app-story-list',
	templateUrl: './story-list.component.html',
	styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit, OnDestroy {

	stories = [];
	loading = true;
	url: IUrl = {
		path: ''
	};
	navigationSubscription: Subscription;
	storySubscription: Subscription;

	constructor(
		private navigation: NavigationService,
		public storiesList: StoriesService,
	) {
		this.navigationSubscription = this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
		});
		this.storySubscription = this.storiesList.storiesList$.subscribe(data => {
			if (data.length > 0) {
				this.stories = data;
			} else {
				this.loading = false;
			}
		})
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this.navigationSubscription.unsubscribe();
		this.storySubscription.unsubscribe();
	}

	setRoute(id: number): string {
		return `/my-stories/${id}`;
	}
}
