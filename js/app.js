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
function validarMail(email) {
    //console.log("Holis desde validarMail")
    if (email.value.trim() != "" && expresion.test(email.value)) {
        email.className = "form-control is-valid";
    } else {
        email.className = "form-control is-invalid";
    }
}