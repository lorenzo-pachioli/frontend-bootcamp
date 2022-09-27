import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BackRouteDirective } from './directives/back-route/back-route.directive';


@NgModule({
	declarations: [
		BackRouteDirective
	],
	imports: [
		CommonModule,
		HttpClientModule,
	],
	exports: [
		BackRouteDirective
	]
})
export class ApiRestModule {
}
