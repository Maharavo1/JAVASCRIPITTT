function max() {
   let number = [1,2,3,4,5,6,7]

   const result = Math.max(...number)
   return result
}

console.log(max());