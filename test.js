// const fs = require("fs");

// function fileasync() {
//     return new Promise(function resolve(resolve,reject) {
//         fs.readFile("d.txt","utf-8", function hum(err,data){
//             if(err) {
//                 reject(err);
//             }else {
//                 resolve(data);
//             }
//         })
//     })
// }

// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve) {
//       setTimeout(resolve,duration);
//     });
// }

// async function solve() {
//     try {
//         const data = await fileasync();
//         console.log(data);
//     }catch {
//         console.log("Error");
//     }
// }
// solve();

// const fs = require("fs");

// function done(err,data) {
//     if(err) {
//         console.log("is nrt");
//     } else {
//         console.log(data);
//     }

// }
// fs.readFile("a.txt","utf-8",done)