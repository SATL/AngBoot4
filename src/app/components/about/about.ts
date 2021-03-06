import {Component} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'about',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: './app/components/about/about.html'
})

export class About {
    id: string;
    constructor(params: RouteParams){
        this.id = params.get('id');
    }
}