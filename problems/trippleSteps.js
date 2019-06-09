//given N amount of steps a away you can reach.
//And you can jump 1, 2, or 3 steps at a time. 
//What is the amount of combinations to get to N steps.
// (e.g) trippleSteps(3) = 4, because there are 4 ways to get to step 3.

const num = process.argv[2] || 0;

function trippleSteps(n) {
	if (n < 0) {
		return 0;
	} else if (n === 0) {
		return 1;
	} else {
		return trippleSteps(n-1) + trippleSteps(n - 2) + trippleSteps(n - 3)
	}
}

function trippleStepsDp(n) {
	const ar = new Array(n + 1)

	ar[0] = 0
	ar[1] = 1
	ar[2] = 2
	ar[3] = 4

	for (let i = 0; i <= n; i++) {
		if (ar[i] === 0 || ar[i]) continue
		ar[i] = ar[i - 3] + ar[i - 2] + ar[i - 1] 
	}

	return ar[n]
}

console.log(trippleStepsDp(+num))