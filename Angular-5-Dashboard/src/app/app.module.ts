import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { LayoutModule } from "./layout/layout.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { DashboardModule } from './layout/dashboard/dashboard.module';

import { LoginserService } from './loginser.service';
import { AuthguardGuard } from './authguard.guard';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'layout/dashboard',
        canActivate: [AuthguardGuard],
        component: DashboardComponent
    }
];
@NgModule({
    imports: [
        HttpModule,
        LoginModule,
        FormsModule,
        DashboardModule,
        RouterModule.forRoot(appRoutes),
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AmChartsModule,
        LayoutModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        DragulaModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, LoginserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
