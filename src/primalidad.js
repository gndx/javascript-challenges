const trialDivision = (number) => {
    if (number<=1 || Math.trunc(number)!=number ) 
    {
    	return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++)
    {
        if (number % i == 0) 
        {
        	return false;
        }
    }
    return true;
}

module.exports = trialDivision;