import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ElementRef } from '@angular/core/src/linker/element_ref';
@Component({
    selector: 'app-create-dashboard',
    templateUrl: './create-dashboard.component.html',
    styleUrls: ['./create-dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CreateDashboardComponent implements OnInit {
    constructor(private dragulaService: DragulaService) {
        dragulaService.setOptions('kpibag', {
            copy: true
        });
        dragulaService.setOptions('chartbag', {
            copy: true
        });

        dragulaService.drag.subscribe((value) => {
            const [bname, source, target] = value;
            /* console.log('Target dataset => ');
            console.log(target.dataset);
            console.log('Source dataset => ');
            console.log(source.dataset.id);
            console.log(`Drag: ${value[0]}`); */
            this.onDrag(value.slice(1));
        });

        dragulaService.drop.subscribe((value) => {
            console.log(value);
            const [bag, source, target] = value;
            switch (bag) {
                case 'kpibag':
                    /* console.log('Target => ');
                    console.log(target);
                    console.log('Source Dataset=> ');
                    console.log(source.dataset.id);
                    console.log(`Drop: ${value[0]}`); */
                    this.onDropKpi(value.slice(1), source.dataset.id);
                    break;
                case 'chartbag':
                    this.onDropChart(value.slice(1), source.dataset.id);
                    break;

                default:
                    break;
            }
        });
    }

    ngOnInit() {
    }

    onDrag(args) {
        console.log('Drag event called');
        console.log(args);
    }

    onDropKpi(args, kpiId) {
        // console.log('Drop event called');
        // console.log(args[1].id);
        // using kpiId we can get content of KPIs
        const el = document.getElementById(args[1].id);
        console.log(el.dataset);
        el.innerHTML = `<small>${kpiId} Dropped here </small>`;
        el.style.backgroundColor = 'gray';
    }

    onDropChart(args, chartId) {
        // using chartId we can get content of charts
        const el = document.getElementById(args[1].id);
        el.innerHTML = `<img src="assets/images/chart1.jpg" style="width:100%;height:100%" alt="chart">`;
    }

}
