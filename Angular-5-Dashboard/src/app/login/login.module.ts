import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, LayoutModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
