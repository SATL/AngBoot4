import {Component, ElementRef, Inject} from 'angular2/angular2';
declare var jQuery:any;


@Component({
	selector: 'made-with',
	template: `Made with <label class="label label-default">{{tecnology}}</label>`
})

export class MadeWidth {
	tecnologies;
	tecnology;
	element;
	interval;
	constructor(@Inject(ElementRef)elelemtRef: ElementRef){
		this.element = jQuery(elelemtRef.nativeElement).find('label');
		this.tecnologies = ['Angular2', 'Bootstrap4', 'Typescript', '♥'];
		this.tecnology = this.tecnologies[0];
	}
	onInit(){
		var i =0;
		var el = this.element;
		this.interval = setInterval(() => {
			i=++i%this.tecnologies.length;
			el.stop(true, true);
			el.fadeOut('fast', () => {
				this.tecnology = this.tecnologies[i];
				el.stop(true, true);
				el.fadeIn('fast');
			});
		}, 3000);
	}
	onDestroy(){
		this.element.stop(true, true);
		clearInterval(this.interval);
	}
}
}