import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDashboardLayoutComponent } from './select-dashboard-layout.component';
import { SelectDashboardLayoutRoutingModule } from './select-dashboard-layout-routing.module';

@NgModule({
    declarations: [SelectDashboardLayoutComponent],
    imports: [CommonModule, SelectDashboardLayoutRoutingModule],
    exports: [],
    providers: [],
})
export class SelectDashboardLayoutModule { }
