// let wait5s = function(cb) {
//     setTimeout(function() {
//         cb();
//     }, 5000)
// };

let wait5s = function() {
    return new Promise(function(resolve, reject) {
        // setTimeout(function() {
        //     resolve();
        // }, 5000);
        setTimeout(function() {
            resolve("Day la mot cai data!!!");
        }, 5000);
        // reject("Gap loi roi!!!");
    });
};

// console.log("Start");

// wait5s()
//     // .then(function() {
//     //     console.log("5s");
//     // }).
//     .then(function(data) {
//         console.log("5s");
//         console.log(data);
//     })
//     .then(wait5s)
//     .then(function(data) {
//         console.log("5s");
//         console.log(data);
//     })
//     .catch(function(reason) {
//         console.log(reason);
//     });

const asyncFunction = async() => {
    try {
        console.log("Start");

        let data = await wait5s();
        console.log("Data " + data);
        console.log("5s");

        await wait5s();
        console.log("5s");

        await wait5s();
        console.log("5s");

        await wait5s();
        console.log("5s");

        console.log("End");
    } catch (error) {
        console.log(error);
    };
};

asyncFunction();

console.log("End");

// console.log("Start");

// wait5s(function() {
//     console.log("5 second");
// });

// wait5s().then(function() {

// }).then(function() {

// }).catch(function() {

// });