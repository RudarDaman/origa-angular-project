import {Component, Input, OnChanges} from '@angular/core';
import {Color, Label, SingleDataSet} from 'ng2-charts';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {

    @Input() graphData: { lat: string; lng: string }[];
    chartLabels: Label = ['Latitude > 0', 'Latitude < 0', 'Longitude > 0', 'Longitude < 0'];
    chartData: SingleDataSet = [];
    chartType = 'pie';
    chartColors: Color[] = [{
        backgroundColor: ['#f3452c', '#49c4c1', '#fcbd49', '#969bb2']
    }];

    constructor() {
    }

    ngOnChanges() {
        if (this.graphData) {
            this.chartData = [
                this.getCountOfLatitudeGreaterThanZero(),
                this.getCountOfLatitudeLessThanZero(),
                this.getCountOfLongitudeGreaterThanZero(),
                this.getCountOfLongitudeLessThanZero()
            ];
        }
    }

    getCountOfLatitudeGreaterThanZero(): number {
        return this.graphData.filter(value => +value.lat > 0).length;
    }

    getCountOfLatitudeLessThanZero(): number {
        return this.graphData.filter(value => +value.lat < 0).length;
    }

    getCountOfLongitudeGreaterThanZero() {
        return this.graphData.filter(value => +value.lng > 0).length;
    }

    getCountOfLongitudeLessThanZero() {
        return this.graphData.filter(value => +value.lng < 0).length;
    }

}
