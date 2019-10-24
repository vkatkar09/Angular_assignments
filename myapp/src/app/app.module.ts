import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { Products } from './products';
import { HeartComponent } from './heart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Products],
  bootstrap: [AppComponent]
})
export class AppModule { }
