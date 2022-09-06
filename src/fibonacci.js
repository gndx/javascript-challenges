function fibonacci(number){
  var fiboarray = [];
  fiboarray[0]=0;
  fiboarray[1]=1;
  for (var i = 2; i <= number; i++) {
    fiboarray[i] = fiboarray[i - 2] + fiboarray[i - 1];
    // console.log(i +":"+ fiboarray[i]);
  }

  // console.log("fiboarray:"+fiboarray);
  let newarray = fiboarray.slice(1,10);
  console.log("fiboarray:"+newarray);

  return newarray;
  }

  
  var f = fibonacci(10);
  // var newarray = f.slice[0];
  // console.log("newArray: "+newarray);
console.log(f);

module.exports = fibonacci;