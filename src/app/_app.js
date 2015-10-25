var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var HeroService_1 = require('./services/HeroService');
var header_1 = require('./header');
var home_1 = require('./components/home');
var about_1 = require('./components/about');
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.title = 'Tour of Heroes';
        this.heroService = heroService;
    }
    ;
    AppComponent.prototype.onInit = function () {
        this.heroes = this.heroService.getHeroes();
    };
    ;
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    ;
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    ;
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/app.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, header_1.HeaderComponent, home_1.Home, about_1.About],
            styleUrls: ['app/styles/app.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof HeroService_1.HeroService !== 'undefined' && HeroService_1.HeroService) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
})();
angular2_1.bootstrap(AppComponent, [HeroService_1.HeroService]);
//# sourceMappingURL=_app.js.map