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
    private dragType: any;

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

        dragulaService.drag.subscribe((value) => {
            const [bname, source, target] = value;
            this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe((value) => {
            console.log(value);
            const [bag, source, target] = value;
            switch (bag) {
                case 'kpibag':
                    if (value[2]) {
                        if (value[2].dataset.type !== this.dragType) {
                            this.onDropKpi(value.slice(1), source.dataset.id, source.dataset.imgurl);
                        }
                    }
                    break;
                case 'chartbag':
                    if (value[2]) {
                        if (value[2].dataset.type !== this.dragType) {
                            this.onDropChart(value.slice(1), source.dataset.id, source.dataset.imgurl);
                        }
                    }
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

    onDrag(args) {
        this.dragType = args[1].dataset.type;
        console.log('Drag event called');
        console.log(args);
    }

    onDropKpi(args, kpiId, imgURL) {
        // using kpiId we can get content of KPIs
        if (args[1]) {
            if (args[1].parentElement.hasChildNodes('drop-box')) {
                const el = document.getElementById(args[1].id);
                console.log(el.dataset);
                el.querySelectorAll('.drag-item-name')[0].remove();
                el.querySelectorAll('.image-container')[0].innerHTML = `<img src="${imgURL}"
                                                                    style="width:100%; height:100%"
                                                                    class="dashboard-chart" alt="chart">`;
                el.querySelectorAll('.image-container')[0].classList.add('image-droped');
                el.querySelectorAll('.image-container')[0].classList.remove('add-content');
                // el.innerHTML = `<small>${kpiId} Dropped here </small>`;
                // el.style.backgroundColor = 'gray';
            }
        }
    }

    onDropChart(args, chartId, imgURL) {
        if (args[1]) {
            if (args[1].parentElement.hasChildNodes('inner-drop-box-1')) {
                const el = document.getElementById(args[1].id);
                el.querySelectorAll('.drag-item-name')[0].remove();
                el.querySelectorAll('.image-container')[0].innerHTML = `<img src="${imgURL}"  class="dashboard-chart"
                                                                        style="width:100%;height:100%" alt="chart">`;
                el.querySelectorAll('.image-container')[0].classList.add('image-droped');
                el.querySelectorAll('.image-container')[0].classList.remove('add-content');
            }
        }

    }

    removeImage(event) {
        const removeChildTag = event.target.parentNode.querySelectorAll('.dashboard-chart')[0]
        event.target.parentNode.querySelectorAll('.image-container')[0].removeChild(removeChildTag); \
        event.target.parentNode.querySelectorAll('.image-container')[0].classList.remove('image-droped');
        event.target.parentNode.querySelectorAll('.image-container')[0].classList.add('add-content');
        event.target.parentNode.querySelectorAll('.image-container')[0].innerHTML = 'ADD';
    }

    ngOnDestroy() {
        this.dragulaService.destroy('kpibag');
        this.dragulaService.destroy('chartbag');
    }
}
