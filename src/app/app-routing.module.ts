import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LostPetReportComponent } from './forms/lost-pet-report/lost-pet-report.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
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
