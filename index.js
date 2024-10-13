setTimeout(function() {
    console.log("Hello World");
    setTimeout(function(){
      console.log("hi time");
      setTimeout(function() {
        console.log("hi there");
      },5000)
    },3000)
  },1000)
  
  function sayHi() {
    console.log("hi");
  } 
  function sayHelo() {
    console.log("hello");
  }
  function sayThere() {
    console.log("hii there");
  }
  setTimeout(sayHi,1000);
  setTimeout(sayHelo,3000);
  setTimeout(sayThere,5000);
  
  // callback hell good way
  function done3() {
    console.log("hii there");
  }
  
  function done2() {
    console.log("hello");
    setTimeout(done3,5000);
  }
  
  function done1() {
    console.log("hii");
    setTimeout(done2,3000);
  }
  setTimeout(done1,1000);

  // promisified chaning

  function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
      setTimeout(resolve,duration);
    });
  }
  setTimeoutPromisified(1000).then(function() {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hii there");
      });
    });
  });
  