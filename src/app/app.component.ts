import {Component, OnInit} from '@angular/core';
import {User} from './_models/User.model';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    usersData: User[];

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.appService.getUsersData().subscribe((usersResponse) => {
            this.usersData = usersResponse;
        }, () => {
            console.log('Not able to get users data.');
        });
    }


}
