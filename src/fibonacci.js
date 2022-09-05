const fibonacci = (n) => {
  // your code here
  let output=[];
  output.push(1);
  for(let i=1;i<n;i++){
    if(i < 2){
     output.push(1);
    }else{
      output.push(output[i-1]+output[i-2]);
    }
    
  }
  return output;
}

module.exports = fibonacci;