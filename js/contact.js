const name = document.getElementById('InputName')
const email = document.getElementById('InputEmail');
const asunto = document.getElementById('InputSubject');
const mensaje = document.getElementById('InputMessage');
const formularioEnviar = document.getElementById('contact-form');
const btnEnviar = document.getElementById('BOTON1');
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    name.addEventListener('blur', validarCampo);

    //boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);
}

//Funciones
function inicioApp() {
    //desactivar btn enviar
    btnEnviar.disabled = true;
}

//Cuando se envia el correo

function enviarEmail(e) {

    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';


    const enviado = document.createElement('img');
    enviado.src = 'images/mail.gif';
    enviado.style.display = 'block';

//ocultar spinner y mostrar gif de enviado
    setTimeout(function () {
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function () {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);

    e.preventDefault();

}

//validar que el campo tenga algo escrito
function validarCampo() {

    validarLongitud(this);

    //validar email
    if (this.type === 'email') {
        validarEmail(this);
    }
