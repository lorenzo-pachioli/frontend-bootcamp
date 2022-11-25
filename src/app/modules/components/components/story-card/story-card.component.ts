import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { IStory } from 'src/app/modules/core/interfaces/storyInterface';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ConfirmationDialogComponent } from 'src/app/modules/presentation/components/confirmation-dialog/confirmation-dialog.component';

@Component({
	selector: 'app-story-card',
	templateUrl: './story-card.component.html',
	styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {

	@Input() story?: IStory;
	@Input() route: any;

	constructor(
		public storyList: StoriesService,
		public datepipe: DatePipe,
		public dialog: MatDialog,
		private router: Router
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

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		this.dialog.open(ConfirmationDialogComponent, {
			width: '250px',
			enterAnimationDuration,
			exitAnimationDuration,
			data: {
				id: this.story.id,
				item: 'STORY'
			}
		});
	}
}
