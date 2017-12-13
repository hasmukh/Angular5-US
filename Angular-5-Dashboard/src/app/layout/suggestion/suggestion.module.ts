import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuggestionRoutingModule} from './suggestion-routing.module';
import {SuggestionComponent} from './suggestion.component';


@NgModule({
    declarations: [SuggestionComponent],
    imports: [ CommonModule, SuggestionRoutingModule ],
    exports: [],
    providers: [],
})
export class SuggestionModule {}
