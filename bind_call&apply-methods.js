// Call    methods

var roy = {
  name: "roy",
  age: 30,
  message: function(greeting, secretCode) {
    console.log(
      this.name + ", " + greeting + " ure secret code is " + secretCode
    );
  }
};

var kane = {
  name: "kane"
};

roy.message("hello", 555);
roy.message.call(kane, "Hi", 999);

// Bind methods

var gateMessage = roy.message.bind(kane);
gateMessage("yo", 1000);
