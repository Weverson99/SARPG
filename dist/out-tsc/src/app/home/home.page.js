import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
var HomePage = /** @class */ (function () {
    function HomePage(authService) {
        this.authService = authService;
    }
    HomePage.prototype.logout = function () {
        this.authService.logout();
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthServiceService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map