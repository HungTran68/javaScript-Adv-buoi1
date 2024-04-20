console.log('2')
// Bai 1:
const deleteElement = (arr) => {
    let newArr = arr.filter((item,index) => arr.indexOf(item) === index)
   return newArr;
}
let number = [1,1,22,2,3,4,5,6,66,6,7]
console.log(deleteElement(number));


// Bai 2:
// Tim so lon thu 2 trong mang
let arrNumber = [1,32,14,23,22,56]
const checkNumber = (arr) => {
    let sortArr = arr.sort((a,b) => b - a)

    return sortArr[1];
    
}

console.log(checkNumber(arrNumber));

// arrNumber.sort((a,b) => b - a);
// console.log(arrNumber);


// -- sap xep theo thu tu tang dan hoac dam dan

// Tang dan :

let arrayNumber = arrNumber.sort((a,b) => a - b);
console.log(arrayNumber)

// giam dan 

let arrayNumber2 = arrNumber.sort((a,b) => b - a);
console.log(arrayNumber2)

// ------------- tinh tong cac so chan trong mang c

let thirdArrNumber = [2,5,6,8,2,68,1];

const sumEvenNumber = (arr) => {

    let sumEvenNumber = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            sumEvenNumber += arr[i];
        }
    }
    return sumEvenNumber;
}

console.log(sumEvenNumber(thirdArrNumber));