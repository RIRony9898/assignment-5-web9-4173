const seats =document.getElementsByClassName('seats');
let count = 0;
let seatLeft = 40;
let totalPrice = 0;
for( const seat of seats){
    seat.addEventListener('click',function(select){
        count +=1;
        seatLeft -=1;
        totalPrice +=500;
        document.getElementById('selected-seat').innerText = count;
        document.getElementById('seat-left').innerText = seatLeft;
       
        select.target.style.background ='green'
        select.target.style.color ='white'


        if (count > 0 || count < 4) {
            document.getElementById('apply-button').removeAttribute('disabled');
            document.getElementById('success-btn').removeAttribute('disabled');
            
        }
        if (count >= 4) {
            seat.setAttribute('disabled', seat)
        }

        const listOfTicket = document.getElementById('listOfTicket');
        const ul = document.createElement('ul')
        const createdSeat = document.createElement('li');
        const Economy = document.createElement('li');
        const createdPrice = document.createElement('li');



        createdSeat.innerText = seat.innerText;
        Economy.innerText = 'Economy';
        createdPrice.innerText = '500';

        ul.appendChild(createdSeat);
        ul.appendChild(Economy);
        ul.appendChild(createdPrice);
        listOfTicket.appendChild(ul);
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('grand-total').innerText = totalPrice;
        select.target.setAttribute("disabled", true);

    })

}
const mobile = document.getElementById('mobile-number').value;
console.log(mobile)

document.getElementById('apply-button').addEventListener('click', function () {
    const coupon = document.getElementById('coupon-one').innerText;
    if (coupon === 'Couple 20') {

        const grandTotal = totalPrice - (totalPrice * 20 / 100);
        document.getElementById('grand-total').innerText = grandTotal;
        totalPrice += 500;

    }
    else if (coupon === "NEW15") {
        const grandTotal = totalPrice - (totalPrice * 15 / 100);
        document.getElementById('grand-total').innerText = grandTotal;
        totalPrice += 500;

    }
    else {
        alert('invalid coupon');
        return;
    }
    document.getElementById('btn-hide').classList.add('hidden')
})
// alert box
const alertBox = (select) => {
    const number = document.getElementById('mobile-number')
    if (number.value.length > 10) {
        alertDialogue.alertBox();

    } else {
        return alert('Please Input your valid contact number');
    }
};