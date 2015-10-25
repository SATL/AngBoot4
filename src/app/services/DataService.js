// @Injectable()
var DataService = (function () {
    function DataService() {
        this.items = [
            { name: 'Christoph Burgdorf' },
            { name: 'Pascal Precht' },
            { name: 'thoughtram' }
        ];
    }
    DataService.prototype.getItems = function () {
        return this.items;
    };
    return DataService;
})();
//# sourceMappingURL=DataService.js.map