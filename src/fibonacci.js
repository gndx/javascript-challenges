const fibonacci = (n) => {
  var x = 0;
	var array = [];
	for (x; x<=n; x++){
		if(x==0){
			array.push(0);
		}
		else if(x==1){
			array.push(1);
		}
		else{
			array.push(array[x-1]+array[x-2]);
		}
  }
  array.shift()
  return array;
}

module.exports = fibonacci;