import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsolidationHubRoutingModule } from './consolidation-hub-routing.module';
import { ConsolidationHubPageComponent } from './consolidation-hub-page/consolidation-hub-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { DialogTruckAddComponent } from './dialog-truck-add/dialog-truck-add.component';


@NgModule({
  declarations: [
    ConsolidationHubPageComponent,
    DialogTruckAddComponent
  ],
  imports: [
    CommonModule,
    ConsolidationHubRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  entryComponents:[DialogTruckAddComponent]
})
export class ConsolidationHubModule { }
