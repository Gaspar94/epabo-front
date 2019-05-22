import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
var NuevoGastoPage = /** @class */ (function () {
    function NuevoGastoPage(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.SERVER_ADDRESS = 'http://localhost:8080/api/gastos';
    }
    NuevoGastoPage.prototype.ngOnInit = function () {
    };
    NuevoGastoPage.prototype.newGasto = function (gasto) {
        //gasto.userId(this.storage.get("LOGIN"));
        return this.httpClient.post('SERVER_ADRESS', gasto);
    };
    NuevoGastoPage = tslib_1.__decorate([
        Component({
            selector: 'app-nuevo-gasto',
            templateUrl: './nuevo-gasto.page.html',
            styleUrls: ['./nuevo-gasto.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Storage])
    ], NuevoGastoPage);
    return NuevoGastoPage;
}());
export { NuevoGastoPage };
//# sourceMappingURL=nuevo-gasto.page.js.map