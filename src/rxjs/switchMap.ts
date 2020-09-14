import { interval, of } from "rxjs";
// SwitchMap Operator:
// Projects each source value to an Observable which is merged in
// the output Observable, emitting values only from the most recently
// projected Observable.
import { map, switchMap, tap } from "rxjs/operators";

const letterObs = of("a", "b", "c");
const intervalObs = interval(1000).pipe(
	map((x) => {
		return "Second " + (x + 1);
	})
);

letterObs
	.pipe(
		switchMap((x) => {
			return of(x + 1, x + 2, x + 3);
		})
	)
	.subscribe(console.log);

interval(1000)
	.pipe(
		switchMap((x) => {
			return of(x + "a", x + "b", x + "c");
		})
	)
	.subscribe(console.log);

interval(5000)
	.pipe(
		switchMap((x) => {
			return intervalObs;
		})
	)
	.subscribe(console.log);
