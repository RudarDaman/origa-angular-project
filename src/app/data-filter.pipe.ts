import {Pipe, PipeTransform} from '@angular/core';
import {User} from './_models/User.model';

@Pipe({
    name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

    transform(value: User[], ...args: any[]): any {
        if (value) {
            const filteredData = [];
            value.forEach(user => {
                const newData = {};
                args.forEach(argument => {
                    if (argument === 'name') {
                        newData[argument] = user.name;
                    } else if (argument === 'userName') {
                        newData[argument] = user.username;
                    } else if (argument === 'city') {
                        newData[argument] = user.address.city;
                    } else if (argument === 'pincode') {
                        newData[argument] = user.address.zipcode;
                    } else if (argument === 'companyName') {
                        newData[argument] = user.company.name;
                    } else if (argument === 'lat') {
                        newData[argument] = user.address.geo.lat;
                    } else if (argument === 'lng') {
                        newData[argument] = user.address.geo.lng;
                    }
                });
                filteredData.push(newData);
            });
            return filteredData;
        }
    }

}
