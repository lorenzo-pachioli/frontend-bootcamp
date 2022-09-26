import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../../api-rest/services/interfaces/projectInterface';
import { IStory } from '../../api-rest/services/interfaces/storyInterface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	withColor = '';
	withoutColor = 'none';
	@Input() item: IProject | IStory;
	constructor() { }

	ngOnInit(): void {
	}

	itemColor(): any {
		if (this.item && this.item.icon) {
			return {
				color: `${this.item.icon}`,
				border: `2px solid ${this.item.icon}`
			}
		}
	}

}
