function submitform(event){
    event.preventdefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `<strong>Name:</strong>${name}<br>
    <strong>Email:</strong>${email}<br>
    <strong>Password:</strong>${password}<br>`;
}