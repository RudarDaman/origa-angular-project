import {Component, Input} from '@angular/core';

import {FilteredData} from '../_models/FilteredData.model';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {

    @Input() usersData: FilteredData[];
    displayedColumns: string[] = ['sno', 'name', 'username', 'city', 'pincode', 'company-name'];

    constructor() {
    }
}
