

let n=13;
let count=0
	for (let k = 1; k <= n; k++) {
		if (n % k == 0) {
			count++;
		}
	}
	if (count == 2) {
		console.log("prime number");
	}
	else {
		console.log("not a prime number");
	}
