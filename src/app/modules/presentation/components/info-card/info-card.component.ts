import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IProject } from 'src/app/modules/core/interfaces/projectInterface';
import { IEpic } from 'src/app/modules/core/interfaces/epicInterface';
import { IStory } from 'src/app/modules/core/interfaces/storyInterface';


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
	loading = true;
	@Input() project?: IProject;
	@Input() epic?: IEpic;
	@Input() story?: IStory;

	constructor(public datepipe: DatePipe) { }

	ngOnInit(): void {
		this.setItemValue(this.project);
		this.setItemValue(this.epic);
		this.setItemValue(this.story);
	}

	setItemValue(input: IProject | IEpic | IStory): void {
		if (input) {
			this.item.name = input.name
			this.item.description = input.description
		}
	}

	setMembers(): Array<string> {
		if (this.project && this.project.members.length > 0) {
			return this.project.members;
		}
		this.loading = false;
		return [];
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
