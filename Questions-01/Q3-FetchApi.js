//! Q-03 : create a function fetchUserData that stimulates an asynchronous API call and returns a promise.Use async/await to handle the promise and log the user data to the console/
//? explain the benefits of using async/await over callback function and promise chaining



function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network error");
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    }, 2000);
  });
}

async function getUserData() {
  try {
    const userData = await fetchUserData();
    console.log(userData);
  } catch (err) {
    console.error("Error in fetching user data", err);
  }
}

getUserData()

//* in the above code we use async/await for handling promises - [getUserData] 
//? because : Using async/await provides
// 1. it enhance the readability of the code 
// 2. it make easier error handling
// 3. provide the parallel execution
