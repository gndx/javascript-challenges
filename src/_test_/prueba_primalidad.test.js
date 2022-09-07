describe("Test suite for prime numbers challenge",()=>{
	test("Test para comprobar que es numero mayor a 1", ()=>{
		function prime(n){
		if(n<1){
			return false;
		}else return true;
		}
	expect(prime(0)).toBe(false);
	});
	test("Test para dividir un numero con una serie de divisores", ()=>{
	const divisores = [2,3,4,5];
	var factores=2;
	function division(n){
		for(var i=0;i<=n;i++){
			if(n%divisores[i]==0){
				factores++;
				return factores;
			}
		}
	}
	expect(division(965)).toBe(3);
	});
	test("Test para determinar numeros compuestos", ()=>{
	const divisores = [2,3,4,5];
	var factores=2;
	var compuesto=false;
	function division(n){
		for(var i=0;i<=n;i++){
			if(n%divisores[i]==0){
				factores++;
			}
		}
		if(factores>=3){
			compuesto=true;
		}return compuesto;
	}
	expect(division(333)).toBe(true);
	});
	test("Test para determinar numeros primos", ()=>{
	const divisores = [2,3,4,5];
	var factores=2;
	var primo=false;
	function division(n){
		if(n<=1){
			return primo;
		}else{
		 for(var i=0;i<=n;i++){
			if(n%divisores[i]==0){
				factores++;
			}
		}
		if(factores<=2){
			primo=true;
		}return primo;
	}
		 }
	expect(division(4)).toBe(false);
	});

})
