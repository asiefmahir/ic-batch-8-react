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