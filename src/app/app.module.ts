import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DataTableComponent} from './data-table/data-table.component';
import {DataFilterPipe} from './data-filter.pipe';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import { PercentageBoxComponent } from './percentage-box/percentage-box.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        DataTableComponent,
        DataFilterPipe,
        PieChartComponent,
        PercentageBoxComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ChartsModule,
        BrowserAnimationsModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
