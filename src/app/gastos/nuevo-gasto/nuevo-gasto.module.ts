import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NuevoGastoPage } from './nuevo-gasto.page';

@Injectable({
  providedIn: 'root'
})
const routes: Routes = [
  {
    path: '',
    component: NuevoGastoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevoGastoPage]
})
export class NuevoGastoPageModule {}
