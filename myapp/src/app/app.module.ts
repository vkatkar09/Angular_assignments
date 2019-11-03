import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { Products } from './products';
import { HeartComponent } from './heart.component';
import { GenderComponent } from './gender.component';
import { HeartLikeComponent } from './heartLike.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeartComponent,
    GenderComponent,
    HeartLikeComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [Products],
  bootstrap: [AppComponent]
})
export class AppModule { }
