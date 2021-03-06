import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      //{ path: '', component: ProductListComponent}, //for lazily loading module
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent},      
    ]),    
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
