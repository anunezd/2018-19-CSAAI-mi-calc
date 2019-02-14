//-- Punto de entrada: una vez cargada la página se llama a esta
//-- funcion: ahí comienza nuestro programa principal
function main(){
  console.log("Aquí comienza tu código JS...");

  var boton = document.getElementById('boton')

  boton.onclik = () => {
    console.log("Click");

    var display = document.getElementById('display');
    display.innerHTML = "NUEVO TEXTO"
  }
}
