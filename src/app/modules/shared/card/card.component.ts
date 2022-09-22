import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../../api-rest/services/interfaces/projectInterface';
import { IStory } from '../../api-rest/services/interfaces/storyInterface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input() item: IProject | IStory;
	constructor() { }

	ngOnInit(): void {
	}

}
