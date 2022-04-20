function nbYear(p0, per, aug, p){
    let newPop = p0;
    let years = 0;
    while(newPop < p){
        newPop = newPop + (newPop * (per/100)) + aug;
        years++;
    }
    return years;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));