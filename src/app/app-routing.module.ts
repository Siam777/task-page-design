import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidationHubModule } from './consolidation-hub/consolidation-hub.module';

const routes: Routes = [
  { path: 'consolidation-hub', loadChildren: () => import('./consolidation-hub/consolidation-hub.module').then(m => m.ConsolidationHubModule) },
  { path: '**', redirectTo: "/consolidation-hub/page" },
  { path: '', redirectTo: "/consolidation-hub/page", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
