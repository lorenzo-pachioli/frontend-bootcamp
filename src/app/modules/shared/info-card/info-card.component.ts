import { Component, Input, OnInit } from '@angular/core';
import { IEpic } from '../../api-rest/services/interfaces/epicInterface';
import { IProject } from '../../api-rest/services/interfaces/projectInterface';
import { IStory } from '../../api-rest/services/interfaces/storyInterface';
import { DatePipe } from '@angular/common';

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

	constructor(public datepipe: DatePipe) { }

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
		if (this.story && this.story.assignedTo.length > 0) {
			return `AssignedTo: ${this.story.assignedTo}`
		}
		if (this.story && this.story.assignedTo.length === 0) {
			return `AssignedTo:  no members assign to this task`;
		}
		return '';
	}

	setPoints(): string {
		if (this.story && this.story.points) {
			return `Points: ${this.story.points}`
		}
	}

	setCreated(): string {
		if (this.story && this.story.created) {
			const date = this.datepipe.transform(this.story.created, 'dd/MM/yyyy');
			return `Created: ${date}`;
		}
	}

	setDue(): string {
		if (this.story && this.story.due) {
			const date = this.datepipe.transform(this.story.due, 'dd/MM/yyyy');
			return `Due: ${date}`;
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