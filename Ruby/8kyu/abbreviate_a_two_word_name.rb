# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# Patrick Feeney => P.F


# My solution
def abbrev_name(name)
  name.split(' ').map do |word|
    word[0].upcase
  end .join('.')
end