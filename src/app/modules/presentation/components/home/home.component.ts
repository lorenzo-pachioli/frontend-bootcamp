import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/modules/api-rest/services/projects/project.service';
import { EpicService } from 'src/app/modules/api-rest/services/epics/epic.service';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	proyectList = [];
	epicList = [];
	constructor(public projectService: ProjectService, public epicService: EpicService) { }

	ngOnInit(): void {
		this.proyectList = this.projectService.getProjects();
		this.epicList = this.epicService.getEpics();
	}

}
