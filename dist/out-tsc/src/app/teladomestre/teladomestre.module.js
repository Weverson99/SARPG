import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TeladomestrePage } from './teladomestre.page';
var routes = [
    {
        path: '',
        component: TeladomestrePage
    }
];
var TeladomestrePageModule = /** @class */ (function () {
    function TeladomestrePageModule() {
    }
    TeladomestrePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TeladomestrePage]
        })
    ], TeladomestrePageModule);
    return TeladomestrePageModule;
}());
export { TeladomestrePageModule };
//# sourceMappingURL=teladomestre.module.js.map