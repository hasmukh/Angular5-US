import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

declare var tableau: any; 
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
 private chart: AmChart;
 
 constructor() { 
    
 }
   ngOnInit() { }

    ngAfterViewInit(){this.initViz()}
    initViz(): void{
        var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/superstore_92/Dashboard2",
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };
    
    var viz = new tableau.Viz(containerDiv, url, options); 
    }

/*
  constructor(private AmCharts: AmChartsService) { }

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", {
       "type": "serial",
    "theme": "light",
    "valueAxes": [ {
      "axisAlpha": 0,
      "position": "left",
      "title": "Total Production"
    }],
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start",
      "labelRotation": 45
    },
    "startupDuration": 1,
    "graphs": [{
      "balloonText": "[[category]]: [[value]]",
      "fillColorsField": "color",
      "fillAlphas": 0.9,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "income",
      "fillColors": "green"
    }],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
      "dataProvider": [{
                    "year": 2005,
                    "income": 23.5
                },
                {
                    "year": 2006,
                    "income": 26.2
                },
                {
                    "year": 2007,
                    "income": 30.1
                },
                {
                    "year": 2008,
                    "income": 29.5
                },
                {
                    "year": 2009,
                    "income": 24.6
     }],
                  "export": {
        "enabled": true
      }
      
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
*/
 
}
