import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniversePage } from './universe.page';

import { UniversePageRoutingModule } from './universe-routing.module';
import { PlanetWholeComponent } from '../pixel-planet/components/planet-whole/planet-whole.component';
import { PlanetHalfComponent } from '../pixel-planet/components/planet-half/planet-half.component';
import { CanvasComponent } from '../pixel-planet/components/canvas/canvas.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UniversePageRoutingModule,
    PlanetHalfComponent,
    CanvasComponent,
  ],
  declarations: [UniversePage, PlanetWholeComponent],
})
export class UniversePageModule {}
