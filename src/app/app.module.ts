import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './products/product.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home/welcome.component';
//import { ProductService } from './products/product.service'


@NgModule({
  //exports:[],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    ProductModule, //comment this if need to lazyly load product module
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  //providers:[ ProductService ]
})
export class AppModule { }
