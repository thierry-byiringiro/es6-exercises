const sortProducts = (arr) =>{
return arr.sort((a,b)=>a.price-b.price)
}
console.log(sortProducts([
    {name:"byiringiro",price:10},
    {name:"thierry",price:900},
    {name:"aime",price:200},
]))