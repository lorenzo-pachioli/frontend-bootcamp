import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';
import { IUser } from 'src/app/modules/core/interfaces/userInterface';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
	selector: 'app-add-project-dialog',
	templateUrl: './add-project-dialog.component.html',
	styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent implements OnInit {

	loading = false;
	today = new Date();
	minDate = this.today.getDay();
	maxDate = new Date(this.today.getFullYear() + 1);
	toppingList: IUser[] = this.user.usersList;
	name = new FormControl('', Validators.minLength(2));
	description = new FormControl('', Validators.minLength(10));
	members = new FormControl([], Validators.required);
	newProject = new FormGroup({
		name: this.name,
		description: this.description,
		members: this.members
	});

	constructor(
		public dialogRef: MatDialogRef<AddProjectDialogComponent>,
		public route: NavigationService,
		public user: UserService,
		public projectList: ProjectService
	) { }

	ngOnInit(): void {
	}

	onClose(): void {
		this.dialogRef.close();
	}

	addProject(): void {
		this.loading = true;
		const token = sessionStorage.getItem('token');
		const url = this.route.getUrl();
		const user = this.user.user;
		const story = {
			name: this.newProject.value.name,
			description: this.newProject.value.description,
			epic: url._value.epic && url._value.epic._id,
			owner: user._id,
			members: this.newProject.value.members.map(u => u._id)
		};
		this.projectList.addProject(token, story).subscribe({
			next: (projectResult) => {
				this.loading = false;
				this.dialogRef.close();
				const current = this.projectList.projectsList;
				current.push(projectResult.data);
				this.projectList.projectsList$.next(current);
			},
			error: () => this.loading = false
		});
	}
}
