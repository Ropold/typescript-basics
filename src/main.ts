//1,2,3
let age: number = 5;
for (let i = 0; i <= age; i++) {
    console.log(i);
    }
if(age >= 18){
    console.log("you can vote");
} else {
    console.log("you can't vote");
}
//4,5,6
let score: number = 0;
if (score !== 0) {
    console.log("Score is available.");
} else {
    console.log("Score is not available.");
}
if(score){
    console.log("Truthy Score is available.");
} else {
    console.log("Falsy Score is not available.");
}
//7,8,9
let user: string = "";
if (user !== "") {
    console.log("Username is available.");
} else {
    console.log("Username is not available.");
}
if(user){
    console.log("Truthy Username is available.");
} else {
    console.log("Falsy Username is not available.");
}
//10,11,12
let isAdmin: boolean = false;
if (isAdmin) {
    console.log("Truthy Admin is available.");
} else {
    console.log("Falsy Admin is not available.");
}
if (!isAdmin) {
    console.log("isAdmin is false.");
}


//tree1
// let tree1: string = `
//     *
//    ***
//   *****
//  *******
// *********
//     *
//     *
//     *
//     *
//     *`;
//
//     let k: number = 3;
//     for (let i = 0; i <= k; i++) {
//         console.log(tree1);
//     }

//tree2
let tree2up: string = "";
let n: number = 5;

for (let i = 1; i <= n; i++) {
    let stars : string = "*".repeat(i * 2 - 1);
    let spaces1:string = " ".repeat(n - i);
    tree2up += spaces1 + stars;
    if (i < n) {
        tree2up += "\n";
    }
}
console.log(tree2up);

let spaces2 = " ".repeat(n-1);
for (let i = 1; i <= n; i++) {
    console.log(spaces2 + "*");
}

