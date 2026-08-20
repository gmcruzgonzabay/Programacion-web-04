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
    const resultado = document.getElementById("resultado-js"); //Obtiene el id de un elemento de HTML
    const boton = document.getElementById("btn");

    resultado.textContent = "Hola!!He cambiado el texto desde JS"; //Cambia el valor o el contenido de un id
    resultado.style.color = "red"; // cambia el color del texto

    if(contador ==1){

        resultado.textContent= "Primer Click";
        boton.disabled= true;
        resultado.textContent="Boton desactivado";

    }
    else{

        resultado.textContent="Has hecho click "+ contador + " veces";
    }
    


}
//Errores comunes dentro de funciones
//el nombre de la funcion no es igual en html o js,
//no estoy llamando al id correcto


function cambiarColor(){
    const boton = document.getElementById("btnColor");

    boton.style.backgroundColor="red";
    boton.style.color="black";

}

function colorOriginal()
{
        const boton = document.getElementById("btnColor");
        boton.style.backgroundColor="";
        boton.style.color="";


}