function main() {

  var operadora = 0
  var operadorb = 0
  var operacion = 0
  var resultado = 0

  var gui = {
    display: document.getElementById('display'),
    display2: document.getElementById('display2'),
    botonac: document.getElementById('botonac'),
    botondel: document.getElementById('botondel'),
    boton0: document.getElementById('boton0'),
    boton1: document.getElementById('boton1'),
    boton2: document.getElementById('boton2'),
    boton3: document.getElementById('boton3'),
    boton4: document.getElementById('boton4'),
    boton5: document.getElementById('boton5'),
    boton6: document.getElementById('boton6'),
    boton7: document.getElementById('boton7'),
    boton8: document.getElementById('boton8'),
    boton9: document.getElementById('boton9'),
    botonp: document.getElementById('botonp'),
    botonelevar: document.getElementById('botonelevar'),
    botonpor: document.getElementById('botonpor'),
    botondiv: document.getElementById('botondiv'),
    botonmas: document.getElementById('botonsuma'),
    botonmenos: document.getElementById('botonmenos')}

    //SCRIPT CONVERTIR BINARIO A ENTERO
  	function convertir_binario(valor){
  		var array = [];
  		var numeros = valor.split("");
  		var entero = 0;
  		var contador = 0;
  		for(var i = numeros.length-1; i>=0;i--){
  			if(numeros[i] == 0){
  				array[i] = 0;
  			}
  			else{
  				array[i] = Math.pow(2,contador);
  			}
  			contador++;
  		}
  		for(var a = 0; a < array.length; a++){
  			entero += array[a];
  		}
  		return entero;
  	}

    //SCRIPT CONVERTIR ENTERO A BINARIO
  	function convertir_entero(valor){
  		var resul_div = [];
  		var entradas = 0;
  		var resultado_binario = '';
  		while(valor > 0){
  			residuo = parseInt(valor % 2);
  			valor = parseInt(valor/2);
  			resul_div[entradas] = residuo;
  			entradas++;
  		}
  		for (var i = resul_div.length - 1; i >= 0; i--) {
  			resultado_binario += resul_div[i];
  		}
  		return resultado_binario;
  	}

//Acciones
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
    operadora = convertir_binario(display.innerHTML)
    display.innerHTML = display.innerHTML + "^"}
  botonpor.onclick = () => {
    operadora = convertir_binario(display.innerHTML)
    display.innerHTML = display.innerHTML + "x"}
  botondiv.onclick = () => {
    operadora = convertir_binario(display.innerHTML)
    display.innerHTML = display.innerHTML + "÷"}
  botonmas.onclick = () => {
    operadora = convertir_binario(display.innerHTML)
    display.innerHTML = display.innerHTML + "+"}
  botonmenos.onclick = () => {
    operadora = convertir_binario(display.innerHTML)
    display.innerHTML = display.innerHTML + "-"}
  botonigual.onclick = () => {
    linea = display.innerHTML
    if (linea.includes("^")){
      operadorb = convertir_binario(linea.split("^")[1])
      resultado = parseFloat(operadora) ** parseFloat(operadorb)}
    if (linea.includes("x")){
      operadorb = convertir_binario(linea.split("x")[1])
      resultado = parseFloat(operadora) * parseFloat(operadorb)}
    if (linea.includes("÷")){
      operadorb = convertir_binario(linea.split("÷")[1])
      resultado = parseFloat(operadora) / parseFloat(operadorb)}
    if (linea.includes("+")){
      operadorb = convertir_binario(linea.split("+")[1])
      resultado = parseFloat(operadora) + parseFloat(operadorb)}
    if (linea.includes("-")){
      operadorb = convertir_binario(linea.split("-")[1])
      resultado = parseFloat(operadora) - parseFloat(operadorb)}
    display2.innerHTML = convertir_entero(resultado)}
    botondel.onclick = () => {display.innerHTML = display.innerHTML.slice(0,-1)}
    botonac.onclick = () => {display.innerHTML = ""}
}
