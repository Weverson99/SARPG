import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
