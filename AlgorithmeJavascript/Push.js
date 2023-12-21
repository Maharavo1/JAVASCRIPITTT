function customPush(arr, element) {
    const result = arr.push(element);
    return result;
    
  }
  
  const fruits = ["apple", "banana", "cherry"];
  const newLength = customPush(fruits, "date");
  console.log(fruits); // Sortie : ["apple", "banana", "cherry", "date"]

  