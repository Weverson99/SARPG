import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JogossalvosPage } from './jogossalvos.page';
var routes = [
    {
        path: '',
        component: JogossalvosPage
    }
];
var JogossalvosPageModule = /** @class */ (function () {
    function JogossalvosPageModule() {
    }
    JogossalvosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [JogossalvosPage]
        })
    ], JogossalvosPageModule);
    return JogossalvosPageModule;
}());
export { JogossalvosPageModule };
//# sourceMappingURL=jogossalvos.module.js.map