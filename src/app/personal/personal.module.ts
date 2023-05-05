import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalPage } from './personal.page';

import { PersonalPageRoutingModule } from './personal-routing.module';
import { PlanetHalfComponent } from '../pixel-planet/components/planet-half/planet-half.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PersonalPageRoutingModule,
    PlanetHalfComponent,
  ],
  declarations: [PersonalPage],
})
export class PersonalPageModule {}
