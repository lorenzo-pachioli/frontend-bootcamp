import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { IProject, IProjectNum } from 'src/app/modules/core/interfaces/projectInterface';
import { IEpic, IEpicNum } from 'src/app/modules/core/interfaces/epicInterface';
import { IStory } from 'src/app/modules/core/interfaces/storyInterface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	projectNumbers: Array<IProjectNum> = [];
	projectList: Array<IProject> = [];
	epicList: Array<IEpic> = [];
	storyList: Array<IStory> = [];
	constructor(
		public projectService: ProjectService,
		public epicService: EpicService,
		public storyService: StoriesService
	) { }

	ngOnInit(): void {
		this.projectService.projectsMock$.subscribe(data => {
			if (data) {
				this.projectList = data;
				this.epicList = this.epicService.getEpics();
				this.storyList = this.storyService.getStories();
				if (this.projectList.length > 0 && this.epicList.length > 0) {
					this.setProjectsNumbers();
				}
			}
		});
	}

	setProjectsNumbers(): void {
		const epicsNumbers: Array<IEpicNum> = [];
		this.epicList.forEach(epic => {
			let total = 0;
			let completed = 0;
			this.storyList.forEach(story => {
				if (story.epic === epic.id.toString()) {
					total += 1;
					if (story.status === 'done') {
						completed += 1
					}
				}
			});
			epicsNumbers.push({
				project: epic.project,
				total,
				completed
			});
		});
		this.projectList.forEach(project => {
			let total = 0;
			let completed = 0;
			epicsNumbers.forEach(epic => {
				if (epic.project === project.id.toString()) {
					total = total + epic.total;
					completed = completed + epic.completed;
				}
			});
			this.projectNumbers.push({
				name: project.name,
				total,
				completed
			});
		});
	}
}
