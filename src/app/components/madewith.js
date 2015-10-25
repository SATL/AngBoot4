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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var MadeWidth = (function () {
    function MadeWidth(elelemtRef) {
        this.element = jQuery(elelemtRef.nativeElement).find('label');
        this.tecnologies = ['Angular2', 'Bootstrap4', 'Typescript', '♥'];
        this.tecnology = this.tecnologies[0];
    }
    MadeWidth.prototype.onInit = function () {
        var _this = this;
        var i = 0;
        var el = this.element;
        this.interval = setInterval(function () {
            i = ++i % _this.tecnologies.length;
            el.stop(true, true);
            el.fadeOut('fast', function () {
                _this.tecnology = _this.tecnologies[i];
                el.stop(true, true);
                el.fadeIn('fast');
            });
        }, 3000);
    };
    MadeWidth.prototype.onDestroy = function () {
        this.element.stop(true, true);
        clearInterval(this.interval);
    };
    MadeWidth = __decorate([
        angular2_1.Component({
            selector: 'made-with',
            template: "Made with <label class=\"label label-default\">{{tecnology}}</label>"
        }),
        __param(0, angular2_1.Inject(angular2_1.ElementRef)), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], MadeWidth);
    return MadeWidth;
})();
exports.MadeWidth = MadeWidth;
//# sourceMappingURL=madewith.js.map