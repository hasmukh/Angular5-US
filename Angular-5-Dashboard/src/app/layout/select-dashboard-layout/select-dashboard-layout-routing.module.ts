import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectDashboardLayoutComponent } from './select-dashboard-layout.component';

const routes: Routes = [
    { path: '', component: SelectDashboardLayoutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SelectDashboardLayoutRoutingModule { }
