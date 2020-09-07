// DebounceTime
// Only emits values that exceed a certain time interval since the last value emitted.
// The time interval is specified in milliseconds.
import { debounceTime, map } from 'rxjs/operators';
import { of, interval } from 'rxjs';

console.log('starting debounceTime example');
const whiskeys$ = of('Lagavulin 16', 'Bookers', 'Stagg Jr.', 'Blantons', 'Macallan 12');
const numbers$ = interval(2000);

numbers$.pipe(
    debounceTime(4000),
).subscribe(console.log);

// whiskeys$.pipe(
//     map(console.log),
//     debounceTime(2000),
//     map(console.log),
// ).subscribe();

console.log('ending debounceTime example');
