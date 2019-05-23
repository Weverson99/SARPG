import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(AFAuth, router) {
        this.AFAuth = AFAuth;
        this.router = router;
    }
    AuthServiceService.prototype.login = function (email, password) {
        return this.AFAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthServiceService.prototype.logout = function () {
        this.AFAuth.auth.signOut();
        this.router.navigate(['/login']);
    };
    AuthServiceService.prototype.register = function (displayname, email, password) {
        return this.AFAuth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
            res.user.updateProfile({ displayName: displayname });
        });
    };
    AuthServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], AuthServiceService);
    return AuthServiceService;
}());
export { AuthServiceService };
//# sourceMappingURL=auth-service.service.js.map