import { Component, Input, OnInit } from '@angular/core';
import { IEpic } from '../../api-rest/services/interfaces/epicInterface';
import { IProject } from '../../api-rest/services/interfaces/projectInterface';
import { IStory } from '../../api-rest/services/interfaces/storyInterface';

@Component({
	selector: 'app-info-card',
	templateUrl: './info-card.component.html',
	styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

	item = {
		name: '',
		description: ''
	};
	@Input() project?: IProject;
	@Input() epic?: IEpic;
	@Input() story?: IStory;

	constructor() { }

	ngOnInit(): void {
		if (this.project) {
			this.item.name = this.project.name
			this.item.description = this.project.description
		}
		if (this.epic) {
			this.item.name = this.epic.name
			this.item.description = this.epic.description
		}
		if (this.story) {
			this.item.name = this.story.name
			this.item.description = this.story.description
		}
	}

	setMembers(): string {
		if (this.project && this.project.members.length > 0) {
			return `Members:  ${this.project.members}`
		}
		if (this.project && this.project.members.length === 0) {
			return `Members:  no members assign to this project`;
		}
		return '';
	}

	setColor(): any {
		if (this.project) {
			return { 'background-color': this.project.icon }
		}
	}

	setOwner(): string {
		if (this.story && this.story.owner) {
			return `Owner: ${this.story.owner}`
		}
	}

	setAssignedTo(): string {
		if (this.story && this.story.assignedTo) {
			return `AssignedTo: ${this.story.assignedTo}`
		}
	}

	setPoints(): string {
		if (this.story && this.story.points) {
			return `Points: ${this.story.points}`
		}
	}

	setCreated(): string {
		if (this.story && this.story.created) {
			return `Created: ${this.story.created}`
		}
	}

	setDue(): string {
		if (this.story && this.story.due) {
			return `Due: ${this.story.due}`
		}
	}

	setStarted(): string {
		if (this.story && this.story.started) {
			return `Started: ${this.story.started}`
		}
	}

	setFinished(): string {
		if (this.story && this.story.finished) {
			return `Finished: ${this.story.finished}`
		}
	}

	setStatus(): string {
		if (this.story && this.story.status) {
			return `Status: ${this.story.status}`
		}
	}

}
