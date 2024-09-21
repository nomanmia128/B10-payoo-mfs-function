document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
 event.preventDefault();

     const cashOut = getInputFieldValueById('input-cash-out');
     const pinNumber = getInputFieldValueById('input-cash-out-pin');    
    //  console.log('insid the click handler', cashOut, pinNumber);

     if(isNaN(cashOut)){
        alert('Falied to cash out.');
        return;
     }

    if(pinNumber === 1234){
      const balance = getTextFiedValueById('account-balance');

      if(cashOut > balance){
        alert('You do not have enough money to cash out');
        return;
      }

      const newBalance = balance - cashOut;
      document.getElementById('account-balance').innerText = newBalance

    //   add to transaction history 
    const div = document.createElement('div');
    div.innerText = `Cash Out: ${cashOut} TK. New Balance: ${newBalance}`
    console.log(div)

    document.getElementById('transction-container').appendChild(div);


    }
    else{
        alert('No money for you')
    }

})