import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

    constructor() { }

    // filter function receiving patients list data, data for filtering or seraching , 
    // props(property on which filter will be applied)
    // Return the patient list of matched patients..
    filter<T>(items: T[], data: string, props: string[]) {
        return items.filter((item: T) => {
            let match = false;
            for (const prop of props) {
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                    match = true;
                    break;
                }
            }
            return match;
        });
    }

}
