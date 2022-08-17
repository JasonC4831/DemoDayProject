//calc 1 code

function generate(){
    

    let cash = document.getElementById('moneyMade').value

    //assume that of 50 30 20 rule
    let needAmount = 0.5 * cash
    let wantAmount = 0.3 * cash
    let investAmount = 0.2 * cash

    let totalE = document.createElement('p');
    let e = document.getElementById('totalElement');
    totalE.innerHTML = "The amount you should spend on needs is $" + needAmount + ". You should spend $" + wantAmount +  " on wants and should invest $" + investAmount + ".";
    e.appendChild(totalE);
}