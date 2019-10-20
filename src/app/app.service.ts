import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './_models/User.model';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private httpClient: HttpClient) {
    }

    getUsersData(): Observable<User[]> {
        return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
    }
}
