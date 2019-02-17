function main() {
  var display = document.getElementById('display')
  var display2 = document.getElementById('display2')
  var operadora = 0
  var operadorb = 0
  var linea = 0
  var resultado = 0
  var ans = 0
  //var uno = document.getElementById('boton1')
  boton0.onclick = () => {display.innerHTML = display.innerHTML + "0"}
  boton1.onclick = () => {display.innerHTML = display.innerHTML + "1"}
  boton2.onclick = () => {display.innerHTML = display.innerHTML + "2"}
  boton3.onclick = () => {display.innerHTML = display.innerHTML + "3"}
  boton4.onclick = () => {display.innerHTML = display.innerHTML + "4"}
  boton5.onclick = () => {display.innerHTML = display.innerHTML + "5"}
  boton6.onclick = () => {display.innerHTML = display.innerHTML + "6"}
  boton7.onclick = () => {display.innerHTML = display.innerHTML + "7"}
  boton8.onclick = () => {display.innerHTML = display.innerHTML + "8"}
  boton9.onclick = () => {display.innerHTML = display.innerHTML + "9"}
  botonp.onclick = () => {display.innerHTML = display.innerHTML + "."}
  botonelevar.onclick = () => {
    operadora = display.innerHTML
    display.innerHTML = display.innerHTML + "^"}
  botonpor.onclick = () => {
    operadora = display.innerHTML
    console.log (operadora)
    display.innerHTML = display.innerHTML + "x"}
  botondiv.onclick = () => {
    operadora = display.innerHTML
    console.log(operadora)
    display.innerHTML = display.innerHTML + "÷"}
  botonmas.onclick = () => {
    operadora = display.innerHTML
    console.log(operadora)
    display.innerHTML = display.innerHTML + "+"}
  botonmenos.onclick = () => {
    operadora = display.innerHTML
    console.log(operadora)
    display.innerHTML = display.innerHTML + "-"}
  botonigual.onclick = () => {
    linea = display.innerHTML
    if (linea.includes("x")) {
      operadorb = linea.split("x")[1]
      resultado = parseFloat(operadora) * parseFloat(operadorb)}
    if (linea.includes("÷")) {
      operadorb = linea.split("÷")[1]
      resultado = parseFloat(operadora) / parseFloat(operadorb)}
    if (linea.includes("+")) {
      operadorb = linea.split("+")[1]
      resultado = parseFloat(operadora) + parseFloat(operadorb)}
    if (linea.includes("-")) {
      operadorb = linea.split("-")[1]
      resultado = parseFloat(operadora) - parseFloat(operadorb)}
    if (linea.includes("^")) {
        operadorb = linea.split("^")[1]
        resultado = parseFloat(operadora) ** parseFloat(operadorb)}
    display2.innerHTML = resultado
    console.log (operadorb)
    console.log (linea)
    console.log (resultado)
  }
  botonans.onclick = () => {display.innerHTML = display.innerHTML + "Ans"
                            ans = parseFloat(resultado);console.log(ans)}
  botondel.onclick = () => {display.innerHTML = display.innerHTML.slice(0,-1)}
  botonac.onclick = () => {display.innerHTML = ""
                           resultadoa = 0; resultadob = 0}
}
