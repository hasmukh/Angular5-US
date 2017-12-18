import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDashboardComponent } from './create-dashboard.component';
import { CreateDashboardRoutingModule } from './create-dashboard-routing.module';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
    declarations: [CreateDashboardComponent],
    imports: [CommonModule, CreateDashboardRoutingModule, DragulaModule],
    exports: [],
    providers: [],
})
export class CreateDashboardModule { }
