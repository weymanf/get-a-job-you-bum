// For a string checking if any permutation has a palindrome in it

const string = process.argv[2]

function anyPalindrome(s) {
	const hash = {}
	const ignoreWhiteSpace = s.replace(' ', '')

	for (c of ignoreWhiteSpace) {
		if (hash[c]) {
			hash[c]++
		} else {
			hash[c] = 1
		}
	}

	const nonPairs = Object.values(hash).filter(v => {
		return v % 2 !== 0
	})

	if (ignoreWhiteSpace.length % 2 === 0) {
		return nonPairs.length === 0
	} else {
		return nonPairs.length === 1
	}
}

console.log(anyPalindrome(string))