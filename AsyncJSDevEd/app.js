
// Synchronous Javascript
    // blocking code
    // javascript is single threaded so it can only handle one thing at a time

// Asynchronous code examples
    //  unblocking code 

    
    /*
    Leads to callback hell, weird indentation and hard to read
    function loginUser(email, password, callback) {
        
        setTimeout(() => {
            console.log('now we have data');
            callback( { userEmail : email })
        }, 3000)
    }
    */
   
console.log('start');

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting user data");
            resolve({ userEmail: email });
        }, 3000)
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting list of videos");
            resolve(['video 1', 'video 2', 'video 3']);
        }, 3000)
    })
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting title of video");
            resolve("title of the video");
        }, 3000)
    })
}

const user = loginUser('hungry_hippo@gmail.com', 1234, user => {
    console.log(user);
})

loginUser('ed', 'bubmba')
    .then( user => getUserVideos(user.email))
    .then(videos => videoDetails(videos[0]))
    .then(detail => console.log(detail))
    .catch(error => console.log(error));

console.log('end');

// set time out moves from call stack to web api stack (fetch, setTimeout, eventHandler)
// callback !== asynchronous example => items.forEach((item) => { c.l(item)})