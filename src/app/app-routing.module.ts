import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path:'welcome', component: WelcomeComponent },
      { path: 'products', loadChildren: './products/product.module#ProductModule'}, //add this for lazyli loading product module
      { path: '', redirectTo: 'Welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch:'full'}
    ]),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
