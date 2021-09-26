const arrayA=["DARIO","29"]
const arrayB=["juan","30"]
/*alert (arrayA)*/
/*console.log(arrayA)*/
let variable=arrayA[0];
/*alert (variable)*/
for(i=0;i<arrayA.length;i++){
console.log(arrayA[i]);
}
arrayA.push("juan")
for(i=0;i<arrayA.length;i++){
    console.log(arrayA[i]);
    }
    /*arrayA.pop()*/
    arrayA.splice(1,1)
    for(i=0;i<arrayA.length;i++){
        console.log(arrayA[i]);
        }
        console.log(arrayA.join(', '))

let arrayC=arrayA.concat(arrayB)
console.log(arrayC.join(', '))
