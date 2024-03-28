const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");
const btnBorrar = document.querySelector(".btn-borrar");
const notification = document.querySelector(".notification");

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

// 'La letra "e" es convertida para "enter"'
// 'La letra "i" es convertida para "imes"'
// 'La letra "a" es convertida para "ai"'
// 'La letra "o" es convertida para "ober"'
// 'La letra "u" es convertida para "ufat"'


function tieneCaracteresEsp(texto) {
    const regex = /^[a-z]+$/;
    return !regex.test(texto);
}

function btnEncriptador() {
    const textoActual = textArea.value.trim().toLowerCase();
    if (!textoActual) {
        alert("No hay texto para encriptar");
        return;
    }

    if (tieneCaracteresEsp(textoActual)) {
        alert("El texto contiene caracteres especiales o acentos.");
        return;
    }
    
    const textoEncriptado = encriptar(textoActual);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    matrizCodigo.forEach(([original, reemplazo]) => {
        stringEncriptada = stringEncriptada.replaceAll(original, reemplazo);
    });
    return stringEncriptada;
}

function btnDesencriptador() {
    const textoEncriptado = textArea.value.trim().toLowerCase();
    if (!textoEncriptado) {
        alert("No hay texto para desencriptar");
        return;
    }

    if (tieneCaracteresEsp(textoEncriptado)) {
        alert("El texto contiene caracteres especiales o acentos.");
        return;

    }
    
    const textoDesencriptado = desencriptar(textoEncriptado);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesEncriptada) {
    matrizCodigo.forEach(([original, reemplazo]) => {
        stringDesEncriptada = stringDesEncriptada.replaceAll(reemplazo, original);
    });
    return stringDesEncriptada;
}



btnCopiar.addEventListener("click", function () {
    mensaje.select();
    document.execCommand("copy");
    mostrarNotificacion();
});

btnBorrar.addEventListener("click", function () {
    alert("¿Estás seguro que deseas borrar el texto?");
    textArea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = "";
});

function mostrarNotificacion() {
    notification.classList.add("active");
    setTimeout(function () {
        notification.classList.remove("active");
    }, 3000);
}