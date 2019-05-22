import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
var OportunidadesAllService = /** @class */ (function () {
    function OportunidadesAllService(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.SERVER_ADDRESS = 'http://localhost:8080/api/oportunidads';
        this.authSubject = new BehaviorSubject(false);
    }
    OportunidadesAllService.prototype.getOportunidades = function () {
        return this.httpClient.get(this.SERVER_ADDRESS);
    };
    OportunidadesAllService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Storage])
    ], OportunidadesAllService);
    return OportunidadesAllService;
}());
export { OportunidadesAllService };
//# sourceMappingURL=oportunidades-all.service.js.map