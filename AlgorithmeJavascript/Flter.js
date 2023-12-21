function customFilter() {
    let NBRE = [1, 2, 3, 4, 5];

    const result = NBRE.filter(nu => {
        return nu % 2 === 0;
    });
    
    return result;
}

console.log(customFilter());
