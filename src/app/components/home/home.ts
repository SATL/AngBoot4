import {Component, ElementRef, Inject} from 'angular2/angular2';
import {MadeWidth} from './../madewith';
@Component({
	selector: 'home',
	templateUrl: 'app/components/home/home.html',
	directives:[MadeWidth]
})

export class Home {
	
}