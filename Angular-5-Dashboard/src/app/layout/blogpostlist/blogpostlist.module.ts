import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogpostlistRoutingModule} from './blogpostlist-routing.module';
import {BlogpostlistComponent} from './blogpostlist.component';


@NgModule({
    declarations: [BlogpostlistComponent],
    imports: [ CommonModule, BlogpostlistRoutingModule ],
    exports: [],
    providers: [],
})
export class BlogpostlistModule {}
