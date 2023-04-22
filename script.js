let textArea = document.querySelector(".encript-text");
let resultText = document.querySelector(".result-text");
let encriptorButton = document.querySelector(".encriptor-button");
let decryptButton = document.querySelector(".decrypt-button");
let cleanButton = document.querySelector(".clean-button");
let copyButton = document.querySelector(".copy-button");
let resultContainer = document.querySelectorAll(".img-result,.result,.class");
let hideObjects = true;
let encriptedText = "";
let decryptedText = "";
let copyText = "";

function encriptText(palabra) {
  palabra = palabra.replace(/[áäà]/gi, 'a');
  palabra = palabra.replace(/[éëè]/gi, 'e');
  palabra = palabra.replace(/[íïì]/gi, 'i');
  palabra = palabra.replace(/[óöò]/gi, 'o');
  palabra = palabra.replace(/[úüù]/gi, 'u');

  encriptedText = palabra.replace(/e/g, "enter");
  encriptedText = encriptedText.replace(/i/g, "imes");
  encriptedText = encriptedText.replace(/a/g, "ai");
  encriptedText = encriptedText.replace(/o/g, "ober");
  encriptedText = encriptedText.replace(/u/g, "ufat");
  resultText.textContent = encriptedText;
  console.log(encriptedText);

  if (resultText.textContent) {
    if (hideObjects) {
      resultContainer[0].style.display = "none";
      resultContainer[1].style.display = "none";
      resultContainer[2].style.display = "none";
    }
  }
}

function decryptText() {
  decryptedText = resultText.textContent;
  decryptedText = decryptedText.replace(/enter/g, "e");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ufat/g, "u");

  resultText.textContent = decryptedText;
}

function clearText() {
  resultText.textContent = "";
  textArea.value = "";
  hideObjects = false;

  if (!hideObjects) {
    location.reload();
  }

  hideObjects = true;
}

function copiarText(){

}

function pegarTextCopiado(){
  
}

encriptorButton.addEventListener("click", () => {
  encriptedText = textArea.value;
  
  encriptText(encriptedText.toLowerCase());
});

cleanButton.onclick = clearText;
decryptButton.onclick = decryptText;
