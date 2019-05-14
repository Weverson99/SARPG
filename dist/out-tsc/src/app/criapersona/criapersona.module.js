import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CriapersonaPage } from './criapersona.page';
var routes = [
    {
        path: '',
        component: CriapersonaPage
    }
];
var CriapersonaPageModule = /** @class */ (function () {
    function CriapersonaPageModule() {
    }
    CriapersonaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CriapersonaPage]
        })
    ], CriapersonaPageModule);
    return CriapersonaPageModule;
}());
export { CriapersonaPageModule };
//# sourceMappingURL=criapersona.module.js.map