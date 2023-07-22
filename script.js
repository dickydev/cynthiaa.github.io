function goToBooking() {
    window.location.assign("booking.html") ;
}

function Process() {
    let package= document.getElementById('package').value;
    let num_of_people= document.getElementById('num_of_people').value;
    let totalPayment= package * num_of_people;

    document.getElementById('total').innerHTML = totalPayment;

    setTimeout (() => {
        alert('Thank You for buying, see you in the next trip!!!');
        window.location.assign('about.html');
    }, 5000)
}