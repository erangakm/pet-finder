import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LostPetReportComponent } from './forms/lost-pet-report/lost-pet-report.component';

const routes: Routes = [
  {
    path: 'report-lost-pet',
    component: LostPetReportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
