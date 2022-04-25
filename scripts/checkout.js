// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var total=0;
var  cuuprice=0;
function save()
{
    if (total > cuuprice )
    {
        alert("Booking Successful!")
    }
    else{
        alert("Insufficient Balance !")
    }
}