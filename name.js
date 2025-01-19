/**
 Write a program that iterates over an array of names
 and logs each name to the console with its index.
  Hint.forEach()
 */

  const names = ['Ram', 'Shyam', 'Hari', 'Alex', 'David']

  names.forEach(indexing)

  function indexing(name, index){
    console.log(index+1, name)
  }



// names.forEach((name, index) => console.log(index, name));