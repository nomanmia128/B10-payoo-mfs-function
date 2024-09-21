document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    // wrong way to verify. do not try it at your serious website

     if(isNaN(addMoney)){
        alert('Falied add money.')
        return;
     }

    if(pinNumber === 1234){
     const balance = getTextFiedValueById('account-balance');
    const newBalance = balance + addMoney;

    document.getElementById('account-balance').innerText = newBalance;

    // add to transaction history 
    const p = document.createElement('p');
    p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`
    console.log(p);

    // should be a common function
    document.getElementById('transction-container').appendChild(p)
    }
    else{
        alert('Falied to add the money')
    }


   
})