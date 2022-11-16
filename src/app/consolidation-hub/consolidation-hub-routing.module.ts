import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidationHubPageComponent } from './consolidation-hub-page/consolidation-hub-page.component';

const routes: Routes = [
  {path: 'page', component: ConsolidationHubPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsolidationHubRoutingModule { }
