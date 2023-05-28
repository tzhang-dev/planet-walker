import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThisPlayerService } from './pixel-planet/services/this-player.service';
import { ThisChallengeService } from './pixel-planet/services/this-challenge.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ThisPlayerService,
    ThisChallengeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
