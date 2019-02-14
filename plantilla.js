console.log ("Cadena")
function main() {
  console.log ("Estoy dentro del main")
  var boton = document.getElementById('boton')
  boton.onclick = () => {
    console.log("Boton apretado")
  var display = document.getElementById('display')
  display.innerHTML = "Nuevo Texto"
  }
}
