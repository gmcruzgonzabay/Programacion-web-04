console.log("Validaciones cargadas....");
const nombre= document.getElementById("nombre");
const correo= document.getElementById("correo");
const telefono = document.getElementById("telefono");

const nombreQuery= document.querySelector("#nombre");
const formulario=document.querySelector(".contact-form");
const resultado= document.querySelector("#resultado-js");




// Evento input detecta cuando ingreso un caracter en el input

nombre.addEventListener( "input", function()
{

    console.log(nombre.value);
    console.log(nombre.value.length);
    if(nombre.value.trim() === ""){

        console.log("El nombre esta vacio");
    }

    if(nombre.value.length < 3){

        console.log("El nombre debe tener minimo 3 caracteres");
    }

    console.log(" MAYUSCULAS")
    console.log(nombre.value.toUpperCase());
    console.log("Minusculas");
    console.log(nombre.value.toLowerCase());

}
);
// Fin Nombre input Listener

nombreQuery.addEventListener(
    "input", function(){


console.log("Ingreso por QuerySelector");



    }
);


nombre.addEventListener( "focus",function(){

    console.log("El usuario ingreso al campo nombre");
}
);

correo.addEventListener("focus", function(){

    console.log("El usuario ingreso al campo correo");
});


correo.addEventListener(
"input",function(){
console.log("Evento input de correo");
if(correo.value.includes("admin")){
    console.log("No puedes utiizar la palabra admin");
}


}

);


// Agregar la validacion que el campo telefono debe tener 10 digitos

telefono.addEventListener("input", function(){

    if(telefono.value.length < 10){

        console.log(" El telefono debe tener 10 digitos");
    }

    if(isNaN(telefono.value)){
        console.log("El telefono solo debe contener numeros");
    }

    if(telefono.value.length==10){
        telefono.disabled=true;
    }


}
);



formulario.addEventListener("submit",function(evento){

    evento.preventDefault();
    
    resultado.classList.remove("alert-success");
    resultado.classList.remove("alert-danger");
    if(nombre.value.trim() === "")
    {

        alert("Debe ingresar un nombre");
        resultado.textContent="Debe ingresar el nombre";
        resultado.classList.add("alert");
        resultado.classList.add("alert-danger");

        return; // Salgo de la funcion para que no siga evaluando las siguiente lineas
    }



    resultado.textContent="Formulario eviado correctamente";
    resultado.classList.add("alert");
    resultado.classList.add("alert-success");

    console.log("se presiono enviar");
});


//Focus entro al campo
//input estoy escribiendo
//blur salgo del campo