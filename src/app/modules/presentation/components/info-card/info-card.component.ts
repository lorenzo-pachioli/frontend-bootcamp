import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-info-card',
	templateUrl: './info-card.component.html',
	styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

	loading = true;
	@Input() item?: any;

	constructor(public datepipe: DatePipe) { }

	ngOnInit(): void {
	}
}
