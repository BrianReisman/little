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
	return (typeof(n) == ('number' || 'string'));
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
	
}


function tupp(tup1, tup2) {
	
}


function eqQ(n, m) {
	
}


function pwr(n, m) {
	
}


function length(lat) {
	
}


function pick(n, lat) {
	
}


function rempick(n, lat) {
	
}


function no_nums(lat) {
	
}


function all_nums(lat) {
	
}


function occur(a, lat) {
	
}


function rember2(a, l) {
	if(!l.length) { return l; }
	
}


function insertr2(new1, old1, l) {
	if(!l.length) { return l; }
	
}



function insertl2(new1, old1, l) {
	if(!l.length) { return l; }
	
}


function member2(a, l) {
	
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
var abcdefghi = [['a','b','c'],['d','e','f'],['g','h','i']];
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

