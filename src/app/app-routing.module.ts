import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },  { path: 'telajogador', loadChildren: './telajogador/telajogador.module#TelajogadorPageModule' },
  { path: 'cadpersona', loadChildren: './cadpersona/cadpersona.module#CadpersonaPageModule' },
  { path: 'teladomestre', loadChildren: './teladomestre/teladomestre.module#TeladomestrePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
