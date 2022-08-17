//calc 2 code

function generate(){

    let cash = document.getElementById('moneyInvested').value;
    let years = document.getElementById('yearsInvested').value;

    //assume that the interest compounted is 10%
    let factor = Math.pow(1.1, years);
    let total =  cash * factor; 


    let totalE = document.createElement('p');
    let e = document.getElementById('totalElement');
    totalE.innerHTML = 'Assuming that you put $' + cash + " into the s&p 500 for " + years + " years, then you will generate $" + total + " by the end of the investment."
    e.appendChild(totalE);
    
}
  
