// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("hello");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise is completed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("hello");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("promise is completed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       console.log("Fetching is done");
//       resolve({ username: "ganesh", Age: 24 });
//     } else {
//       reject("Error: Something is wrong");
//     }
//   }, 1000);
// })
//   .then((user) => {
//     // console.log(`We get user\n ${user}`);
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log(
//       "finally we get something we dont what is it error it success fully executed"
//     );
//   });

fetch("https://api.github.com/users/ganeshpawar09")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("E: " + error);
  });
