
const [string1, string2] = [process.argv[2], process.argv[3]]

if (process.argv.length !== 4) throw("needs more arguments")

function isSubstring(s1, s2) {
	for (let i = 0; i < s2.length; i++) {
			if (s2.slice(i + 1) + s2.slice(0, i + 1) === s1) return true
	}

	return false
}

function isSubstringTrick(s1, s2) {
	 let r = 0;
	 const combined = s2 + s2
	 for (let i = 0; i < combined.length; i++) {
		 if (combined[i] === s1[r]) {
			 r++
		 } else {
			 r = 0;
		 }
		 
		 if (r === s1.length) return true;
	 }

	 return false
}


console.log(isSubstringTrick(string1, string2))