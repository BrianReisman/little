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

# remove first occurence of a in lat
def rember(a, lat)
	return [] if lat == []
	return cdr(lat) if car(lat) == a
	cons(car(lat), rember(a, cdr(lat)))
end

def firsts(l)
	l.dup.map(&:shift)
end

# 3rd COMMANDMENT:
# When building a list, describe the first typical element, then cons it onto the recursion

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
	puts "tup1 is #{tup1.inspect}, tup2 is #{tup2.inspect}"
	#return [] if (tup1 == [] || tup2 == [])
	return tup2 if tup1 == []
	return tup1 if tup2 == []
	cons(plus(car(tup1), car(tup2)), tupp(cdr(tup1), cdr(tup2)))
end
puts (tupp([1, 3, 5], [2, 4, 6, 8])).inspect

