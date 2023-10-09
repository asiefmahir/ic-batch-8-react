function grandParent () { // App
    let x = 1;
    parent(x)
}

function parent (num1) { // BioData
    let y = 20;
    child(num1, y)
}

function child (a, b) {  // PersonalInfo, Skills,
    console.log(a, b);
}

grandParent()

const numbers = [10, 20, 30, 40]

const dividedByTwoList = numbers.map((num) => num / 2);
console.log(dividedByTwoList); // [5, 10, 15, 20]