import {Pipe} from 'angular2/core';

@Pipe({
    name: 'pagination'
})

export class PaginationPipe {
    constructor() {
    }

    transform(value, [filters]) {
        let range = 10;
        if (typeof value === 'undefined') {
            return;
        }

        let copiedArr = value.slice();

        if(typeof filters !== 'undefined') {
            range = filters.range;
            copiedArr = value.slice(range * (filters.page - 1));
        }
        
        return copiedArr.splice(0, range);
    }
}