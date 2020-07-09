
def abbrevName(name):
    name_array= name.split(' ')
    abb_name_array = []
    
    for word in name_array:
        abb_name_array.append(word[0].upper())
        
    return '.'.join(abb_name_array)