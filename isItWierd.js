// https://www.hackerrank.com/challenges/py-if-else/problem

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird


const isItWierd = n => {
  if (n < 0 || n > 100) return 'Does not meet constraints'

  if (n % 2 === 1) return 'Weird'

  if (n < 6) return 'Not Weird'

  if (n >= 6 && n <= 20) return 'Weird'

  if (n > 20) return 'Not Weird'
}

