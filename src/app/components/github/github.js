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
// https://api.github.com/users/Eslem
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var Github = (function () {
    function Github(http) {
        this.http = http;
    }
    ;
    Github.prototype.onInit = function () {
        var _this = this;
        this.image = 'assets/loading.gif';
        this.http.get('https://api.github.com/users/Eslem')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.profile = data;
            console.log(data);
            _this.image = data.avatar_image;
        }, function (err) { return _this.logError(err); }, function () { return console.log('request complete'); });
    };
    Github.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    Github = __decorate([
        angular2_1.Component({
            selector: 'github',
            templateUrl: 'app/components/github/github.html',
            providers: [http_1.HTTP_PROVIDERS],
            directives: [angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Github);
    return Github;
})();
exports.Github = Github;
//# sourceMappingURL=github.js.map