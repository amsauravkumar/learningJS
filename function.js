var dob = [1997, 1854, 1998, 2000];

function claculateAge(dob, fn){
    var age=[];
    for (var i=0;i<dob.length;i++){
        age.push(fn(dob[i]));
    }
    return age;
}

function fn(i){
    return 2019-i;
}

var ages = claculateAge(dob, fn);
console.log(ages)

// prctice 2

 var float = [12.33, 5.55, 6.82, 233.3];

 function rounfOff(float){
     var int = [];
    for(var i=0;i<float.length;i++){
        int.push(i);
    }
    return int;
 }


 var ppp = rounfOff(float)

 console.log(ppp)