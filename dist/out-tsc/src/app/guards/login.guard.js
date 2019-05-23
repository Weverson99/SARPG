import * as tslib_1 from "tslib";
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { map } from 'rxjs/operators';
var LoginGuard = /** @class */ (function () {
    function LoginGuard(AFAuth, router) {
        this.AFAuth = AFAuth;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.AFAuth.authState.pipe(map(function (auth) {
            if (isNullOrUndefined(auth)) {
                return true;
            }
            else {
                _this.router.navigate(['/home']);
                return false;
            }
        }));
    };
    LoginGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], LoginGuard);
    return LoginGuard;
}());
export { LoginGuard };
//# sourceMappingURL=login.guard.js.map