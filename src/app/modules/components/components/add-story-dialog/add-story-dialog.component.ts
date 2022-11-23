import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StoriesService } from 'src/app/modules/api-rest/services/stories/stories.service';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';
import { IProject } from 'src/app/modules/core/interfaces/projectInterface';
import { IUser } from 'src/app/modules/core/interfaces/userInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
	selector: 'app-add-story-dialog',
	templateUrl: './add-story-dialog.component.html',
	styleUrls: ['./add-story-dialog.component.scss']
})
export class AddStoryDialogComponent implements OnInit {

	loading = false;
	today = new Date();
	minDate = this.today.getDay();
	maxDate = new Date(this.today.getFullYear() + 1);
	currentProject: IProject;
	toppingList: IUser[];
	name = new FormControl('', Validators.minLength(2));
	description = new FormControl('', Validators.minLength(10));
	assignedTo = new FormControl([], Validators.required);
	newStory = new FormGroup({
		name: this.name,
		description: this.description,
		assignedTo: this.assignedTo
	});

	constructor(
		public dialogRef: MatDialogRef<AddStoryDialogComponent>,
		public route: NavigationService,
		public user: UserService,
		public storyList: StoriesService
	) {
		const url = this.route.getUrl();
		this.currentProject = url._value.project;
		this.toppingList = this.user.usersList.filter(u => this.currentProject.members.some(id => id === u._id));
	}

	ngOnInit(): void {
	}

	onClose(): void {
		this.dialogRef.close();
	}

	addtask(): void {
		this.loading = true;
		const token = sessionStorage.getItem('token');
		const url = this.route.getUrl();
		const user = this.user.user;
		const story = {
			name: this.newStory.value.name,
			description: this.newStory.value.description,
			epic: url._value.epic && url._value.epic._id,
			owner: user._id,
			assignedTo: this.newStory.value.assignedTo.map(u => u._id)
		};
		this.storyList.addStory(token, story).subscribe(storyResult => {
			if (storyResult.success) {
				this.loading = false;
				this.dialogRef.close();
				const current = this.storyList.storiesList;
				current.push(storyResult.data);
				this.storyList.storiesList$.next(current);
			}
		});
	}
}
