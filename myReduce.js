//working on creating my custom myReduce
Array.prototype.myReduce= function(callback){
    let acc = this[0];
    for(i = 1;i<this.length;i++){
        acc = callback(acc,this[i]);
    }
    return acc;
}

function callback(a,b){
    return a + b;
}

let myArr = [1,2,3,4,5,6,7,8,9];
console.log(myArr.myReduce(callback))