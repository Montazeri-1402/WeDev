const deepClone = (obj) => {
    const newObject = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)){
            const element = obj [key];
            if (typeof element === 'object'){
                newObject[key] = deepClone(element);

            }
            else{
                newObject[key] = element;
            
            }
        }
    }
    return newObject;
};
const sampleobject = {name: "Erfan", age: 20, nestedobj: {last: "Nazari"}, fn: () => {return 2;}};
const clonedobj = deepClone(sampleobject);
console.log(clonedobj, sampleobject !== clonedobj, sampleobject.nestedobj !== clonedobj.nestedobj, typeof clonedobj.fn === 'function');