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
// Observable Version
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Antwerp,BE&units=metric&appid=059c8a5c2e2e15362cbebcae80b68e7b'; // URL to web API
    }
    WeatherService.prototype.getWeather = function () {
        return this.http.get(this.weatherUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WeatherService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    WeatherService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw("Error fetching weather info");
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=app.service.js.map