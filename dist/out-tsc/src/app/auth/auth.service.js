import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
var AuthService = /** @class */ (function () {
    function AuthService(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.AUTH_SERVER_ADDRESS = 'http://localhost:8080/api';
        this.authSubject = new BehaviorSubject(false);
    }
    AuthService.prototype.register = function (user) {
        var _this = this;
        return this.httpClient.post(this.AUTH_SERVER_ADDRESS + "/register", user).pipe(tap(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!res.user) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.set("ACCESS_TOKEN", res.user.access_token)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set("EXPIRES_IN", res.user.expires_in)];
                    case 2:
                        _a.sent();
                        this.storage.set("LOGIN", user.id);
                        this.authSubject.next(true);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); }));
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.httpClient.post(this.AUTH_SERVER_ADDRESS + "/authenticate", user).pipe(tap(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!res.user) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.storage.set("ACCESS_TOKEN", res.user.access_token)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set("EXPIRES_IN", res.user.expires_in)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set("USER_ID", res.user.id)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, localStorage.setItem("KEY", res.user.access_token)];
                    case 4:
                        _a.sent();
                        this.authSubject.next(true);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); }));
    };
    AuthService.prototype.logout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove("ACCESS_TOKEN")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.remove("EXPIRES_IN")];
                    case 2:
                        _a.sent();
                        this.authSubject.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.authSubject.asObservable();
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Storage])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map