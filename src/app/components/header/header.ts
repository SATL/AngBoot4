import { Component, provide, NgIf } from 'angular2/angular2';
import {ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {MadeWidth} from './../madewith'

@Component({
	selector: 'header',
	properties: ['title'],
	templateUrl:`app/components/header/header.html`,
	directives:[ROUTER_DIRECTIVES, MadeWidth, NgIf],
	styles:[`.navbar {
		border-radius: 0 !important;
	}`]
})

export class HeaderComponent {
	public title = 'Tour of Heroes';
	location: Location;
	constructor(location: Location) {
		this.location = location;
	}
	getLinkStyle(path) {
		return this.location.path() === path;
	}
}