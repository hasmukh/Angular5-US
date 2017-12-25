import { AfterViewInit, Component, OnInit, OnDestroy, ViewEncapsulation, ElementRef, style } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { CreateDashboardService } from './create-dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-create-dashboard',
    templateUrl: './create-dashboard.component.html',
    styleUrls: ['./create-dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CreateDashboardComponent implements OnInit, OnDestroy {

    private layoutStyle: number[] = [];

    constructor(private dragulaService: DragulaService, private elRef: ElementRef, private cds: CreateDashboardService,
        private route: ActivatedRoute) {
        this.route.params.subscribe((params) => {
            this.layoutStyle = params['layout']
                      .split('')
                      .map((n) => parseInt(n, 10));
        });

        dragulaService.setOptions('kpibag', {
            copy: true
        });
        dragulaService.setOptions('chartbag', {
            copy: true
        });

        dragulaService.drop.subscribe((value) => {
            console.log(value);
            const [bag, source, target] = value;
            switch (bag) {
                case 'kpibag':
                    this.onDropKpi(value.slice(1), source.dataset.id);
                    break;
                case 'chartbag':
                    this.onDropChart(value.slice(1), source.dataset.id, source.dataset.imgurl);
                    break;

                default:
                    break;
            }
        });
    }

    ngOnInit() {
        this.cds.getDashboardSettings()
            .subscribe((data) => {
                console.log('------ Data from Fake Service ------');
                console.log(data);
                // this.title = data.title;
            },
            (error) => console.error(error),
            () => console.log('Successfully completed'));
    }

    onDropKpi(args, kpiId) {

        // using kpiId we can get content of KPIs
        if (args[1]) {
            if (args[1].parentElement.hasChildNodes('drop-box')) {
                const el = document.getElementById(args[1].id);
                console.log(el.dataset);
                el.innerHTML = `<small>${kpiId} Dropped here </small>`;
                el.style.backgroundColor = 'gray';
            }
        }
    }

    onDropChart(args, chartId, imgURL) {
        // using chartId we can get content of charts
        if (args[1]) {
            if (args[1].parentElement.hasChildNodes('inner-drop-box-1')) {
                const el = document.getElementById(args[1].id);
                el.innerHTML = `<div class="thumbnail" id="thumbnail">
                                    <img src="${imgURL}" />
                                    <a id="close">x</a>
                                    </div>`;
                this.elRef.nativeElement.querySelector('#close')
                    .addEventListener('click', this.closeMe.bind(this));
            }
        }

    }

    closeMe(event) {
        const removableElement = document.getElementById('thumbnail');
        const parentNode = removableElement.parentNode;
        removableElement.parentNode.removeChild(removableElement);
        const spanNode = document.createElement('span');
        spanNode.setAttribute('class', 'add-content');
        spanNode.innerText = 'ADD';
        parentNode.appendChild(spanNode);
    }

    ngOnDestroy() {
        this.dragulaService.destroy('kpibag');
        this.dragulaService.destroy('chartbag');
    }
}
