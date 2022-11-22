import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';
import { IStory } from 'src/app/modules/core/interfaces/storyInterface';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-story-info-card',
	templateUrl: './story-info-card.component.html',
	styleUrls: ['./story-info-card.component.scss']
})
export class StoryInfoCardComponent implements OnInit {

	loading = true;
	@Input() story: IStory;

	constructor(public datepipe: DatePipe, private userService: UserService) { }

	ngOnInit(): void {
	}

	setMemberUsername(id: string): string {
		const user = this.userService.getUserById(id);
		if (user) {
			return `-> ${user.username}`
		}
		return '';
	}

	setOwner(): string {
		if (this.story && this.story.owner) {
			return `${this.setMemberUsername(this.story.owner)}`
		}
	}

	setAssignedTo(): Array<any> {
		if (this.story && this.story.assignedTo.length > 0) {
			return this.story.assignedTo;
		}
		return [];
	}

	setPoints(): string {
		if (this.story && this.story.points >= 0) {
			return `${this.story.points}`
		}
	}

	setCreated(): string {
		if (this.story && this.story.created) {
			const date = this.datepipe.transform(this.story.created, 'dd/MM/yyyy');
			return `${date}`;
		}
	}

	setDue(): string {
		if (this.story && this.story.due) {
			const date = this.datepipe.transform(this.story.due, 'dd/MM/yyyy');
			return `${date}`;
		}
	}

	setStatus(): string {
		if (this.story && this.story.status) {
			return `${this.story.status}`
		}
	}

}
