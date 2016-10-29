//TODO Ponerse de acuerdo con comillas dobles o simples
function sendMail(email, nombre, apellidos, usuario, password) {
    window.open("mailto:" + email + "?" +
        "subject=Registro completado"
        + "&" + "body=" +
        "Nombre: " + nombre + "%0A" +
        "Apellidos: " + apellidos + "%0A" +
        "Usuario: " + usuario + "%0A" +
        "Password: " + password + "%0A" +
        "Intereses: " + getIntereses() + "%0A" +
        getDatosAficionado()
    );
}

function getIntereses() {
    var intereses = document.getElementById("intereses");
    var checkboxes = intereses.children;
    var misIntereses = "";
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            misIntereses = misIntereses + checkboxes[i].value + " ";
        }
    }
    if (misIntereses == "") {
        return "Ninguno";
    }
    return misIntereses;
}

function getDatosAficionado() {
    var aficionado = document.getElementById("aficionado");
    if (aficionado.style.display == "block") {
        var estudio = aficionado.children[0].value;
        var direccion = aficionado.children[1].value;
        var telefono = aficionado.children[2].value;
        return "Estudio: " + estudio + "\n" +
            "Dirección del estudio: " + direccion + "\n" +
            "Teléfono: " + telefono;
    } else {
        return "";
    }
}

var validReg = true;
function validateAll() {
    var elementoNombre = document.getElementById('nombre');
    if (elementoNombre.value == "") {
        elementoNombre.style.backgroundColor = "#ff6666";
        validReg = false;
    }

    var elementoApellidos = document.getElementById('apellido');
    if (elementoApellidos.value == "") {
        elementoApellidos.style.backgroundColor = "#ff6666";
        validReg = false;
    }
    var elementoEmail = document.getElementById('mail1');
    if (elementoEmail.value == "" || mailMatch() == false) {
        elementoEmail.style.backgroundColor = "#ff6666";
        document.getElementById('mail2').style.backgroundColor = "#ff6666";
        validReg = false;
    }
    var elementoUsuario = document.getElementById('username');
    if (elementoUsuario.value == "") {
        elementoUsuario.style.backgroundColor = "#ff6666";
        validReg = false;
    }
    var elementoPassword = document.getElementById('pass1');
    if (elementoPassword.value == "" || passMatch() == false) {
        elementoPassword.style.backgroundColor = "#ff6666";
        document.getElementById('pass2').style.backgroundColor = "#ff6666";
        validReg = false;
    }
    if (validReg == true) {
        sendMail(elementoEmail.value,
            elementoNombre.value,
            elementoApellidos.value,
            elementoUsuario.value,
            elementoPassword.value
        );
        alert("Operación realizada con éxito");
    }
    return validReg;
}

var radios = document.getElementsByName('fotografia');
for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', toggleAficionado, false);
}

function toggleAficionado() {
    var aficionado = document.getElementById("aficionado");
    if (this.value == 1) {
        aficionado.style.display = "block";
        window.scrollTo(0, document.body.scrollHeight);
        aficionado.children[0].required = true;
        aficionado.children[1].required = true;
    } else {
        aficionado.style.display = "none";
        aficionado.children[0].required = false;
        aficionado.children[1].required = false;
    }
}

function passMatch() {
    var password1 = document.getElementById('pass1').value;
    var password2 = document.getElementById("pass2");
    var passValid = true;
    if (password1 == "" && password2.value == "") {
        password2.className = "entrada";
        password2.style.backgroundColor = "transparent";
    } else if (password1 != password2.value) {
        password2.className = "entrada-mal";
        password2.style.backgroundColor = "#ff6666";
        passValid = false;
    } else {
        password2.className = "entrada";
        password2.style.backgroundColor = "#6ce695";
    }
    return passValid;
}

function mailMatch() {
    var mail1 = document.getElementById("mail1").value;
    var mail2 = document.getElementById("mail2");
    var mailValid = true;
    if (mail1 == "" && mail2.value == "") {
        mail2.className = "entrada";
        mail2.style.backgroundColor = "transparent";
    } else if (mail1 != mail2.value) {
        mail2.className = "entrada-mal";
        mail2.style.backgroundColor = "#ff6666";
        mailValid = false;
    } else {
        mail2.className = "entrada";
        mail2.style.backgroundColor = "#6ce695";
    }
    return mailValid;
}

document.getElementById("files").onchange = function () {
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("preview").src = e.target.result;
        document.getElementById("preview").style.display = "block";
    };
    reader.readAsDataURL(this.files[0]);
};
