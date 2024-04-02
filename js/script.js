// Valida el formulario
//@fileover Archivo que  contiene el script para validar un formulario.
// El cual  utiliza expresiones regulares para la validación de campos
 /* Contiene funciones para validar los campos del formulario y  el envío del formulario.
 */


 // Esta función no devuelve ningún valor explícito. 
// su comportamiento se basa en manipular el DOM y envía mensajes de error si  los campos del formulario no son validas.
// Si todos los campos del formulario son válidos,
// la función manda un mensaje de alerta.
function validateForm(event) {
    event.preventDefault(); // 

    // Obtene los campos del formulario
    var nombreInput = document.getElementById('nombre').value;
    var apellidoInput = document.getElementById('apellido').value;
    var telefonoInput = document.getElementById('telefono').value;
    var emailInput = document.getElementById('email').value;

    // Verifica los formatos de los campos
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telefonoRegex = /^\d{10}$/;

    // Mensajes de error
    var nombreError = document.getElementById('nombre-error');
    var apellidoError = document.getElementById('apellido-error');
    var telefonoError = document.getElementById('telefono-error');
    var emailError = document.getElementById('email-error');

    // Valida nombre
    if (nombreInput.trim() === '') {
        nombreError.textContent = 'Por favor, introduce tu nombre.';
    } else {
        nombreError.textContent = '';
    }

    // Valida apellido
    if (apellidoInput.trim() === '') {
        apellidoError.textContent = 'Introduce tu apellido.';
    } else {
        apellidoError.textContent = '';
    }

    // Valida teléfono
    if (!telefonoRegex.test(telefonoInput)) {
        telefonoError.textContent = 'Introduce un número de teléfono válido.';
    } else {
        telefonoError.textContent = '';
    }

    // Valida correo electrónico
    if (emailInput.trim() === '' || !emailRegex.test(emailInput)) {
        emailError.textContent = 'Introduce un correo electrónico válido.';
    } else {
        emailError.textContent = '';
    }

    // Comproba si todos los campos son válidos
    if (nombreInput.trim() !== '' && apellidoInput.trim() !== '' && telefonoRegex.test(telefonoInput) && emailRegex.test(emailInput)) {
        alert('¡Listo! Ahora estas a punto de comenzar con esta gran experiencia!');
    }
}

// Evento de escucha para enviar del formulario
var form = document.getElementById('register-form');
form.addEventListener('submit', validateForm);
