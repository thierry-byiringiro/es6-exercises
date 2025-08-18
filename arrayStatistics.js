const arrayStatistics = (array) =>{
    let sum = array.reduce((acc,acce) => acc + acce);
    let average = sum / array.length;
    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);
    return {
        sum:sum,
        average:average,
        minimum:minValue,
        maximum:maxValue
    }

}
console.log(arrayStatistics([1, 2, 3, 4, 5]))