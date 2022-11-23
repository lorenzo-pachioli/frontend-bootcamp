import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';

@Component({
	selector: 'app-story-delete-confirmation',
	templateUrl: './story-delete-confirmation.component.html',
	styleUrls: ['./story-delete-confirmation.component.scss']
})
export class StoryDeleteConfirmationComponent implements OnInit {

	deleting = false;
	fail = false;

	constructor(
		private storyService: StoriesService,
		@Inject(MAT_DIALOG_DATA) private data: any,
		private dialogRef: MatDialogRef<StoryDeleteConfirmationComponent>
	) { }

	ngOnInit(): void {
	}

	deleteStory(): void {
		this.deleting = true;
		const token = sessionStorage.getItem('token');
		this.storyService.deleteStory(token, this.data.id)
			.then(response => {
				if (response) {
					this.deleting = false;
					this.dialogRef.close();
				} else {
					this.fail = true;
				}
			})
	}
}
