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
var home_1 = require('./components/home/home');
var HeroComponent_1 = require('./components/heroes/HeroComponent');
var about_1 = require('./components/about/about');
var header_1 = require('./components/header/header');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var MyApp = (function () {
    function MyApp(router) {
        this.title = 'Angular2 Samples';
        this.router = router;
    }
    MyApp = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            templateUrl: './app/templates/app.html',
            directives: [home_1.Home, router_2.ROUTER_DIRECTIVES, about_1.About, header_1.HeaderComponent]
        }),
        router_2.RouteConfig([
            new router_2.Route({ path: '/', component: home_1.Home, as: 'Home' }),
            new router_2.Route({ path: '/about', component: about_1.About, as: 'About' }),
            new router_2.Route({ path: '/heroes', component: HeroComponent_1.Heroes, as: 'Heroes' }),
            new router_1.AsyncRoute({
                path: '/github',
                loader: function () { return System.import('./app/components/github/github').then(function (m) { return m.Github; }); },
                as: 'Github'
            })
        ]), 
        __metadata('design:paramtypes', [router_2.Router])
    ], MyApp);
    return MyApp;
})();
angular2_1.bootstrap(MyApp, [router_1.ROUTER_PROVIDERS, angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map