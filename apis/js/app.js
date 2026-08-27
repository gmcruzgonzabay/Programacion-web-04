console.log("Archivo App.js cargado");
//1/ Datos de configuración
const apiKey = "5bd32ef97e1568a8582ee4c212d5c25c";
const url = "https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=" + apiKey;
const imagenBaseUrl="https://image.tmdb.org/t/p/w500";
//2- Elementos del HTML
const contenedorPeliculas = document.getElementById("contenedorPeliculas");
const estado = document.getElementById("estado");

//3- Funcion principal
// Promesos, futuros async
async function obtenerPeliculas() {

    console.log("consultando la API....");
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const peliculas = datos.results;




    peliculas.forEach(
        function (pelicula) {


            //Crear etiqueta artículo
            const tarjeta = document.createElement("article");
              //Titulo para cada pelicula
            const titulo = document.createElement("h2");

            //Mostrar la fecha de estreno
            const fecha= document.createElement("p");
            const descripcion = document.createElement("p");
            descripcion.classList.add("sinopsis");
            descripcion.textContent=pelicula.overview;


            //Crear etiqueta de imagen
            const poster = document.createElement("img");
            poster.src=   imagenBaseUrl+ pelicula.poster_path;
            poster.alt=  "Poster de "+pelicula.title;

            
            

            tarjeta.classList.add("pelicula");
            fecha.classList.add("fecha");


          
            titulo.textContent =pelicula.title;
            fecha.textContent=pelicula.release_date;

           // contenedorPeliculas.appendChild(titulo);

           //Agrego el titulo de cada pelicula en una tarjeta
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(poster);
            tarjeta.appendChild(fecha);
            tarjeta.appendChild(descripcion);
            contenedorPeliculas.appendChild(tarjeta);



            //MOstrar la descripcion de la pelicula



                console.log(pelicula.title);
        }
    );

    //console.log(url);
}


// 4-- Ejecuta la aplicación
obtenerPeliculas();



