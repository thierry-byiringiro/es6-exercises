const oddSquare = (arr) =>{
    return arr.filter(ele => ele % 2 !== 0).map(ele => ele ** 2)
}
console.log(oddSquare([1, 2, 3, 4, 5, 6]))