import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelajogadoritensPage } from './telajogadoritens.page';

const routes: Routes = [
  {
    path: '',
    component: TelajogadoritensPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelajogadoritensPage]
})
export class TelajogadoritensPageModule {}
