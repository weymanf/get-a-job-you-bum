// DEEP CLONE AN object in javascript

const hash = {
	a: {b: 1},
	c: 14,
	d: [{e: 4}],
	f: [1,2,3,4]
}

const cloned = {}
function cloneHash() {
	Object.keys(hash).forEach(k => {
		let cloned;
		if (Array.isArray(hash[k])) {
			
		} else if (typeof hash[k] === 'object') {
			cloned = cloneHash(hash[k])
		} else {
			cloned = hash[k]
		}

		hash[k] = cloned
	})
}