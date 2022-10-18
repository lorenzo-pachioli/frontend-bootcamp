import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { IStory } from 'src/app/modules/core/interfaces/storyInterface';

@Component({
	selector: 'app-story-card',
	templateUrl: './story-card.component.html',
	styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {

	@Input() story?: IStory;
	constructor(
		public storyList: StoriesService,
		public datepipe: DatePipe,
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
	}

	setCreated(): string {
		let date;
		if (this.story) {
			date = this.datepipe.transform(this.story.created, 'dd/MM/yyyy');
			if (date) {
				return `${date}`;
			}
			return '';
		}
	}

	setStatus(): string {
		return `${this.story.status}`
	}

}
