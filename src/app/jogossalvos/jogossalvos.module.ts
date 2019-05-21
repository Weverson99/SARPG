import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JogossalvosPage } from './jogossalvos.page';

const routes: Routes = [
  {
    path: '',
    component: JogossalvosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JogossalvosPage]
})
export class JogossalvosPageModule {}
