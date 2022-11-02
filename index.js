let nombre = document.getElementById("name");
let email = document.getElementById("email");
let sexo = document.getElementById("sexo");
let ingresar = document.getElementById("ingresar");
let error = document.getElementById("error");
let result = document.getElementById("result");
let forms = document.getElementById("form")
var message = "Error Complete todos los datos"
alert(message);

// result.style.visibility = "hidden";
// error.style.visibility = "hidden";

result.hidden = true;
error.hidden = true;

function onChangeSelectGender(sexo) {

}

function ValidarDatos() {
    if (nombre.value.length == 0 && nombre.value.length < 30) {
        alert("Error complete todos les datos");
        document.getElementById('error').innerHTML = "error Ingrese todos los campos"
        // error.style.backgroundColor = "red"
        // error.style.backgroundColor = "visible"
        // result.style.visibility = "visible" 
        result.hidden = true;
        error.hidden = false;
        return;
    }

    else if (email.value == "") {
        alert("Error ingrese todos los datos");

        document.getElementById('error').innerHTML = "error Ingrese todos los campos";
        // result.style.backgroundColor = "green"
        // result.style.visibility = "visible"
        
        result.hidden = true;
        error.hidden = false;
        return;
    }
    else {
        
        result.hidden = false;
        error.hidden = true;
        alert("Registro exitoso. A la brevedad recibirá un correo con las instrucciones para acceder a nuestra plataforma");
        return;
    }
}