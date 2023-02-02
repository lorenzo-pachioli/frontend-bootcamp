import { Component, Input } from '@angular/core';

export interface Label {
	text?: string;
	key?: string;
};

@Component({
	selector: 'app-label',
	templateUrl: './label.component.html',
	styleUrls: ['./label.component.css']
})
export class LabelComponent {

	@Input() label: Label;

	constructor() {
	}
}
