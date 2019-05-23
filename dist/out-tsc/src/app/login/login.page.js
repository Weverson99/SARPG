import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { AuthServiceService } from './../services/auth-service.service';
import { Component } from '@angular/core';
var LoginPage = /** @class */ (function () {
    function LoginPage(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authService.login(this.email, this.password).then(function (res) {
            _this.router.navigate(['/home']);
        }).catch(function (error) {
            alert('Dados incorretos');
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService, Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map