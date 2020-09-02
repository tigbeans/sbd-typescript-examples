// Pluck Operator:
// A streamlined version of the map operator
// Turns your object observable into an observable of a property on that object
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

const source = from([
    { 
        name: 'Willet', 
        age: 12, 
        distillery: { 
            name: 'hello' 
        } 
    },
    { 
        name: 'Lagavulin', 
        age:16 
    }
]);

const subscription = source.pipe(
    pluck('distillery')
).subscribe(console.log);