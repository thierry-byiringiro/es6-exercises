//Working on creating a custom forEach method

const myForEach = (array,callback) =>{
        for(let i = 0;i<array.length;i++){
            callback(array[i],i);
        }    
        return undefined;
}

function callback(element,index){
   console.log(`Element ${element} is one this ${index} index`)
}


myForEach([1,2,3,4,5,6,7,8,9,8],callback);
