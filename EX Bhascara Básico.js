function bhaskara(a, b, c) {
    let delta = b * b - 4 * a * c;
    let raizDelta = Math.sqrt(delta);

    if (delta < 0 || !Number.isInteger(raizDelta)) {
        return "As raízes não são inteiras";
    }

    let x1 = (-b + raizDelta) / (2 * a);
    let x2 = (-b - raizDelta) / (2 * a);

    return Number.isInteger(x1) && Number.isInteger(x2) ? [x1, x2] : "As raízes não são inteiras";
}

// Testes 
console.log(bhaskara(1, -5, 6));  
console.log(bhaskara(1, -6, 9));
console.log(bhaskara(18, -7, 12));
console.log(bhaskara(1, 2, 3));
console.log(bhaskara(1, 1, 1));
console.log(bhaskara(1, -5, 6));
