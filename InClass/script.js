let bbj = {name: "amir", age: 20, initobject: {name: "erfan", age : 20}, fn: () => { return 2}}

const copyes = (ob) => {
    const copyob = {}
    for(const keys in ob) {
        if(Object.call(ob, keys)) {
            const element = ob[keys];
            if(typeof element === "object"){
                copyob[keys] = copyes(element);
            }else {
                copyob[keys] = element;
            }
        }
    }
    return copyob;
}

const cloneObj = copyes(bbj);
console.log(cloneObj, bbj !== cloneObj, bbj.initobject !== cloneObj.initobject, typeof cloneObj.fn === "function")