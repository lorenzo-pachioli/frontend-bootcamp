import { Component, OnInit } from '@angular/core';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';

@Component({
	selector: 'app-my-projects',
	templateUrl: './my-projects.component.html',
	styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
