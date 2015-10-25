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
var madewith_1 = require('./../madewith');
var HeaderComponent = (function () {
    function HeaderComponent(location) {
        this.title = 'Tour of Heroes';
        this.location = location;
    }
    HeaderComponent.prototype.getLinkStyle = function (path) {
        return this.location.path() === path;
    };
    HeaderComponent = __decorate([
        angular2_1.Component({
            selector: 'header',
            properties: ['title'],
            templateUrl: "app/components/header/header.html",
            directives: [router_1.ROUTER_DIRECTIVES, madewith_1.MadeWidth, angular2_1.NgIf],
            styles: [".navbar {\n\t\tborder-radius: 0 !important;\n\t}"]
        }), 
        __metadata('design:paramtypes', [router_1.Location])
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map