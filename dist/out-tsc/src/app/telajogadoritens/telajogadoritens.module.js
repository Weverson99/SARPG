import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TelajogadoritensPage } from './telajogadoritens.page';
var routes = [
    {
        path: '',
        component: TelajogadoritensPage
    }
];
var TelajogadoritensPageModule = /** @class */ (function () {
    function TelajogadoritensPageModule() {
    }
    TelajogadoritensPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TelajogadoritensPage]
        })
    ], TelajogadoritensPageModule);
    return TelajogadoritensPageModule;
}());
export { TelajogadoritensPageModule };
//# sourceMappingURL=telajogadoritens.module.js.map