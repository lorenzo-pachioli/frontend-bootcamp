import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const DEFAULT_LANG = 'es-AR';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentYear = new Date().getFullYear()

  constructor(translate: TranslateService) {
		translate.setDefaultLang(DEFAULT_LANG)
	}

  ngOnInit(): void {
  }

}
