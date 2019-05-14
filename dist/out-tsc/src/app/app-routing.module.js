import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule',
        canActivate: [AuthGuard]
    },
    { path: 'telajogador', loadChildren: './telajogador/telajogador.module#TelajogadorPageModule' },
    { path: 'teladomestre', loadChildren: './teladomestre/teladomestre.module#TeladomestrePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'telajogadoritens', loadChildren: './telajogadoritens/telajogadoritens.module#TelajogadoritensPageModule' },
    { path: 'selectsala', loadChildren: './selectsala/selectsala.module#SelectsalaPageModule' },
    { path: 'criasala', loadChildren: './criasala/criasala.module#CriasalaPageModule' },
    { path: 'lobby', loadChildren: './lobby/lobby.module#LobbyPageModule' },
    { path: 'selectpersona', loadChildren: './selectpersona/selectpersona.module#SelectpersonaPageModule' },
    { path: 'criapersona', loadChildren: './criapersona/criapersona.module#CriapersonaPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map