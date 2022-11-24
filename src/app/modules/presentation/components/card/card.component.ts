import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { EpicDeleteConfirmationComponent } from 'src/app/modules/components/components/epic-delete-confirmation/epic-delete-confirmation.component';
import { ProjectDeleteConfirmationComponent } from 'src/app/modules/components/components/project-delete-confirmation/project-delete-confirmation.component';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() item: any;
	@Input() route: any;

	constructor(
		public datepipe: DatePipe,
		public projectList: ProjectService,
		public epicList: EpicService,
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
	}

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		if (this.item.project) {
			this.openEpicDialog(enterAnimationDuration, exitAnimationDuration);
		} else {
			this.openProjectDialog(enterAnimationDuration, exitAnimationDuration);
		}
	}

	openProjectDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		this.dialog.open(ProjectDeleteConfirmationComponent, {
			width: '250px',
			enterAnimationDuration,
			exitAnimationDuration,
			data: {
				id: this.item.id
			}
		});
	}

	openEpicDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
		this.dialog.open(EpicDeleteConfirmationComponent, {
			width: '250px',
			enterAnimationDuration,
			exitAnimationDuration,
			data: {
				id: this.item.id
			}
		});
	}

}
