console.log("Archivo App.js cargado");
//1/ Datos de configuración
const apiKey="5bd32ef97e1568a8582ee4c212d5c25c";
const url = "https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=" + apiKey;

//2- Elementos del HTML
const contenedorPeliculas = document.getElementById("contenedorPeliculas");
const estado = document.getElementById("estado");

//3- Funcion principal
// Promesos, futuros async
async function obtenerPeliculas(){
    
    console.log("consultando la API....");
    const respuesta=await fetch(url);
    const datos = await respuesta.json();
    
    const peliculas=datos.results;
    
    peliculas.forEach(
        function(pelicula){
        console.log(pelicula.title);
                        }
    );
    
    //console.log(url);
}


// 4-- Ejecuta la aplicación
obtenerPeliculas();



