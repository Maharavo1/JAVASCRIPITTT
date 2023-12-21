function map() {
    let numbers = [1, 2, 3, 4, 5];

    const result = numbers.map(Number => {
        return Number * 2;
    });
    
    return result;
}

console.log(map());
