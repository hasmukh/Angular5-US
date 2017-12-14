import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostlistComponent } from './blogpostlist.component';

const routes: Routes = [
    {
        path: '', component: BlogpostlistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogpostlistRoutingModule {
}
