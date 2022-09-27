import { Component, Input, OnInit } from '@angular/core';
import { IEpic } from '../../api-rest/services/interfaces/epicInterface';
import { IProject } from '../../api-rest/services/interfaces/projectInterface';
import { IStory } from '../../api-rest/services/interfaces/storyInterface';

@Component({
	selector: 'app-info-card',
	templateUrl: './info-card.component.html',
	styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

	@Input() item: IProject | IStory | IEpic;
	constructor() { }

	ngOnInit(): void {
	}

}
