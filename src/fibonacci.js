const fibonacci = (n) => {

const sucesion=[0,1]


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


}

module.exports = fibonacci;
