import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OportunidadesPage } from './oportunidades.page';
var routes = [
    {
        path: '',
        component: OportunidadesPage
    }
];
var OportunidadesPageModule = /** @class */ (function () {
    function OportunidadesPageModule() {
    }
    OportunidadesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OportunidadesPage]
        })
    ], OportunidadesPageModule);
    return OportunidadesPageModule;
}());
export { OportunidadesPageModule };
//# sourceMappingURL=oportunidades.module.js.map