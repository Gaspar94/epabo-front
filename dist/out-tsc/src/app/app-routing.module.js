import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
    { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
    { path: 'main', loadChildren: './oportunidades/main/main.module#MainPageModule' },
    { path: 'oportunidades', loadChildren: './oportunidades/oportunidades/oportunidades.module#OportunidadesPageModule' },
    { path: 'gastos', loadChildren: './gastos/gastos.module#GastosPageModule' },
    { path: 'nuevo-gasto', loadChildren: './gastos/nuevo-gasto/nuevo-gasto.module#NuevoGastoPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map