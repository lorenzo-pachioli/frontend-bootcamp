import { Component, OnInit, TemplateRef, ContentChild, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

	@Input() loading = true;
	@Input() list: Array<any>;
	@Input() optional = '';
	@ContentChild('card', { static: false }) cardTemplateRef: TemplateRef<any>;
	constructor(public translate: TranslateService) { }

	ngOnInit(): void {
		/* setTimeout(() => {
			this.loading = false;
		}, 5000); */
	}

}
