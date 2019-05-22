import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NuevoGastoPage } from './nuevo-gasto.page';
var routes = [
    {
        path: '',
        component: NuevoGastoPage
    }
];
var NuevoGastoPageModule = /** @class */ (function () {
    function NuevoGastoPageModule() {
    }
    NuevoGastoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NuevoGastoPage]
        })
    ], NuevoGastoPageModule);
    return NuevoGastoPageModule;
}());
export { NuevoGastoPageModule };
//# sourceMappingURL=nuevo-gasto.module.js.map