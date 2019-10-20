import {Component, Input} from '@angular/core';
import {User} from '../_models/User.model';

@Component({
    selector: 'app-percentage-box',
    templateUrl: './percentage-box.component.html',
    styleUrls: ['./percentage-box.component.scss']
})
export class PercentageBoxComponent {

    @Input() usersCount: User[];

    constructor() {
    }

}
