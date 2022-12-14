import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {

	constructor() {
	}

	private setDefaultLang(): string {
		const ln = navigator.language && navigator.language.slice(0, 2);
		if (ln === 'es') {
			return 'es-AR';
		} else {
			return 'en-US';
		}
	}

	initLang(): string {
		const lang = localStorage.getItem('lang');
		const DEFAULT_LANG = this.setDefaultLang();
		if (lang) {
			return lang;
		} else {
			localStorage.setItem('lang', DEFAULT_LANG);
			return DEFAULT_LANG;
		}
	}
}
