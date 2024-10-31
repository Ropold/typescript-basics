//1
const mynumbers: number[]  = [1, 2, 3, 4, 5];
mynumbers.map(value => console.log(value*2));
const mynumbers2 = mynumbers.map(value => value * 2);
console.log(mynumbers2);

//2
const mynames: string[] = ['Johny', 'Doe', 'Jamie', 'Joe'];
const mynames2 = mynames.filter(name => name.length > 3);
console.log(mynames2.map(name => name.toUpperCase()));

//3
const mynumbers3 = [5,6,7,8,9];
const sum = mynumbers3.reduce((acc, value) => acc + value, 0);
const sum2 = mynumbers3.reduceRight((acc, value) => acc + value, 0);
console.log(sum);
console.log(sum2);

//4
const greaterTen = mynumbers3.some(value => value > 10);
console.log(greaterTen)

//bonus 1.
const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
let list1 = list.sort((a, b) => b - a);
console.log(list1);

//bonus 1. 2.0
let listDescending = [];
for (let i = 0; i < list.length; i++) {
    let isMax = true;
    for (let k = 0; k < list.length; k++) {
        if (list[i] < list[k]) {
            isMax = false;
            break;
        }
    }
    if (isMax) {
        listDescending.push(list[i]);
    }
}
for (let k = 0; k < list.length; k++) {
    if (!listDescending.includes(list[k])) {
        listDescending.push(list[k]);
    }
}
console.log(listDescending);


//bonus 2.
const squaredList = list.map(num => num * num);
console.log(squaredList);

//bonus 3.
const sortedList = list.sort((a, b) => a - b);
const list2 = sortedList.slice(2, sortedList.length - 4);
console.log(list2);

//bonus 4.
const devideByFor = list.map(num => num % 4);
console.log(devideByFor)

//bonus 5.
const sum3 = list.reduce((acc, value) => acc + value, 0);
console.log(sum3);

