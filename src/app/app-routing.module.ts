import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformsComponent } from './components/platforms/platforms.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
