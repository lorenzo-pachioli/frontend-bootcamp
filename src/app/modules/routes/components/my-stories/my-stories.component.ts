import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { IUrl } from 'src/app/modules/core/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
	selector: 'app-my-stories',
	templateUrl: './my-stories.component.html',
	styleUrls: ['./my-stories.component.scss']
})
export class MyStoriesComponent implements OnInit {

	stories = [];
	loading = true;
	url: IUrl = {
		path: ''
	};

	constructor(
		private navigation: NavigationService,
		public storiesList: StoriesService,
		private router: Router,
	) {
		this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
		});
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

	setRoute(id: number): string {
		return `/my-projects/${this.url.project && this.url.project.id}/${this.url.epic && this.url.epic.id}/${id}`;
	}
}
