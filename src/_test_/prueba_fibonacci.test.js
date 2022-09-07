 describe("Test Suite for fibonacci challenge", ()=>{
        test("0) Calcula la sucesion de fibonacci para 0 y 1", ()=>{
		function fibonacci(n){
		if(n==0){
			return [0];
		}else if(n==1){
			return [0,1];
		 }
		}
		expect(fibonacci(0)).toEqual([0]);
	});
	test("1) devuelve un arreglo para valores menores a 2", ()=>{
		const sucesion=[0,1]
		function fibonacci(n){
			if(n<2){
				sucesion.shift();
			}
			return sucesion;
		}
		expect(fibonacci(1)).toEqual([1])
	});
	test("2) Devuelve la sucesion del numero 2", ()=>{
		const sucesion=[0,1]
		function fibonacci(n){
			if(n<2){
				sucesion.shift();
				return sucesion;
			}else{
			    for(var i=2;i<=n;i++){
			    	sucesion[i] = sucesion[i-2]+sucesion[i-1]
   			    }
				sucesion.shift();
				return sucesion;
	 		 }
		} //cierre de funcion
		expect(fibonacci(2)).toEqual([1,1])
	});
	test("3) Devuelve la sucesion del numero 3", ()=>{
		const sucesion=[0,1]
		function fibonacci(n){
			if(n<2){
				sucesion.shift();
				return sucesion;
			}else{
			    for(var i=2;i<=n;i++){
			    	sucesion[i] = sucesion[i-2]+sucesion[i-1]
   			    }
				sucesion.shift();
				return sucesion;
	 		 }
		} //cierre de funcion
		expect(fibonacci(3)).toEqual([1,1,2])
	});
	test("4) Devuelve la sucesion del numero 5", ()=>{
		const sucesion=[0,1]
		function fibonacci(n){
			if(n<2){
				sucesion.shift();
				return sucesion;
			}else{
			    for(var i=2;i<=n;i++){
			    	sucesion[i] = sucesion[i-2]+sucesion[i-1]
   			    }
				sucesion.shift();
				return sucesion;
	 		 }
		} //cierre de funcion
		expect(fibonacci(5)).toEqual([1,1,2,3,5])
	});

})
