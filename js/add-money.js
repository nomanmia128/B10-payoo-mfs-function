/**
 * 1. creat a variable
 * 2. right side docment.getElementById(id)
 * 3. .value
 * . parseFloat
 */

// console.log('add money loaded');

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

      console.log('add money button clicked');

    //   getInputFieldValueById();
    //   const addMoney = getInputFieldValueById();
    //   console.log('add money value', addMoney);
    //   const addMoney = document.getElementById('input-add-money').value;
    //   const addMoneyNumber = parseFloat(addMoney);

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money with parameter', addMoney, pinNumber);

})