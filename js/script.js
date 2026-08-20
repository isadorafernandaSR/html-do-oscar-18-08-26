document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault()

    var botao = document.getElementById('btnEntrar')
    botao.textContent = 'Carregando artigo...'
    botao.style.backgroundColor = '#888'

    setTimeout(function() {
        window.location.href = 'espurr.html'
    }, 1000)
})

const usuariosValidos = {
    "fizzy": "admin123",
    "Ash": "pikachu123",
    "N": "soltapokemon"
};


var loginForm = document.querySelector('#id01 form');

loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    var usuario = loginForm.uname.value.trim();
    var senha = loginForm.psw.value;

    if (usuariosValidos.hasOwnProperty(usuario)&&usuariosValidos[usuario]===senha){
        alert("Sucesso!!!");
        modal.style.display = "none";
        loginForm.reset();
    }else{alert("usuario incorreto :(");

    }
     
});