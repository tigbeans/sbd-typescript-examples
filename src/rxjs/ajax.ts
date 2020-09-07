//
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { XMLHttpRequest } from 'xmlhttprequest';

function createXHR() {
    return new XMLHttpRequest();
}

const data$ = ajax({createXHR, url: 'http://dummy.restapiexample.com/api/v1/employees'})
    .pipe(
        map(data => {
            console.log('data', data.xhr)
        })
    );

data$.subscribe();