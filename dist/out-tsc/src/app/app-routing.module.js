import * as tslib_1 from "tslib";
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule',
        canActivate: [LoginGuard]
    },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'criapersona', loadChildren: './criapersona/criapersona.module#CriapersonaPageModule' },
    { path: 'criasala', loadChildren: './criasala/criasala.module#CriasalaPageModule' },
    { path: 'lobby', loadChildren: './lobby/lobby.module#LobbyPageModule' },
    { path: 'selectpersona', loadChildren: './selectpersona/selectpersona.module#SelectpersonaPageModule' },
    { path: 'selectsala', loadChildren: './selectsala/selectsala.module#SelectsalaPageModule' },
    { path: 'teladomestre', loadChildren: './teladomestre/teladomestre.module#TeladomestrePageModule' },
    { path: 'telajogador', loadChildren: './telajogador/telajogador.module#TelajogadorPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map