declare var System:any
import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {Home} from './components/home/home';
import {Heroes} from './components/heroes/HeroComponent';
import {About} from './components/about/about';
import {Github} from './components/github/github';
import {HeaderComponent} from './components/header/header';

import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, AsyncRoute} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: './app/templates/app.html',
    directives:[Home, ROUTER_DIRECTIVES, About, HeaderComponent]
})
@RouteConfig([
    new Route({path: '/', component: Home, as: 'Home'}),
    new Route({path: '/about', component: About, as: 'About'}),
    new Route({path: '/heroes', component: Heroes, as: 'Heroes'}),
    new AsyncRoute({
        path: '/github',
        loader: () => System.import('./app/components/github/github').then(m => m.Github),
        as: 'Github'
    })
    ])
class MyApp {
    router: Router;
    title = 'Angular2 Samples'
    constructor(router: Router) {
        this.router = router;
    }
}
bootstrap(MyApp,[ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);