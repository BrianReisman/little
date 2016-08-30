/* see "TESTING", at the bottom */

/* =========== primitives =========== */

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
	return ((typeof(n) == 'number') || (typeof(n) == 'string'));
}


/* ========== exercises from book ============ */

function rember(a, lat) {
	if(!lat.length) { return lat; }
	if(car(lat) == a) {
		return cdr(lat);
	} else {
		return cons(car(lat), rember(a, cdr(lat)));
	}
}

/* only works with a list of lats */
function firsts(l) {
	if(!l.length) { return l; }
	return cons(car(car(l)), firsts(cdr(l)));
}


function insertr(new1, old1, lat) {
	if(!lat.length) { return lat; }
	if(car(lat) == old1) {
		return cons(old1, cons(new1, cdr(lat)));
	} else {
		return cons(car(lat), insertr(new1, old1, cdr(lat)));
	}
}


function insertl(new1, old1, lat) {
	if(!lat.length) { return lat; }
	if(car(lat) == old1) {
		return cons(new1, cons(old1, cdr(lat)));
	} else {
		return cons(car(lat), insertl(new1, old1, cdr(lat)));
	}
}


function subst(new1, old1, lat) {
	if(!lat.length) { return lat; }
	if(car(lat) == old1) {
		return cons(new1, cdr(lat));
	} else {
		return cons(car(lat), subst(new1, old1, cdr(lat)));
	}
}


function subst2(new1, old1, old2, lat) {
	if(!lat.length) { return lat; }
	if(car(lat) == old1 || car(lat) == old2) {
		return cons(new1, cdr(lat));
	} else {
		return cons(car(lat), subst2(new1, old1, old2, cdr(lat)));
	}
}


function multirember(a, lat) {
	if(!lat.length) { return lat; }
	if(car(lat) == a) {
		return multirember(a, cdr(lat));
	} else {
		return cons(car(lat), multirember(a, cdr(lat)));
	}
}


function multiinsertr(new1, old1, lat) {
	if(!lat.length) { return lat; }
	if(car(lat) == old1) {
		return cons(old1, cons(new1, multiinsertr(new1, old1, cdr(lat))));
	} else {
		return cons(car(lat), multiinsertr(new1, old1, cdr(lat)));
	}
}


function multiinsertl(new1, old1, lat) {
	if(!lat.length) { return lat; }
	if(car(lat) == old1) {
		return cons(new1, cons(old1, multiinsertl(new1, old1, cdr(lat))));
	} else {
		return cons(car(lat), multiinsertl(new1, old1, cdr(lat)));
	}
}


function multisubst(new1, old1, lat) {
	if(!lat.length) { return lat; }
	if(car(lat) == old1) {
		return cons(new1, multisubst(new1, old1, cdr(lat)));
	} else {
		return cons(car(lat), multisubst(new1, old1, cdr(lat)));
	}
}


function plus(n, m) {
	if(m == 0) { return n; }
	return plus(add1(n), sub1(m));
}


function minus(n, m) {
	if(m == 0) { return n; }
	return minus(sub1(n), sub1(m));
}


function mult(n, m) {
	if(m == 1) { return n; }
	return plus(n, mult(n, sub1(m)));
}


function lt(n, m) {
	if(m == 0) { return false; }
	if(n == 0) { return true; }
	return lt(sub1(n), sub1(m));
}


function gt(n, m) {
	if(n == 0) { return false; }
	if(m == 0) { return true; }
	return gt(sub1(n), sub1(m));
}


function div(n, m) {
	if(lt(n, m)) { return 0; }
	return add1(div(minus(n, m), m));
}


function addtup(tup) {
	if(!tup.length) { return 0; }
	return plus(car(tup), addtup(cdr(tup)));
}


function tupp(tup1, tup2) {
	if(!tup1.length) { return tup2; }
	if(!tup2.length) { return tup1; }
	return cons(plus(car(tup1), car(tup2)), tupp(cdr(tup1), cdr(tup2)));
}


function pwr(n, m) {
	if(m == 0) { return 1; }
	return mult(n, pwr(n, sub1(m)));
}


function length(lat) {
	if(!lat.length) { return 0; }
	return add1(length(cdr(lat)));
}


function pick(n, lat) {
	if(n == 1) { return car(lat); }
	return pick(sub1(n), cdr(lat));
}


function rempick(n, lat) {
	if(n == 1) { return cdr(lat); }
	return cons(car(lat), rempick(sub1(n), cdr(lat)));
}


function no_nums(lat) {
	if(!lat.length) { return lat; }
	if(numberQ(car(lat))) {
		return no_nums(cdr(lat));
	} else {
		return cons(car(lat), no_nums(cdr(lat)));
	}
}


function all_nums(lat) {
	if(!lat.length) { return lat; }
	if(numberQ(car(lat))) {
		return cons(car(lat), all_nums(cdr(lat)));
	} else {
		return all_nums(cdr(lat));
	}
}


function occur(a, lat) {
	if(!lat.length) { return 0; }
	if(car(lat) == a) {
		return add1(occur(a, cdr(lat)));
	} else {
		return occur(a, cdr(lat));
	}
}


function rember2(a, l) {
	if(!l.length) { return l; }
	if(atomQ(car(l))) {
		if(car(l) == a) {
			return rember2(a, cdr(l));
		} else {
			return cons(car(l), rember2(a, cdr(l)));
		}
	} else {
		return cons(rember2(a, car(l)), rember2(a, cdr(l)));
	}
}


function insertr2(new1, old1, l) {
	if(!l.length) { return l; }
	if(atomQ(car(l))) {
	} else {
	}
}



function insertl2(new1, old1, l) {
	if(!l.length) { return l; }
	if(atomQ(car(l))) {
	} else {
	}
}


function member2(a, l) {
	if(atomQ(car(l))) {
	} else {
	}
}


function leftmost(l) {
	
}


function eqlistQ(l1, l2) {
	
}


/* ======================  TESTING  ====================== */

/* in JS, ['a'] != ['a'], so need this to compare two arrays: */
function same(list1, list2) {
	if((list1 instanceof Array) === false || (list2 instanceof Array) === false) {
		return false;
	}
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

/* test val1 and val2 are equal, or display & halt with message */
function test(val1, val2, message) {
	var condition = null;
	if(val1 instanceof Array && val2 instanceof Array) {
		condition = same(val1, val2);
	} else {
		condition = (val1 == val2);
	}
	if (!condition) {
		console.log("val1 = " + val1);
		console.log("val2 = " + val2);
		throw new Error(message);
	}
}

// easy lists to test:
var abc = ['a','b','c'];
var derek = ['d','e','r','e','k'];
var a1b2c3 = ['a',1,'b',2,'c',3];
var abcdefghi = [['a','b','c'],['d','e','f'],['g','h','i']];
var abcabc = [['a','b'], [[['c']],'a'], 'b', ['c']];
// primitives:
test(car(abc), 'a', 'car');
test(cdr(abc), ['b', 'c'], 'cdr');
test(cons('x', abc), ['x', 'a', 'b', 'c'], 'cons');
test(car(abc), 'a', 'abc unchanged');
test(add1(9), 10, 'add1');
test(sub1(9), 8, 'sub1');
test(numberQ(9), true, 'numberQ');
test(numberQ('3'), false, 'numberQ not string');
test(atomQ(9), true, 'atomQ');
test(atomQ('a'), true, 'atomQ');
test(atomQ(abc), false, 'atomQ+');
// exercises:
test(rember('e', derek), ['d','r','e','k'], 'rember');
test(firsts(abcdefghi), ['a','d','g'], 'firsts');
test(insertr('X', 'e', derek), ['d','e','X','r','e','k'], 'insertr');
test(insertl('X', 'e', derek), ['d','X','e','r','e','k'], 'insertl');
test(subst('X', 'e', derek),  ['d','X','r','e','k'], 'subst');
test(subst2('X', 'd', 'e', derek), ['X','e','r','e','k'], 'subst2');
test(multirember('e', derek), ['d','r','k'], 'multirember');
test(multiinsertr('X', 'e', derek), ['d','e','X','r','e','X','k'], 'multiinsertr');
test(multiinsertl('X', 'e', derek), ['d','X','e','r','X','e','k'], 'multiinsertl');
test(multisubst('X', 'e', derek), ['d','X','r','X','k'], 'multisubst');
test(plus(5, 3), 8, 'plus');
test(minus(5, 3), 2, 'minus');
test(mult(5, 4), 20, 'mult');
test(lt(5, 4), false, 'lt');
test(gt(5, 4), true, 'gt');
test(div(15, 3), 5, 'div');
test(div(16, 3), 5, 'div+');
test(addtup([1,2,3,4]), 10, 'addtup');
test(tupp([2,4,6],[3,5,7]), [5,9,13], 'tupp');
test(tupp([2,4,6,8],[3,5,7]), [5,9,13,8], 'tupp+');
test(pwr(5, 3), 125, 'pwr');
test(length(abc), 3, 'length');
test(pick(3, derek), 'r', 'pick');
test(rempick(2, abc), ['a','c'], 'rempick');
test(no_nums(a1b2c3), ['a','b','c'], 'no_nums');
test(all_nums(a1b2c3), [1,2,3], 'all_nums');
test(occur('e', derek), 2, 'occur');
test(rember2('b', abcabc), [['a'],[[['c']],'a'],['c']], 'rember2');
//test(insertr2('X', 'b', abcabc), [['a','b','X'],[[['c']],'a'],'b','X',['c']], 'insertr2');
//test(insertl2('X', 'b', abcabc), [['a','X','b'],[[['c']],'a'],'X','b',['c']], 'insertl2');
//test(member2('c', abcabc), true, 'member2');
