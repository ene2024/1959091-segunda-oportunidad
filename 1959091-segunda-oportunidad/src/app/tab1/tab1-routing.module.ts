import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'register',
    loadChildren: () => import('../register/register.component').then(m => m.RegisterComponent)
  }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
