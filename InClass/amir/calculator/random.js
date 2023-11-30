const tass=(from,to,precision)=>{
    let rand=Math.random();
    rand=rand*(to-from/(1-0));
    rand=rand-(0*(to-from)/(1-0)-from);
    return rand;
}
console.log({rand:tass(1,6,1)});