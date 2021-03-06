"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
var weatherInfo_1 = require('./weatherInfo');
var AppComponent = (function () {
    function AppComponent(weatherService) {
        this.weatherService = weatherService;
        this.weatherInfo = new weatherInfo_1.WeatherInfo(0, '', {}, [{}]);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getWeather();
    };
    AppComponent.prototype.getWeather = function () {
        var _this = this;
        this.errorMessage = '';
        this.weatherService.getWeather()
            .subscribe(function (weatherInfo) { return _this.weatherInfo = weatherInfo; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [app_service_1.WeatherService],
        }), 
        __metadata('design:paramtypes', [app_service_1.WeatherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map