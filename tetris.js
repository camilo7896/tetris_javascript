function userName() {
    let capUser = window.prompt('Digita Usuario');
    localStorage.setItem('userNames', capUser)
    let userLocalStorage = localStorage.getItem('userNames');
    console.log(userLocalStorage);
    if (capUser == null || capUser == "") {
        alert('No has digitado un nombre de Usuario!');
        userName();
    } else {
        let name = document.getElementById('username').innerHTML = capUser.toUpperCase();
        alert(`Bienvenido  ${capUser}`)

    }


}
userName();