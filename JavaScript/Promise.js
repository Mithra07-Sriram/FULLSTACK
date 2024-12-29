//Loaction Finder eg
/*function locationFinder()
{
    train=8
    return new Promise((resolve,reject)=>
    {
        if(train==7)
        {
            resolve("Train has arrived")
        }
        else{
            reject("train hasn't arrived")
        }
    })
}
//console.log(locationFinder());
//  //op:wehen reject happens it displays Promise { <rejected> "train hasn't arrived" } along with error ode:internal/process/promises:289 triggerUncaughtException(err, true /* fromPromise *///);// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "train hasn't arrived".] {code: 'ERR_UNHANDLED_REJECTION'

//locationFinder().then((resolvedmsg)=>{ 
    console.log(resolvedmsg); //op:when reject happens it displays only error node:internal/process/promises:289triggerUncaughtException(err, true /* fromPromise *///);^[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "train hasn't arrived".] {code: 'ERR_UNHANDLED_REJECTION'Node.js v20.12.2
//});

//Loaction Finder eg

function isTimeConsumption(t) {
    const time = 999; // Local variable
    return time <= t;
}

function isValidation(loc) {
    const location = "ooty"; // Local variable
    return loc === location;
}

function locationFinder() {
    const loc = "ooty"; // Local variable
    const time = 1000; // Local variable

    return new Promise((locFound, locNotFound) => {
        setTimeout(() => {
            if (isValidation(loc) && isTimeConsumption(time)) {
                locFound("Location found");
            } else {
                locNotFound("Train hasn't arrived");
            }
        }, 1000);
    });
}

// Correct handling of the promise
locationFinder()
    .then((resolvedMsg) => {
        console.log(resolvedMsg); // Will print: "Location found" if resolved
    })
    .catch((errorMsg) => {
        console.error(errorMsg); // Will print: "Train hasn't arrived" if rejected
    });
