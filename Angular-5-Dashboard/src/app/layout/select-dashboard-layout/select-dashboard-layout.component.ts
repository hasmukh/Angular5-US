import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-select-dashboard-layout',
    templateUrl: './select-dashboard-layout.component.html',
    styleUrls: ['./select-dashboard-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SelectDashboardLayoutComponent implements OnInit {

    private highlight = 0;
    private selectedLayout = 0;
    constructor() { }

    ngOnInit() {
    }

    selectLayout(layout, highlight) {
        this.highlight = highlight;
        this.selectedLayout = layout;
    }


}
