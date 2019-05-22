import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        this.authService.login(form.value).subscribe(function (res) {
            _this.router.navigateByUrl('home');
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map