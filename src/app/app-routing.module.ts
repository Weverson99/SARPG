import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  { path: 'criapersona/:id', loadChildren: './criapersona/criapersona.module#CriapersonaPageModule' },

 // { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
 // { path: 'contacts/:id', loadChildren: './contacts/contacts.module#ContactsPageModule' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
