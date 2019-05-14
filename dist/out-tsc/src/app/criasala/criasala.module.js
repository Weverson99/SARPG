import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CriasalaPage } from './criasala.page';
var routes = [
    {
        path: '',
        component: CriasalaPage
    }
];
var CriasalaPageModule = /** @class */ (function () {
    function CriasalaPageModule() {
    }
    CriasalaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CriasalaPage]
        })
    ], CriasalaPageModule);
    return CriasalaPageModule;
}());
export { CriasalaPageModule };
//# sourceMappingURL=criasala.module.js.map