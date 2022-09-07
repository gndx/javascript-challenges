const trialDivision = (number) => {

                if(number <= 0 || number == 4 || number == 1 || number%1!=0 ) return false;
                 for(var i=2;i<number/2;i++){
                        if(number%i==0) return false;
        	 }return true;


}

module.exports = trialDivision;
