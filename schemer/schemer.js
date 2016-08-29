/* see "TESTING", at the bottom */

function car(lat) {
	return lat[0];
}

function cdr(lat) {
	var nu = [], i = 1, l = lat.length;
	for(; i < l; i++) {
		nu.push(lat[i]);
	}
	return nu;
}

function cons(a, lat) {
	var nu = [a], i = 0, l = lat.length;
	for(; i < l; i++) {
		nu.push(lat[i]);
	}
	return nu;
}

function add1(n) {
	return n + 1;
}

function sub1(n) {
	return n - 1;
}

function numberQ(n) {
	return (typeof(n) == 'number');
}

function atomQ(n) {
	return (typeof(n) == ('number' || 'string'));
}


/* ======================  TESTING  ====================== */

function assert(condition, msg) {
	if (!condition) {
		throw new Error(msg);
	}
}

/* in JS, ['a'] != ['a'], so need this to compare two arrays: */
function same(list1, list2) {
	if (list1.length != list2.length) {
		return false;
	}
	for(var i=0, l=list1.length; i < l; i++) {
		if(list1[i] instanceof Array && list2[i] instanceof Array) {
			if (same(list1[i], list2[i]) === false) {
				return false;
			}
		} else {
			if(list1[i] !== list2[i]) {
				return false;
			}
		}
	}
	return true;
}

var lat = ['a', 'b', 'c'];
assert(car(lat) == 'a', 'car');
assert(same(cdr(lat), ['b', 'c']), 'cdr');
assert(same(cons('~', lat), ['~', 'a', 'b', 'c']), 'cons');
assert(car(lat) == 'a', 'lat unchanged');
assert(add1(9) == 10, 'add1');
assert(sub1(9) == 8, 'sub1');
assert(numberQ(9) === true, 'numberQ');
assert(numberQ('3') === false, 'numberQ not converting');
assert(atomQ(9) === true, 'atomQ');
assert(atomQ(lat) === false, 'atomQ2');


