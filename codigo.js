function envioForm() {
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if (email.toLowerCase() === "beierle@rodrigues.com" && senha === "21102006") {
        alert("Acesso validado")
    }

    else {
        alert("email ou senha incorretos")
    }
} 