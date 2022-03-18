import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { BodyOneComponent } from './body-one/body-one.component';
import { BodyTwoComponent } from './body-two/body-two.component';
import { BodyThreeComponent } from './body-three/body-three.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    BodyOneComponent,
    BodyTwoComponent,
    BodyThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
