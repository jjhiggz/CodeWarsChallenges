def to_camel_case(text):
  is_upper = False

  if(len(text) > 0):
    if(text[0].isupper()):
      print(text[0])
      print(text[0].isupper())
      is_upper = True
      
    text = text.lower()

    def change_char_at(string, position, replacement):
      return string[:position]+replacement+string[position+1:]

    for index in range(len(text)):
      if (text[index] == '-' or text[index] == '_'):
        text = change_char_at(text, index + 1, text[index + 1].upper())

    text = text.replace('-', '').replace('_', '')

    if(is_upper):
      text = change_char_at(text, 0, text[0].upper())

    return text
  else:
    return ''
