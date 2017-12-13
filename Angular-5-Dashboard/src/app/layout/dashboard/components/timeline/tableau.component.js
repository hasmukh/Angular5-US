"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TableauComponent = (function () {
    function TableauComponent() {
    }
    TableauComponent.prototype.ngAfterViewInit = function () { this.initViz(); };
    TableauComponent.prototype.initViz = function () {
        var containerDiv = document.getElementById("vizContainer"), url = "https://public.tableau.com/views/superstore_92/Dashboard2", options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };
        var viz = new tableau.Viz(containerDiv, url, options);
    };
    TableauComponent = __decorate([
        core_1.Component({
            selector: 'pm-tableau',
            templateUrl: '<div><div id="vizContainer" style="width:800px; height:700px;"></div></div> '
        })
    ], TableauComponent);
    return TableauComponent;
}());
exports.TableauComponent = TableauComponent;
//# sourceMappingURL=tableau.component.js.map