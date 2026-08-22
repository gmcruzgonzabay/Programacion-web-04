console.log("Validaciones cargadas....");
const nombre= document.getElementById("nombre");


// Evento input detecta cuando ingreso un caracter en el input

nombre.addEventListener( "input", function()
{

    console.log(nombre.value);
    console.log(nombre.value.length);
    if(nombre.value === ""){

        console.log("El nombre esta vacio");
    }

    if(nombre.value.length < 3){

        console.log("El nombre debe tener minimo 3 caracteres");
    }
}
);