
console.log('Hello');

console.log('bye');

const calculate = (operand1, operand2,operator) => {
    let result = null
    switch (operator) {
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        case '+':
                result = operand1 + operand2;
            break;
    
        default:
            result = 'unsupported operator'
            break;
    }
    return result
}

console.log(calculate(2,3,'*'))
console.log(calculate(2,3,'/'))
console.log(calculate(2,3,'+'))
console.log(calculate(2,3,'-'))


const tass = (from, to, precision) => {
    let rand = Math.random();
    rand = rand * (to - from) / (1 - 0);
    rand = rand - (0 * (to - from) / (1 - 0) - from);
    return rand;
}

console.log({ rand: tass(1, 6, 1) });
console.log({ rand: tass(10, 60, 3) });
console.log({ rand: tass(10, 12, 3) });