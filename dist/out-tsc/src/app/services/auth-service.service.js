import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
var AuthSeviceService = /** @class */ (function () {
    function AuthSeviceService(AFAuth, router) {
        this.AFAuth = AFAuth;
        this.router = router;
    }
    AuthSeviceService.prototype.login = function (email, password) {
        return this.AFAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthSeviceService.prototype.logout = function () {
        this.AFAuth.auth.signOut();
        this.router.navigate(['/login']);
    };
    AuthSeviceService.prototype.register = function (displayname, email, password) {
        return this.AFAuth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
            res.user.updateProfile({ displayName: displayname });
        });
    };
    AuthSeviceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], AuthSeviceService);
    return AuthSeviceService;
}());
export { AuthSeviceService };
//# sourceMappingURL=auth-service.service.js.map