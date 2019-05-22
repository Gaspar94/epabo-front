import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        this.authService.register(form.value).subscribe(function (res) {
            _this.router.navigateByUrl('login');
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map