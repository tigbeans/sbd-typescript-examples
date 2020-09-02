import { Observable } from 'rxjs';

class DoSomething {
    firstVariable: string;

    constructor(message: string) {
        console.log('Created DoSomething instance with message', message);
        this.firstVariable = message;
    }

    createObservable() {
        return new Observable( sub => {
            sub.next(1);
            sub.next(2);
            sub.next(3);
            setTimeout(() => {
                sub.next(4);
                sub.complete();
            }, 1000);
        });
    }
}

let doSomethingClass = new DoSomething("Hello bud");

console.log('Before createObservable() call');
doSomethingClass.createObservable().subscribe({
    next(x) { 
        console.log('Got value', x);
    },
    error(err) {
        console.error('something went wrong', err);
    },
    complete() {
        console.log('completed!');
    }
});

console.log('after createObservable() call');