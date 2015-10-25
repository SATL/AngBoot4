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
var router_1 = require('angular2/router');
var HeroService_1 = require('./HeroService');
var Heroes = (function () {
    function Heroes(heroService) {
        this.title = 'Tour of Heroes';
        this.heroService = heroService;
    }
    ;
    Heroes.prototype.onInit = function () {
        this.heroes = this.heroService.getHeroes();
    };
    ;
    Heroes.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    ;
    Heroes.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    ;
    Heroes = __decorate([
        angular2_1.Component({
            selector: 'heroes',
            templateUrl: 'app/components/heroes/heroes.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            styleUrls: ['app/styles/app.css'],
            providers: [HeroService_1.HeroService]
        }), 
        __metadata('design:paramtypes', [HeroService_1.HeroService])
    ], Heroes);
    return Heroes;
})();
exports.Heroes = Heroes;
// bootstrap(Heroes, [HeroService]); 
//# sourceMappingURL=HeroComponent.js.map