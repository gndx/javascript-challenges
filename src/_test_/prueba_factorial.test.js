describe("Test Suite for factorial challenge", ()=>{
	test("0) Calcula factorial de ", ()=>{
		//codigo a probar
		function factorialRecursivo(n){
			if(n==0){
				return 1;
			}
		}
		//valor que se espera obtener
		expect(factorialRecursivo(0)).toBe(1);
	});

	test("1) Calcula factorial de 5", ()=>{
		function factorialRecursivo(n){
			if(n==0){
				return 1;
			}return n * factorialRecursivo(n-1);
		}
		expect(factorialRecursivo(5)).toBe(120);
	});
	test("2) Calcula factorial de cualquier numero menor a 10", ()=>{
		function factorialRecursivo(n){
			if(n==0){
				return 1;
			}return n * factorialRecursivo(n-1);
		}
		expect(factorialRecursivo(8)).toBe(40320);
	});

})

