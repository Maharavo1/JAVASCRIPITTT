function customSplice(arr) {
    const removedElements = arr.splice(1,2);
    return removedElements;
  }
  const arr = ["apple", "banana", "cherry", "date"];
  var result = customSplice(arr);
  console.log(result); 
  
  