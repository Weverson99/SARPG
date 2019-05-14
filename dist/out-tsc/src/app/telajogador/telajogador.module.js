import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TelajogadorPage } from './telajogador.page';
var routes = [
    {
        path: '',
        component: TelajogadorPage
    }
];
var TelajogadorPageModule = /** @class */ (function () {
    function TelajogadorPageModule() {
    }
    TelajogadorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TelajogadorPage]
        })
    ], TelajogadorPageModule);
    return TelajogadorPageModule;
}());
export { TelajogadorPageModule };
//# sourceMappingURL=telajogador.module.js.map