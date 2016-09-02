/* see "TESTING", at the bottom */

/* In function names: since JavaScript can't use special chars in function names:
 * Q = ? and  2 = *
*/

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

/* needed to make these a function so they can be passed as arguments in ch. 8+ */
var eqQ = equalQ = function(x, y) { return (x == y); };


/* ========== exercises from book ============ */

function memberQ(a, lat) {
	if(!lat.length) { return false; }
	if(car(lat) == a) { return true; }
	return memberQ(a, cdr(lat));
}


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
		if(car(l) == old1) {
			return cons(old1, cons(new1, insertr2(new1, old1, cdr(l))));
		} else {
			return cons(car(l), insertr2(new1, old1, cdr(l)));
		}
	} else {
		return cons(insertr2(new1, old1, car(l)), insertr2(new1, old1, cdr(l)));
	}
}



function insertl2(new1, old1, l) {
	if(!l.length) { return l; }
	if(atomQ(car(l))) {
		if(car(l) == old1) {
			return cons(new1, cons(old1, insertl2(new1, old1, cdr(l))));
		} else {
			return cons(car(l), insertl2(new1, old1, cdr(l)));
		}
	} else {
		return cons(insertl2(new1, old1, car(l)), insertl2(new1, old1, cdr(l)));
	}
}


function member2(a, l) {
	if(!l.length) { return false; }
	if(atomQ(car(l))) {
		if(car(l) == a) {
			return true;
		} else {
			return member2(a, cdr(l));
		}
	} else {
		return (member2(a, car(l)) || member2(a, cdr(l)));
	}
}


function leftmost(l) {
	if(atomQ(car(l))) {
		return car(l);
	} else {
		return leftmost(car(l));
	}
}


function eqlistQ(l1, l2) {
	if(!l1.length && !l2.length) { return true; }
	if(!l1.length || !l2.length) { return false; }
	if(atomQ(car(l1)) && atomQ(car(l2))) {
		if(car(l1) == car(l2)) {
			return true;
		} else {
			return false;
		}
	} else {
		return (eqlistQ(car(l1), car(l2)) && eqlistQ(cdr(l1), cdr(l2)));
	}
}


function setQ(lat) {
	if(!lat.length) { return true; }
	if(memberQ(car(lat), cdr(lat))) { return false; }
	return setQ(cdr(lat));
}


function makeset(lat) {
	if(!lat.length) { return lat; }
	return cons(car(lat), multirember(car(lat), makeset(cdr(lat))));
}


/* each atom in set1 is also in set2? */
/* NOTE: these fail if the lists passed in are not already a set */
function subsetQ(set1, set2) {
	if(!set1.length) { return true; }
	return ((memberQ(car(set1), set2)) && (subsetQ(cdr(set1), set2)));
}


function eqsetQ(set1, set2) {
	return ((subsetQ(set1, set2)) && (subsetQ(set2, set1)));
}

/* at least one atom in set1 is in set2 */
function intersectQ(set1, set2) {
	if(!set1.length) { return false; }
	return ((memberQ(car(set1), set2)) || intersectQ(cdr(set1), set2));
}

/* list of things in set1 also in set2 */
function intersect(set1, set2) {
	if(!set1.length) { return []; }
	if(memberQ(car(set1), set2)) {
		return cons(car(set1), intersect(cdr(set1), set2));
	} else {
		return intersect(cdr(set1), set2);
	}
}


function union(set1, set2) {
	if(!set1.length) { return set2; }
	if(memberQ(car(set1), set2)) {
		return union(cdr(set1), set2);
	} else {
		return cons(car(set1), union(cdr(set1), set2));
	}
}

/* list of atoms in all sets : THIS ONE STUMPED ME */ 
function intersectall(setlist) {
	if(cdr(setlist).length == 0) { return car(setlist); }
	return (intersect(car(setlist), intersectall(cdr(setlist))));
}


function a_pairQ(x) {
	if(atomQ(x)) { return false; }
	if(x.length == 0) { return false; }
	if(cdr(x).length == 0) { return false; }
	if(cdr(cdr(x)).length == 0) { return true; }
	return false;
}


function first(p) {
	return car(p);
}


function second(p) {
	return car(cdr(p));
}


function third(l) {
	return car(cdr(cdr(l)));
}


function build(s1, s2) {
	return cons(s1, cons(s2, []));
}

/* a "relation" (rel) is a set (unique!) of pairs */
/* a "function" (fun) is a relation whose firsts are unique. WTF naming?!? */
function funQ(rel) {
	return setQ(firsts(rel));
}

function fullfunQ(rel) { /* AKA one_to_oneQ */
	return setQ(seconds(rel));
}

function revpair(p) {
	return build(second(p), first(p));
}

function revrel(rel) {
	if(!rel.length) { return []; }
	return cons(revpair(car(rel)), revrel(cdr(rel)));
}

/* ---  ch8  ---  "_f" means takes a function,  "_C" mean "curry" */

function remberf(funk, a, l) {
	if(!l.length) { return []; }
	if(funk(a, car(l))) {
		return cdr(l);
	} else {
		return cons(car(l), remberf(funk, a, cdr(l)));
	}
}


function eqQC(a) {
	return function(x) {
		return eqQ(x, a);
	};
}

/* arguments.callee is a JavaScript trick to refer to the current anonymous function */
function remberfC(funk) {
	return function(a, l) {
		if(!l.length) { return []; }
		if(funk(a, car(l))) {
			return cdr(l);
		} else {
			return cons(car(l), arguments.callee(a, cdr(l)));
		}
	};
}
var remberEQ = remberfC(eqQ);


function seqL(new1, old1, l) {
	return cons(new1, cons(old1, l));
}

function seqR(new1, old1, l) {
	return cons(old1, cons(new1, l));
}

function seqS(new1, old1, l) {
	return cons(new1, l);
}

function seqrem(new1, old1, l) {
	return l;
}

function insert_g(seq) {
	return function(new1, old1, l) {
		if(!l.length) { return []; }
		if(car(l) == old1) {
			// return seq(new1, old1, arguments.callee(new1, old1, cdr(l))); // multi
			return seq(new1, old1, cdr(l));
		} else {
			return cons(car(l), arguments.callee(new1, old1, cdr(l)));
		}
	};
}

var insertL = insert_g(seqL);
var insertR = insert_g(seqR);
var subst3  = insert_g(seqS);
var rember3 = insert_g(seqrem);

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
var ab = ['a','b'];
var ab2 = [['a'],['b']];
var abc = ['a','b','c'];
var derek = ['d','e','r','e','k'];
var a1b2c3 = ['a',1,'b',2,'c',3];
var abcdef = [['a','b'], ['c','d'], ['e','f']];
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
test(memberQ('k', derek), true, 'memberQ');
test(memberQ('q', derek), false, 'memberQ');
test(rember('e', derek), ['d','r','e','k'], 'rember');
test(firsts(abcdefghi), ['a','d','g'], 'firsts');
test(firsts(abcdef), ['a','c','e'], 'firsts');
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
test(insertr2('X', 'b', abcabc), [['a','b','X'],[[['c']],'a'],'b','X',['c']], 'insertr2');
test(insertl2('X', 'b', abcabc), [['a','X','b'],[[['c']],'a'],'X','b',['c']], 'insertl2');
test(member2('c', abcabc), true, 'member2');
test(member2('z', abcabc), false, 'member2+');
test(leftmost(abcdefghi), 'a', 'leftmost');
test(eqlistQ(abcabc, abcabc), true, 'eqlistQ');
test(eqlistQ(abcabc, abcdefghi), false, 'eqlistQ+');
test(setQ(a1b2c3), true, 'set');
test(setQ(derek), false, 'set+');
test(makeset(derek), ['d','e','r','k'], 'makeset');
test(subsetQ(abc, a1b2c3), true, 'subsetQ');
test(eqsetQ(abc, ['b','c','a']), true, 'eqsetQ');
test(eqsetQ(abc, ['b','a']), false, 'eqsetQ+');
test(eqsetQ(['c','b'], abc), false, 'eqsetQ++');
test(intersectQ(a1b2c3, abc), true, 'intersectQ');
test(intersectQ(a1b2c3, ['x','t']), false, 'intersectQ+');
test(intersect(a1b2c3, abc), abc, 'intersect');
test(intersect(abc, a1b2c3), abc, 'intersect+');
test(union(a1b2c3, abc), [1,2,3,'a','b','c'], 'union');
test(intersectall([abc, a1b2c3, ['b','a','t']]), ['a','b'], 'intersectall');
test(a_pairQ(ab), true, 'a_pairQ');
test(a_pairQ(ab2), true, 'a_pairQ');
test(a_pairQ(abc), false, 'a_pairQ+');
test(a_pairQ('x'), false, 'a_pairQ++');
test(a_pairQ([]), false, 'a_pairQ+++');
test(a_pairQ([[2],['pair']]), true, 'a_pairQ!');
test(a_pairQ(['a',['b']]), true, 'a_pairQ!!');
test(first(ab), 'a', 'first');
test(second(ab2), ['b'], 'second');
test(third(abcdef), ['e','f'], 'third');
test(build('a','b'), ab, 'build');
test(build(['a'],['b']), ab2, 'build');
test(funQ([['a','b'],['c','d'],['e','f']]), true, 'funQ');
test(funQ([['a','b'],['c','d'],['e','b']]), true, 'funQ+');
test(funQ([['a','b'],['c','d'],['a','f']]), false, 'funQ++');
test(revpair(['b','a']), ab, 'revpair');
test(revpair([['b'],['a']]), ab2, 'revpair+');
test(revrel(abcdef), [['b','a'],['d','c'],['f','e']], 'revrel');
test(remberf(eqQ, 'b', abc), ['a','c'], 'remberf');
test(remberf(same, ['c','d'], abcdef), [['a','b'],['e','f']], 'remberf+');
test(eqQC('h')('x'), false, 'ecQC');
test(eqQC('h')('h'), true, 'ecQC+');
test(remberEQ('e', derek), ['d','r','e','k'], 'remberfC');
test(remberEQ(second, [first,second,third]), [first,third], 'remberFC+');
test(insert_g(seqL)('x','e',derek), ['d','x','e','r','e','k'], 'insert_gL');
test(insertL('x','e',derek), ['d','x','e','r','e','k'], 'insertL');
test(insert_g(seqR)('x','e',derek), ['d','e','x','r','e','k'], 'insert_gR');
test(insertR('x','e',derek), ['d','e','x','r','e','k'], 'insertR');
test(insert_g(seqS)('x','e',derek), ['d','x','r','e','k'], 'insert_gS');
test(subst3('x','e',derek), ['d','x','r','e','k'], 'subst3');
test(rember3(false,'e',derek), ['d','r','e','k'], 'rember3');

