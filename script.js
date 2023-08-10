const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// 'La letra "e" es convertida para "enter"'
// 'La letra "i" es convertida para "imes"'
// 'La letra "a" es convertida para "ai"'
// 'La letra "o" es convertida para "ober"'
// 'La letra "u" es convertida para "ufat"'

function btnEncriptador(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}

function btnDesencriptador(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function desencriptar(stringDesEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesEncriptada = stringDesEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesEncriptada.includes(matrizCodigo[i][1])){
            stringDesEncriptada = stringDesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesEncriptada
}


const btnCopiar = document.querySelector(".btn-copiar");
const notification = document.querySelector(".notification");

btnCopiar.addEventListener("click", function () {
  mensaje.select();
  document.execCommand("copy");

  mostrarNotificacion();
});

function mostrarNotificacion() {
  notification.classList.add("active");
  setTimeout(function () {
    notification.classList.remove("active");
  }, 3000); // Mostrar la notificación durante 3 segundos
}

