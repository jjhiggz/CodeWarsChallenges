
def divisors(integer):
  array =[]
  for i in range(2,integer):
      if(integer % i == 0 ):
          array.append(i)
  if( len( array ) > 0 ):
      return array
  return f'{integer} is prime'