const fibonacci = (n) => {
  // declaration of the variables  
  var n1 = 1,  n2 = 1, next_num, i;  
  var num = parseInt (n);  
  var a = [];
  for ( i = 1; i <= num; i++)  
  {  a.push(n1);  
      next_num = n1 + n2;
        
      n1 = n2;
      n2 = next_num; 
  }
  return a;
}

module.exports = fibonacci;