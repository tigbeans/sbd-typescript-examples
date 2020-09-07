// MergeMap Operator:
// Projects each source value to an Observable which is merged in the output Observable
import { mergeMap, map } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';


// Example 1
const obsOne = of('a', 'b', 'c');
const obsTwo = of(1, 2, 3);

obsOne.pipe(mergeMap( x => {
    return obsTwo.pipe(
        map( y => x + y )
    )
})).subscribe(console.log);






// Completely impractical Example 2
const obsThree: Observable<any> = from([
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

const obsFour: Observable<any> = from([
    { 
        name: 'Whiskey 1', 
        age: 4, 
        distillery: { 
            name: 'Distillery 1',
            location: 'United States'
        } 
    },
    { 
        name: 'Whiskey 2', 
        age: 25,
        distillery: {
            name: 'Distillery 2',
            location: 'Scotland'
        }
    },
    {
        name: 'Whiskey 3',
        age: 12,
        distillery: {
            name: 'Distillery 3',
            location: 'Japan'
        }
    }
]);

obsThree.pipe(mergeMap( x => {
    return obsFour.pipe(
        map( y => {
            return {
                nameCombo: x.name + ' - ' + y.name
            }
        } )
    )
})).subscribe(console.log);