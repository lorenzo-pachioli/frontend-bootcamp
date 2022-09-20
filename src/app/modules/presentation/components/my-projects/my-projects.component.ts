import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../api-rest/services/projects/project.service'

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  projects = [];
  constructor(public projectList:ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectList.getProjects()
  }

}
