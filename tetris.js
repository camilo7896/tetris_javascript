let capUser = window.prompt('Digita Usuario');


if (capUser == null || capUser == "") {
    alert('No has digitado un nombre de Usuario!');
} else {
    let name = document.getElementById('username').innerHTML = capUser;
}