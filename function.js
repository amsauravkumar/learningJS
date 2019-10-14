var dob = [1997, 1854, 1998, 2000];

function claculateAge(dob, fn) {
  var age = [];
  for (var i = 0; i < dob.length; i++) {
    age.push(fn(dob[i]));
  }
  return age;
}

function fn(i) {
  return 2019 - i;
}

var ages = claculateAge(dob, fn);
console.log(ages);

// prctice 2

var float = [12.33, 5.55, 6.82, 233.3];

function rounfOff(float) {
  var int = [];
  for (var i = 0; i < float.length; i++) {
    int.push(i);
  }
  return int;
}

var roundedOff = rounfOff(float);
console.log(roundedOff);

// function within another function

function interviewQuestion(jobRole) {
  if (jobRole === "teacher") {
    return function(name) {
      console.log("what subjects can you teach " + name);
    };
  } else if (jobRole === "programmer") {
    return function(name) {
      console.log("Programming language you know");
    };
  } else {
    console.log("job profile doesnt match any");
  }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("joly");
teacherQuestion("roy");
teacherQuestion("gyan");
