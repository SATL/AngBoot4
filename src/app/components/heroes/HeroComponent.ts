import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES } from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './HeroService';

@Component({
	selector: 'heroes',
	templateUrl:'app/components/heroes/heroes.html',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES],
	styleUrls:['app/styles/app.css'],
	providers:[HeroService]
})
export class Heroes {
	public title = 'Tour of Heroes';
	public heroes;
	public selectedHero: Hero;
	private heroService : HeroService;
	constructor(heroService: HeroService){
		this.heroService = heroService;

	};
	onInit(){
		this.heroes = this.heroService.getHeroes();
	};
	onSelect(hero: Hero) { this.selectedHero = hero; };
	getSelectedClass(hero: Hero) {
		return { 'selected': hero === this.selectedHero };
	};
}
// bootstrap(Heroes, [HeroService]);