// Pluck Operator:
// A streamlined version of the map operator
// Turns your object observable into an observable of a property on that object
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

// from just creates an observable from an array
const source = from([
    { 
        name: 'Buffalo Trace Bourbon', 
        age: 8, 
        distillery: { 
            name: 'Buffalo Trace Distillery',
            location: 'Kentucky - United States'
        } 
    },
    { 
        name: 'Lagavulin 16', 
        age: 16,
        distillery: {
            name: 'Lagavulin Distillery',
            location: 'Islay - Scotland'
        }
    },
    {
        name: 'Colorado Mountain Bourbon Whiskey',
        age: 2,
        distillery: {
            name: 'Axe and Oak Distillery',
            location: 'Colorado - United States'
        }
    }
]);

// EX1: pluck the name string from the objects in our source observable.
source.pipe(
    pluck('name')
).subscribe(console.log);

console.log('\n');

// EX2: pluck the distillery object from the objects in our source observable.
source.pipe(
    pluck('distillery')
).subscribe(console.log);

console.log('\n');

// EX3: pluck the name string in the distillery object from the objects in our source observable.
source.pipe(
    pluck('distillery', 'name')
).subscribe(console.log);

console.log('\n');

// EX4: pluck the name string in the distillery object from the objects in our source observable.
source.pipe(
    pluck('distillery'),
    pluck('name')
).subscribe(console.log);

console.log('\n');