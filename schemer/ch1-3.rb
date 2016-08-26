def car(lat)
	lat[0]
end

def cdr(lat)
	lat[1..-1]
end

def cons(a, lat)
	lat.dup.unshift(a)
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
	puts "l is #{l.inspect}"
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

#lat = %w(d e r e k)
#puts rember('e', lat).inspect
#puts rember('b', lat).inspect

#puts insertr('and', 'lettuce', %w(bacon lettuce tomato)).inspect
#puts insertr('b', 'a', %w(a c d e)).inspect
#puts insertr('f', 'e', %w(a b c d e)).inspect
#puts insertr('z', 'x', %w(a b c)).inspect

#puts insertl('a', 'b', %w(b c d)).inspect
#puts insertl('y', 'z', %w(w x z)).inspect
#puts insertl('dog', 'cat', %w(a b c)).inspect

#puts firsts([%w(a b c), %w(d e f), %w(g h i)]).inspect

#puts subst('i', 'o', %w(d o g)).inspect
#puts subst('i', 'o', %w(g o o d)).inspect

#puts subst2('vanilla', 'chocolate', 'banana', %w(banana ice cream with chocolate topping)).inspect

#puts multirember('e', %w(d e r e k)).inspect

#puts multiinsertr('x', 'e', %w(d e r e k)).inspect
#puts multiinsertl('x', 'e', %w(d e r e k)).inspect
#puts multiinsertl('x', 'a', %w(a b b a)).inspect

#

puts multisubst('i', 'o', %w(g o o d)).inspect
