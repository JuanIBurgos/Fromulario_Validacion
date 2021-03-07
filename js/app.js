//Este archivo es donde desarrollamos la lógica de la validación
function campoRequerido(input) {
    //console.log("Holis desde compo requrido");
    //Con el this enviamos la etiqueta como parametro y le colocamos el nombre de input
    //Preguntamos si  es un campo vacio
    if (input.value === "") {
        input.className = "form-control is-invalid";
    } else {
        input.className = "form-control is-valid";
    }
}