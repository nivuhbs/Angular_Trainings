const average = (...agr) => {
    const sum =  agr.reduce((a, b) => 
     (a + b)
    , 0)
    return sum/agr.length
 }
 console.log(average(1,2,3,4))

 function average2 () {
    let sum = 0
    for( let i=0; i< sum.length; i++) {
        sum+= arguments[i]
    }
    return sum/arguments/length
 }

 console.log(average2(1,2,2,3))

 
const sum = (...arg) => {
    return arg.reduce((acc, cur) =>{ return ( acc + cur) }, 0)
}

function average3 () {
   return sum(...arguments)/arguments.length
 }