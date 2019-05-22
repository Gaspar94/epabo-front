import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GastosPage } from './gastos.page';
var routes = [
    {
        path: '',
        component: GastosPage
    }
];
var GastosPageModule = /** @class */ (function () {
    function GastosPageModule() {
    }
    GastosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GastosPage]
        })
    ], GastosPageModule);
    return GastosPageModule;
}());
export { GastosPageModule };
//# sourceMappingURL=gastos.module.js.map