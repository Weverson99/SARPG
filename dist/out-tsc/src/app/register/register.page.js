import * as tslib_1 from "tslib";
import { AuthServiceService } from './../services/auth-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.authService.register(this.displayname, this.email, this.password).then(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    var _a;
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof AuthServiceService !== "undefined" && AuthServiceService) === "function" ? _a : Object, Router])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map