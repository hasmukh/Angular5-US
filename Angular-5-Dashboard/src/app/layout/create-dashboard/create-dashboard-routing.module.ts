import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDashboardComponent } from './create-dashboard.component';

const routes: Routes = [
    { path: '', component: CreateDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreateDashboardRoutingModule { }
