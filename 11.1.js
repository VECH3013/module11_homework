let massiv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];
let countEven = 0;
let countOdd = 0;
let countOther = 0;
function countEvenOdd (){
for (let i = 0; i < massiv.length; i++){
    if ((massiv[i] === 0) || (typeof(massiv[i]) != 'number')) {
        countOther++;
    } else {
        if (massiv[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}
return [countEven, countOdd, countOther];
}
let rez = countEvenOdd();

console.log("четных " + rez [0]);
console.log("нечетных " + rez [1]);
console.log("Других " + rez [2]);
