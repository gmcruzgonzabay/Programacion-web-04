console.log("Archivo function cargado correctamente");
//alert("Esto es una alerta");

   let contador = 0;
    console.log(contador);

function mostrarMensaje() {

 
    // contador=contador+1;
    contador++;
    console.log("****************");
    console.log(contador);
    //alert("Esto es una alerta");
    const resultado = document.getElementById("resultado-js");
    resultado.textContent = "Hola!!He cambiado el texto desde JS";
    resultado.style.color = "red";

    if(contador ==1){

        resultado.textContent= "Primer Click";

    }
    else{

        resultado.textContent="Has hecho click "+ contador + " veces";
    }
    


}
//Errores comunes dentro de funciones
//el nombre de la funcion no es igual en html o js,
//no estoy llamando al id correcto