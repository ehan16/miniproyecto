var name, email, phone, message;

function onSubmit(){

    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    message = document.getElementById('message').value;

    if(name === '' || email === '' || phone == '' || message === ''){
        alert("Empty field")
    } else {
        alert("The message was sent!");
        console.log("Name: ", this.name);
        console.log("Email: ", this.email);
        console.log("Phone: ", this.phone);
        console.log("Message: ", this.message);
    }
}