const array = [0, 1, 2, 0, 3, 0]

function moveZeros(array) {
	let i = 0;
	let j;

	while (i < array.length && j < array.length) {
		if (array[i] === 0) {
			if (isNaN(j))
			while (j < array.length && array[j] === 0) {
				j++
			}
			
			if (j < array.length && array[j] !== 0) {
				swap(array, i, j)
			}
		}
		i++
	}
}

function swap(ar, i, j) {
		const temp = ar[i]
		ar[i] = ar[j]
		ar[j] = temp
}
moveZeros(array)

console.log(array)