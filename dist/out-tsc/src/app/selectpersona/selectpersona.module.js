import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SelectpersonaPage } from './selectpersona.page';
var routes = [
    {
        path: '',
        component: SelectpersonaPage
    }
];
var SelectpersonaPageModule = /** @class */ (function () {
    function SelectpersonaPageModule() {
    }
    SelectpersonaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SelectpersonaPage]
        })
    ], SelectpersonaPageModule);
    return SelectpersonaPageModule;
}());
export { SelectpersonaPageModule };
//# sourceMappingURL=selectpersona.module.js.map