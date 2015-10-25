// https://api.github.com/users/Eslem
import {Component, NgIf} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http'

@Component({
	selector: 'github',
	templateUrl: 'app/components/github/github.html',
	providers:[HTTP_PROVIDERS],
	directives:[NgIf]
})
export class Github {
	http:Http;
	profile:any;
	image:string;
	constructor(http:Http){
		this.http = http;
	};

	onInit(){
		this.image = 'assets/loading.gif';
		this.http.get('https://api.github.com/users/Eslem')
		.map(res => res.json())
		.subscribe(
			data => {
				this.profile = data;
				console.log(data);
				this.image = data.avatar_image;
			},
			err => this.logError(err),
			() => console.log('request complete')
			);
	}
	logError(err) {
		console.error('There was an error: ' + err);
	}
}