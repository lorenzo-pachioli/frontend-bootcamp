import { Component, OnInit } from '@angular/core';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { IUrl } from 'src/app/modules/api-rest/services/interfaces/urlInterface';
import { NavigationService } from 'src/app/modules/api-rest/services/navigation/navigation.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { TasksService } from 'src/app/modules/api-rest/services/tasks/tasks.service';

@Component({
	selector: 'app-story',
	templateUrl: './story.component.html',
	styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

	item;
	list = [];
	url: IUrl = {
		path: '',
		project: false,
		epic: false,
		story: false
	};
	loading = true;
	constructor(
		private navigation: NavigationService,
		public projectList: ProjectService,
		public epicList: EpicService,
		public storyList: StoriesService,
		public taskList: TasksService
	) {
		this.navigation.url.subscribe(sub => {
			this.url.path = sub.path
			this.url.project = sub.project
			this.url.epic = sub.epic
			this.url.story = sub.story
		});
	}

	ngOnInit(): void {
		if (this.url.story) {
			this.item = this.url.story;
			const task = this.taskList.getTasksByStoryId(this.url.story.id);
			console.log(task);
			if (task.length > 0) {
				this.list = task;
			} else {
				this.loading = false;
			}
		}
	}

}
