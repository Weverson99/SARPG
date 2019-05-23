import * as tslib_1 from "tslib";
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { map } from 'rxjs/operators';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(AFAuth, router) {
        this.AFAuth = AFAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.AFAuth.authState.pipe(map(function (auth) {
            if (isNullOrUndefined(auth)) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map