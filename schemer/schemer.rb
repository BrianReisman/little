### primitives:

def car(lat)
	lat[0]
end

def cdr(lat)
	lat[1..-1]
end

def cons(a, lat)
	lat.dup.unshift(a)
end

def add1(n)
	n + 1
end

def sub1(n)
	n - 1
end

def number?(n)
	n.class == Fixnum
end

def atom?(s)
	s.class != Array
end

### from book 

# remove first occurence of a in lat
def rember(a, lat)
	return [] if lat == []
	return cdr(lat) if car(lat) == a
	cons(car(lat), rember(a, cdr(lat)))
end

def firsts(l)
	l.dup.map(&:shift)
end

def firsts(l)
	return [] if l == []
	cons(car(car(l)), firsts(cdr(l)))
end

# insert new1 to the right of old1 
def insertr(new1, old1, lat)
	return [] if lat == []
	if old1 == car(lat)
		cons(old1, cons(new1, cdr(lat)))
	else
		cons(car(lat), insertr(new1, old1, cdr(lat)))
	end
end

# insert new1 to the left of old1 
def insertl(new1, old1, lat)
	return [] if lat == []
	return cons(new1, lat) if old1 == car(lat)
	cons(car(lat), insertl(new1, old1, cdr(lat)))
end

# replace first old1 with new1
def subst(new1, old1, lat)
	return [] if lat == []
	return cons(new1, cdr(lat)) if old1 == car(lat)
	cons(car(lat), subst(new1, old1, cdr(lat)))
end

# replace first old1 or old2 with new1
def subst2(new1, old1, old2, lat)
	return [] if lat == []
	return cons(new1, cdr(lat)) if (old1 == car(lat) || old2 == car(lat))
	cons(car(lat), subst2(new1, old1, old2, cdr(lat)))
end

# remove all a in lat
def multirember(a, lat)
	return [] if lat == []
	return multirember(a, cdr(lat)) if car(lat) == a
	cons(car(lat), multirember(a, cdr(lat)))
end

# insert new1 to the right of every old1 
def multiinsertr(new1, old1, lat)
	return [] if lat == []
	if old1 == car(lat)
		cons(old1, cons(new1, multiinsertr(new1, old1, cdr(lat))))
	else
		cons(car(lat), multiinsertr(new1, old1, cdr(lat)))
	end
end

# insert new1 to the left of every old1 
def multiinsertl(new1, old1, lat)
	return [] if lat == []
	if old1 == car(lat)
		cons(new1, cons(old1, multiinsertl(new1, old1, cdr(lat))))
	else
		cons(car(lat), multiinsertl(new1, old1, cdr(lat)))
	end
end

# replace every old1 with new1
def multisubst(new1, old1, lat)
	return [] if lat == []
	if old1 == car(lat)
		cons(new1, multisubst(new1, old1, cdr(lat)))
	else
		cons(car(lat), multisubst(new1, old1, cdr(lat)))
	end
end

def plus(n, m)
	return n if m == 0
	plus(add1(n), sub1(m))
end

def minus(n, m)
	return n if m == 0
	minus(sub1(n), sub1(m))
end

def mult(n, m)
	return 0 if m == 0
	plus(n, mult(n, sub1(m)))
end

# < "less than"
def lt(n, m)
	return false if m == 0
	return true if n == 0
	lt(sub1(n), sub1(m))
end

# > "greater than"
def gt(n, m)
	return false if n == 0
	return true if m == 0
	gt(sub1(n), sub1(m))
end

def div(n, m)
	return 0 if lt(n, m)
	add1(div(minus(n, m), m))
end

# sum
def addtup(tup)
	return 0 if tup == []
	plus(car(tup), addtup(cdr(tup)))
end

# returns array/tuple of summing same-position items in lists
def tupp(tup1, tup2)
	# if one list is shorter, the remains of other list are the final cons response
	return tup2 if tup1 == []
	return tup1 if tup2 == []
	cons(plus(car(tup1), car(tup2)), tupp(cdr(tup1), cdr(tup2)))
end
# see this example to understand:
# puts (tupp([1, 3, 5], [2, 4, 6, 8, 10, 12])).inspect

def eq?(n, m)
	return false if lt(n, m)
	return false if gt(n, m)
	true
end

def pwr(n, m)
	return 1 if m == 0
	mult(n, pwr(n, sub1(m)))
end

def length(lat)
	return 0 if lat == []
	add1(length(cdr(lat)))
end

def pick(n, lat)
	return car(lat) if n == 1
	pick(sub1(n), cdr(lat))
end

# lat with pick(n, lat) removed
def rempick(n, lat)
	return [] if lat == []
	return cdr(lat) if n == 1
	cons(car(lat), rempick(sub1(n), cdr(lat)))
end

# lat with numbers removed
def no_nums(lat)
	return [] if lat == []
	return no_nums(cdr(lat)) if number?(car(lat))
	cons(car(lat), no_nums(cdr(lat)))
end

# lat/tuple of only numbers from lat
def all_nums(lat)
	return [] if lat == []
	if number?(car(lat))
		cons(car(lat), all_nums(cdr(lat)))
	else
		all_nums(cdr(lat))
	end
end

# how many times atom appears in lat
def occur(a, lat)
	return 0 if lat == []
	if car(lat) == a 
		add1(occur(a, cdr(lat)))
	else
		occur(a, cdr(lat))
	end
end

def rember2(a, l)
	#puts "#{a}: l= #{l.inspect}"
	return [] if l == []
	if atom?(car(l))
		if car(l) == a
			rember2(a, cdr(l))
		else
			cons(car(l), rember2(a, cdr(l)))
		end
	else
		cons(rember2(a, car(l)), rember2(a, cdr(l)))  # <-- !!!
	end
end
#a = 'sauce'
#l = [['tomato', 'sauce'], [['bean'], 'sauce'], ['and', [['flying']], 'sauce']]
#puts rember2(a, l).inspect

def insertr2(new1, old1, l)
	return [] if l == []
	if atom?(car(l))
		if car(l) == old1
			cons(car(l), cons(new1, insertr2(new1, old1, cdr(l))))
		else
			cons(car(l), insertr2(new1, old1, cdr(l)))
		end
	else
		cons(insertr2(new1, old1, car(l)), insertr2(new1, old1, cdr(l)))
	end
end
#new1 = 'roast'
#old1 = 'chuck'
#l = [['how', 'much', ['wood']], 'could', [['a', ['wood'], 'chuck']], [[['chuck']]], ['if', ['a'], [['wood', 'chuck']]], 'could', 'chuck', 'wood']
#puts insertr2(new1, old1, l).inspect

def subst2(new1, old1, l)
	return [] if l == []
	if atom?(car(l))
		if car(l) == old1
			cons(new1, subst2(new1, old1, cdr(l)))
		else
			cons(car(l), subst2(new1, old1, cdr(l)))
		end
	else
		cons(subst2(new1, old1, car(l)), subst2(new1, old1, cdr(l)))
	end
end
#new1 = 'roast'
#old1 = 'chuck'
#l = [['how', 'much', ['wood']], 'could', [['a', ['wood'], 'chuck']], [[['chuck']]], ['if', ['a'], [['wood', 'chuck']]], 'could', 'chuck', 'wood']
#puts subst2(new1, old1, l).inspect

def insertl2(new1, old1, l)
	return [] if l == []
	if atom?(car(l))
		if car(l) == old1
			cons(new1, cons(old1, insertl2(new1, old1, cdr(l))))
		else
			cons(car(l), insertl2(new1, old1, cdr(l)))
		end
	else
		cons(insertl2(new1, old1, car(l)), insertl2(new1, old1, cdr(l)))
	end
end
#new1 = 'pecker'
#old1 = 'chuck'
#l = [['how', 'much', ['wood']], 'could', [['a', ['wood'], 'chuck']], [[['chuck']]], ['if', ['a'], [['wood', 'chuck']]], 'could', 'chuck', 'wood']
#puts insertl2(new1, old1, l).inspect

def member2(a, l)
	return false if l == []
	if atom?(car(l))
		((car(l) == a) || member2(a, cdr(l)))
	else
		(member2(a, car(l)) || member2(a, cdr(l)))
	end
end
#a = 'chips'
#l = [['potato'], ['chips', [['with'], 'fish'], ['chips']]]
#puts member2(a, l).inspect

# find leftmost atom in non-empty list that does not contain an empty list
def leftmost(l)
	if atom?(car(l))
		return car(l)
	else
		leftmost(car(l))
	end
end

def eqlist?(l1, l2)
	puts "#{l1.inspect} ++ #{l2.inspect}"
	return true if (l1 == [] && l2 == [])
	return false if (l1 == [] || l2 == [])
	if atom?(car(l1)) && atom?(car(l2))
		return false if car(l1) != car(l2)
		(eqlist?(cdr(l1), cdr(l2)))
	elsif atom?(car(l1)) || atom?(car(l2))
		return false
	else
		(eqlist?(car(l1), car(l2)) && eqlist?(cdr(l1), cdr(l2)))
	end
end
puts eqlist?(['a', [['b']], ['c']], ['a', [['b']], ['c']])
puts eqlist?(%w(a b c), ['a', 'b', 'c'])
puts eqlist?(%w(a b c), ['c', 'b', 'a'])


