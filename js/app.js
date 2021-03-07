//Este archivo es donde desarrollamos la lógica de la validación
function campoRequerido(input) {
    //console.log("Holis desde compo requrido");
    //Con el this enviamos la etiqueta como parametro y le colocamos el nombre de input
    //Preguntamos si  es un campo vacio
    if (input.value.trim() === "") {
        input.className = "form-control is-invalid";
    } else {
        input.className = "form-control is-valid";
    }
}

//Declaro una expresión regular (valida caracteres+@+caracteres+.+almenos2caracteres)
let expresion = /\w+@\w+\.[a-z]{2,}$/;
//Implemento la función validarMail
function validarMail(mail) {
    //console.log("Holis desde validarMail")
    if (mail.value.trim() != "" && expresion.test(email.value)) {
        mail.className = "form-control is-valid";
    } else {
        mail.className = "form-control is-invalid";
    }
}

//Función que valida el teléfono
function validarTelefono(input) {
    console.log("Holis desde validarTelefono.");
    if (input.value.trim() != "" && !isNaN(input.value)) {
        input.className = "form-control is-valid";
    } else {
        input.className = "form-control is-invalid";
    }

}