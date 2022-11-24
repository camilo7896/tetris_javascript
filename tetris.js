let users = document.getElementById('users');

function userName() {
    let list = [];
    let capUser = window.prompt('Digita Usuario');
    localStorage.setItem('userNames', capUser);
    let userLocalStorage = localStorage.getItem('userNames');
    list.push(userLocalStorage);
    console.log(list);
    users.innerHTML = userLocalStorage;

    if (capUser == null || capUser == "") {
        alert('No has digitado un nombre de Usuario!');
        userName();
    } else {
        let name = document.getElementById('username').innerHTML = capUser.toUpperCase();
        alert(`Bienvenido  ${capUser}`)

    }

}

userName();