import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { Products } from './products';
import { HeartComponent } from './heart.component';
import { GenderComponent } from './gender.component';
import { HeartLikeComponent } from './heartLike.component';
import { StoreUserComponent } from './storeUsers.component';
import { CurrentUserComponent } from './currentuser.component';
import { TaskComponent } from './task.component';
import { ProductNewComponent } from './productNew.component';
import { ImgHttp } from './imgHttp.component';
import { ImgPipes } from './img.pipes';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeartComponent,
    GenderComponent,
    HeartLikeComponent,
    StoreUserComponent,
    CurrentUserComponent,
    TaskComponent,
    ProductNewComponent,
    ImgHttp,
    ImgPipes
  ],
  imports: [
    BrowserModule
  ],
  providers: [Products],
  bootstrap: [AppComponent]
})
export class AppModule { }
