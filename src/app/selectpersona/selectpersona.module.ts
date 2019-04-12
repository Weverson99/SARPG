import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectpersonaPage } from './selectpersona.page';

const routes: Routes = [
  {
    path: '',
    component: SelectpersonaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectpersonaPage]
})
export class SelectpersonaPageModule {}
