//! Q-05 : Implement a function asyncTask that logs a message to the console after 2 seconds. then call asyncTask multiple times and explain the order in which the messages are logged/
//? Discuss the event loop and how javascript handles Asynchronous operations  

function asyncTask() {
  setTimeout((val) => {
    console.log(val);
  }, 2000);
}

asyncTask();
asyncTask();
asyncTask();


//* the order in which the following functions are logged is 
//? depends on the event loop - [ it checks whether the main thread is free or not]
//* in this senior - all the calls goes to the task queues one by one and execute respectively one by one 
//* but the order of logging the message is is approximately same for all the calls due to the delay of 2seconds

//* order is same as the order of calling the function 

//? Event loop  - [ it checks whether the main thread is free or not continuously ] 
