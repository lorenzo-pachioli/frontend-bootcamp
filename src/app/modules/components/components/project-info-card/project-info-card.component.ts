import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';
import { IProject } from 'src/app/modules/core/interfaces/projectInterface';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-project-info-card',
	templateUrl: './project-info-card.component.html',
	styleUrls: ['./project-info-card.component.scss']
})
export class ProjectInfoCardComponent implements OnInit {

	loading = true;
	@Input() project: IProject;

	constructor(public datepipe: DatePipe, private userService: UserService) { }

	ngOnInit(): void {
	}

	setMembers(): Array<string> {
		if (this.project && this.project.members.length > 0) {
			return this.project.members;
		}
		this.loading = false;
		return [];
	}

	setMemberUsername(id: string): string {
		const user = this.userService.getUserById(id);
		if (user) {
			return `-> ${user.username}`
		}
		return '';
	}
}
