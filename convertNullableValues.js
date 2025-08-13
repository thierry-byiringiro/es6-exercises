//this is the first way of using loop
const convertNullableValues = (obj) => {
    for (let prop in obj) {
        if (obj[prop] === null) {
            obj[prop] = 0;
        } else if (obj[prop] === undefined) {
            obj[prop] = ""
        }
        console.log(obj[prop])
    }
    return obj;
}
console.log(convertNullableValues({ name: "byiringiro", price: null, hh: undefined }))



