// 1
// function sum(a, b) {
//     return a + b
// }
// console.log(sum(2, 3))
// console.log(sum(4, 4))
// console.log(sum(-2, 4))

// 2

// function maxofnumber(a, b, c) {
//     return Math.max(a, b, c)
// }
// console.log(maxofnumber(20, 3, 25))
// console.log(maxofnumber(47, 15, 5))
// console.log(maxofnumber(4, 4, 600))


// 3


// function sumnum(n) {
//     let a = n % 10
//     let b = Math.floor((n / 10) % 10)
//     let c = Math.floor(n / 100)
//     return sum = a + b + c
// }
// console.log(sumnum(179))
// console.log(sumnum(812))
// console.log(sumnum(425))


// 4

// function lastnum(n) {
//     let a = n % 10
//     if (a == 9) {
//         console.log('Yes');
//     }
//     else  {
//         console.log('No');
//     }
// }
// lastnum(777)

// 5

// function year(n){
//     let c = (n/100)
//     return Math.ceil(c)
// }
// console.log(year(2000))

// 6

// function convert(n){
//     let s = n*60
//     return s
// }
// console.log(convert(3))

// 7

// function calcAge(n){
//     let x = n*365
//     return x
// }
// console.log(calcAge(65))



// 8

// function findPerimeter(a,b){
//     let p = 2*(a+b)
//     return p
// }
// console.log(findPerimeter(6,7))


// 9

// function lessThan100(a,b){
//     let s = a+b
//     if (s < 100) {
//         console.log('true')
//     }
//     else console.log('false')
// }
// lessThan100(22,15)


//  10

// function addup(n) {
//     let i = 1
//     sum = 0
//     while (i <= n) {
//         sum += i;
//         i++;
//     }
//     return sum
// }
// console.log(addup(4))


// function addup(n) {
//     let i = 1;
//     sum = 0;
//     do {
//         sum += i;
//         i++;
//     }
//     while (i <= n)
//     return sum;
// }
// console.log(addup(4))


// function addup(n) {
//     let sum = 0
//     for (i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(addup(600))

//  11 

// function equal(a, b, c) {

//     if (a == b && a == c && b == c) {
//         return 3;
//     }
//     else if (a == b || a == c || b == c) {
//         return 2;
//     }
//     else
//         return 0;
// }
// console.log(equal(1, 1, 1))

// 12

// function isSymmetrical(num) {
//     if (num.toString() === num.toString().split('').reverse().join('')) {
//         return true
//     }
//     else return false
// }
// console.log(isSymmetrical(141))


// function issym(num) {
//     let n = num, rev = 0;
//     while (n > 0) {
//         rev = (rev * 10) + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     if (rev === num) {
//         console.log('true')
//     }
//     else console.log('false')
// }
// issym(55)


//   13


function prime(num) {
    let nonprime = 0, cnt = 0
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num <= 1) nonprime++;
        else if (num % i == 0) nonprime++;
        else cnt++;
    }
    return cnt;
}
console.log(prime(4))