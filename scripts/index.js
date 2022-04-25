// Store the wallet amount to your local storage with key "amount"

var pricel = JSON.parse(localStorage.getItem('amount')) || [0];
// console.log(pricel)
function addamt()
{
    let price = document.getElementById('amount').value;
    // console.log(price)
    let total = Number(pricel+price);
    document.getElementById('wallet').innerText = total;
    localStorage.setItem('amount',JSON.stringify(total));
    

}