import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SelectsalaPage } from './selectsala.page';
var routes = [
    {
        path: '',
        component: SelectsalaPage
    }
];
var SelectsalaPageModule = /** @class */ (function () {
    function SelectsalaPageModule() {
    }
    SelectsalaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SelectsalaPage]
        })
    ], SelectsalaPageModule);
    return SelectsalaPageModule;
}());
export { SelectsalaPageModule };
//# sourceMappingURL=selectsala.module.js.map