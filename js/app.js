//Este archivo es donde desarrollamos la lógica de la validación
function campoRequerido(input) {
    //console.log("Holis desde compo requrido");
    //Con el this enviamos la etiqueta como parametro y le colocamos el nombre de input
    //Preguntamos si  es un campo vacio
    if (input.value.trim() === "") {
        input.className = "form-control is-invalid";
        return false;
    } else {
        input.className = "form-control is-valid";
        return true;
    }
}

//Declaro una expresión regular (valida caracteres+@+caracteres+.+almenos2caracteres)
let expresion = /\w+@\w+\.[a-z]{2,}$/;
//Implemento la función validarMail
function validarMail(mail) {
    //console.log("Holis desde validarMail")
    if (mail.value.trim() != "" && expresion.test(email.value)) {
        mail.className = "form-control is-valid";
        return true;
    } else {
        mail.className = "form-control is-invalid";
        return false;
    }
}

//Función que valida el teléfono
function validarTelefono(input) {
    //console.log("Holis desde validarTelefono.");
    if (input.value.trim() != "" && !isNaN(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }

}

//Función que valida el campo consulta
function validarConsulta(input) {
    //console.log("Holis desde validarConsulta");
    //console.log(input.value.length);
    if (input.value.trim() != "" && input.value.length >= 10) {
        input.className = "form-control is-valid";
        return true;

    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

//Funcion para contar los caracteres y mostarlos en la label
function contarCaracteres(input) {
    let cantidad = document.getElementById('caracteres');
    cantidad.innerHTML = `${input.value.length} caracteres`;
}

//Validamos el cheknox de novedades
let checkTerminos = document.getElementById('checkNovedades');
//uso un manejador de eventos junto a una función anónima y una normal para reutilizarla a  futuro
checkTerminos.addEventListener('change', function() {
    validarTerminos(checkTerminos);
})

function validarTerminos(checkTerminos) {
    if (checkTerminos.checked) {
        checkTerminos.className = "form-check-input is-valid";
        return true;
    } else {
        checkTerminos.className = "form-check-input is-invalid";
        return false;
    }
}

//Validiamos todo el formulario - a traves del botón enviar
function validarGeneral(event) {
    console.log("Holis desde validarGeneral");
    event.preventDefault();
    if (campoRequerido(document.querySelector('#nombre')) &&
        validarMail(document.querySelector('#email')) &&
        validarConsulta(document.querySelector('#consulta')) &&
        validarTelefono(document.querySelector('#telefono')) &&
        validarTerminos(checkTerminos)) {
        console.log("Holis Verdadero");

    } else {
        console.log("Holis falso");
    }
}