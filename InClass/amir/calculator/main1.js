const calculator=(operand1,operand2,operator)=>{
    const result=null;
    switch (operator) {
        case '/':
            result=operand1/operand2;
            break;
        case '+':
            result=operand1/operand2;
            break;
        case '*':
            result='unsupported operator';
            break;    
        default:
            break;
    }
    return{
        operand1,operand2,operator,result,
    }
}
console.log(calculator(2,3,'+'));
console.log(calculator(2,10,'/'));
console.log(calculator(11,3,'*'));