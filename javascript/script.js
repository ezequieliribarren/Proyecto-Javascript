// Variables/Arrays
let datosUsuario = [];
const DateTime = luxon.DateTime;
let teamsData = []; 


// Funciones

// Funcion preferencias de Usuario (Localstore/Libreria Sweet Alert/Formulario/Validacion).
function prefUsuario() {
    let pref = document.querySelector(".pref")
    pref.onclick = () => {
        Swal.fire({
            title: 'Datos',
            html: `
            <form id = "formulario" > 
            <h4> Nombre </h4>
            <input type="text" class= "nombre" id="nombre" required placeholder= "Nombre"> 
            <hr>
            <h4> Fecha de nacimiento </h4>
            <input type="date" class= "fechaNac" min="1940-01-01" max="2022-01-01" required placeholder= "Fecha de Nacimiento">
            <hr>
            <h4> Email </h4>
            <input type="email" class= "email" required  placeholder= "usuario@...">
            <hr>
            <h4> Equipo favorito </h4>
            <select id="equipoSelec" required>
            <option > Seleccione </option>
            </option>
            <option > Alfa Romeo</option>
            </option>
            <option > Alphatauri</option>
            </option>
            <option > Alpine</option>
            </option>
            <option > Aston Martin</option>
            </option>
            <option > Ferrari </option>
            <option > Hass</option>
            </option>
            <option > McLaren</option>
            </option>
            <option > Mercedes Benz</option>
            </option>
            <option > Red Bull</option>
            <option > Williams </option>
        </select>
        <hr>
        <input class= "send" type="submit" value="Guardar cambios">
            </form>
            `,
            confirmButtonText: 'Volver'
        })
        wrongName();
        let send = document.querySelector(".send")
        send.onclick = () => {

            let campoNombre = document.querySelector(".nombre")
            let equipoSelec = document.querySelector("#equipoSelec")
        
            let formulario = document.getElementById("formulario");
            formulario.addEventListener("submit", validarFormulario);


            function validarFormulario(ev) {
                if ((campoNombre.value == "") || (!isNaN(campoNombre.value))) {
                    ev.preventDefault();
                    Swal.fire({
                        title: 'Error',
                        icon: 'error',
                        text: "Ingrese un nombre válido",
                        confirmButtonText: "Aceptar"})

                }

                else if (equipoSelec = "Seleccione") {
                    ev.preventDefault();
                    Swal.fire({
                        title: 'Atención',
                        icon: 'info',
                        text: "No ha seleccionado su equipo favorito",
                        confirmButtonText: "Aceptar"})
                }
                else {
                    guardarDatosUsuario(),
                        location.reload()

                    Swal.fire(
                        'Datos Confirmados',
                    )
                }
            }
        }

    }
}

// Funcion con evento input.
function wrongName() {
    let campoNombre = document.querySelector(".nombre")
    campoNombre.oninput = () => {
        if (isNaN(campoNombre.value)) {
            campoNombre.style.color = "black";
        } else {
            campoNombre.style.color = "red";
        }
    }
}
// Validacion de formulario.
function validarFormulario(ev) {
    if ((campoNombre.value == "") || (!isNaN(campoNombre.value))) {
        ev.preventDefault();
        alert("Ingrese nombre válido")
    }
}
// Guardando datos del usuario en el Local Storage.
function guardarDatosUsuario() {
    let nombre = document.querySelector(".nombre")
    let fechaNac = document.querySelector(".fechaNac")
    let email = document.querySelector(".email")
    let equipoSelec = document.querySelector("#equipoSelec")

    let nombreUsuario = nombre.value;
    let fechaUsuario = fechaNac.value;
    let equipoSelecUsuario = equipoSelec.value
    let emailUsuario = email.value

    let usuario = [];
    usuario.push({ nombreUsuario, fechaUsuario, equipoSelecUsuario, emailUsuario });

    guardarLocal("usuario", JSON.stringify(usuario));

}
// Async function para obtener JSON Local (Devuelve la escuderia en el navegador) y seccion "Equipos"
async function obtenerJSON() {
    const URLJSON = "data.json"
    const resp = await fetch(URLJSON)
    let equipos = await resp.json();
    for (x of equipos) {
        teamsData.push(x.team.logo)
    }

    domUsuario();

            let verEquipos = document.querySelector(".verEquipos")
            let contEquipos = document.querySelector(".equipos")
            verEquipos.onclick = () => {
                if (verEquipos.innerText == "Ver Equipos") {
                    for (const x of equipos) {
                        let contenedor = document.createElement("div")
                        let posicionPuntos = document.createElement("div")
                        let pilotosDeEquipo = document.createElement("div")
                        let img = document.createElement("div")
                        let contPosicion = document.createElement("div")
                        let contPuntos = document.createElement("div")
                        let contDirector = document.createElement("div")
                        let contPresident = document.createElement("div")

                        posicionPuntos.classList.add("posicionPuntosEquipo")
                        pilotosDeEquipo.classList.add("flexPilotos")
                        img.classList.add("imgEquipos")

                        contenedor.innerHTML = `<h3>  ${x.team.name}</h3>`
                        contPosicion.innerHTML = `<h4> # ${x.position}</h4>`
                        contPuntos.innerHTML = ` <h4> ${x.points} pts</h4> `
                        img.innerHTML = `<img src = ${x.team.logo} alt ="">`
                        contEquipos.appendChild(contenedor)
                        contenedor.appendChild(pilotosDeEquipo)
                        contenedor.appendChild(posicionPuntos)
                        posicionPuntos.appendChild(contPosicion)
                        posicionPuntos.appendChild(contPuntos)
                        pilotosDeEquipo.appendChild(contPresident)
                        pilotosDeEquipo.appendChild(contDirector)
                        contenedor.appendChild(img)

                        verEquipos.innerText = "Ocultar Equipos"

                    }

                }

                else {
                    contEquipos.innerHTML = "";
                    verEquipos.innerText = "Ver Equipos";
                }
}
}

// Personalización de la pagina a traves de la elección de escuderia del usuario.
function domUsuario() {

    let pref = localStorage.getItem('usuario')
    if (pref === null) {
        Swal.fire({
            title: 'Seleccione sus preferencias',
            text: 'Ubique el boton en la barra superior',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/05/27/17/17/nut-1420234_1280.png',
            imageWidth: 40
        })
    }
    else {
        let prefUsuario = JSON.parse(pref)
        let colorForm = document.querySelector('.formaTit')
        let colorForm1 = document.querySelector('.formaTit1')
        let colorForm2 = document.querySelector('.formaTit2')
        let colorForm3 = document.querySelector('.formaTit3')
        let logoF1 = document.querySelector('.logoF1')

        if (prefUsuario[0].equipoSelecUsuario
            == "Alfa Romeo") {
            colorForm.style.background = "Brown"
            colorForm1.style.background = "Brown"
            colorForm2.style.background = "Brown"
            colorForm3.style.background = "Brown"
            logoF1.innerHTML = `<img src=${teamsData[5]}>`
            logoF1.style.background = "White"

        }
        else if (prefUsuario[0].equipoSelecUsuario
            == "Alphatauri") {
            colorForm.style.background = "White"
            colorForm1.style.background = "White"
            colorForm2.style.background = "White"
            colorForm3.style.background = "White"
            logoF1.innerHTML = `<img src= ${teamsData[7]}>`
            logoF1.style.background = "White"
        }
        else if (prefUsuario[0].equipoSelecUsuario
            == "Alpine") {
            colorForm.style.background = "rgb(13, 13, 230)"
            colorForm1.style.background = "rgb(13, 13, 230)"
            colorForm2.style.background = "rgb(13, 13, 230)"
            colorForm3.style.background = "rgb(13, 13, 230)"
            logoF1.innerHTML = `<img src=${teamsData[3]}>`
            logoF1.style.background = "White"
        }
        else if (prefUsuario[0].equipoSelecUsuario
            == "Aston Martin") {
            colorForm.style.background = "rgb(36, 92, 60)"
            colorForm1.style.background = "rgb(36, 92, 60)"
            colorForm2.style.background = "rgb(36, 92, 60)"
            colorForm3.style.background = "rgb(36, 92, 60)"
            logoF1.innerHTML = `<img src=${teamsData[8]}>`
        }

        else if (prefUsuario[0].equipoSelecUsuario
            == "Ferrari") {
            colorForm.style.background = "rgb(211, 0, 0)"
            colorForm1.style.background = "rgb(211, 0, 0)"
            colorForm2.style.background = "rgb(211, 0, 0)"
            colorForm3.style.background = "rgb(211, 0, 0)"
            logoF1.innerHTML = `<img src=${teamsData[1]}>`
        }
        else if (prefUsuario[0].equipoSelecUsuario
            == "Hass") {
            colorForm.style.background = "White"
            colorForm1.style.background = "White"
            colorForm2.style.background = "White"
            colorForm3.style.background = "White"
            logoF1.innerHTML = `<img src=${teamsData[6]}>`
            logoF1.style.background = "White"
        }
        else if (prefUsuario[0].equipoSelecUsuario
            == "McLaren") {
            colorForm.style.background = "rgb(211, 127, 0)"
            colorForm1.style.background = "rgb(211, 127, 0)"
            colorForm2.style.background = "rgb(211, 127, 0)"
            colorForm3.style.background = "rgb(211, 127, 0)"
            logoF1.innerHTML = `<img src=${teamsData[4]}>`
            logoF1.style.background = "White"
        }
        else if (prefUsuario[0].equipoSelecUsuario
            == "Mercedes Benz") {
            colorForm.style.background = " rgb(0, 184, 117)"
            colorForm1.style.background = " rgb(0, 184, 117)"
            colorForm2.style.background = " rgb(0, 184, 117)"
            colorForm3.style.background = " rgb(0, 184, 117)"
            logoF1.innerHTML = `<img src=${teamsData[2]}>`
            logoF1.style.background = "White"
        }
        else if (prefUsuario[0].equipoSelecUsuario
            == "Red Bull") {
            colorForm.style.background = " rgb(0, 0, 59)"
            colorForm1.style.background = " rgb(0, 0, 59)"
            colorForm2.style.background = " rgb(0, 0, 59)"
            colorForm3.style.background = " rgb(0, 0, 59)"
            logoF1.innerHTML = `<img src=${teamsData[0]}>`
        }
        else {
            colorForm.style.background = " rgb(0, 175, 239)"
            colorForm1.style.background = " rgb(0, 175, 239)"
            colorForm2.style.background = " rgb(0, 175, 239)"
            colorForm3.style.background = " rgb(0, 175, 239)"
            logoF1.innerHTML = `<img src=${teamsData[9]}>`
            logoF1.style.background = "rgb(0, 175, 239)"
        }
    }

}

// Fetch a traves de la API SPORTS (F1)

// Información de calendario de carreras y proximas carreras
function schedule() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '58622724afmshb746b3eea286b7ep1f9773jsn4008607a6d78',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
    };

    fetch('https://api-formula-1.p.rapidapi.com/races?type=race&season=2022', options)
        .then(response => response.json())
        .then(data => {

            let circuitos = data.response;

            for (const x of circuitos) {
                let fecha = DateTime.fromISO(x.date)
                let schedule = document.createElement('div')
                let eventos = document.querySelector('#eventos')
                eventos.appendChild(schedule)
                schedule.classList.add("col-8")

                if (x.status === "Scheduled") {
                    schedule.innerHTML = `<div class="flexSchedule">
                        <div>
                            <img src="${x.circuit.image}">
                        </div>
                        <div class = "ulSchedule">
                             <ul>
                                <li class="list-group-item list-group-item-dark">
                                    <h4>${x.circuit.name}</h4>
                                </li>
                                <li class="list-group-item list-group-item-dark">
                                    <h5> ${fecha.toLocaleString(DateTime.DATETIME_SHORT)} </h5>
                                </li>
                                <li class="list-group-item list-group-item-dark">
                                    <h5> Distancia: ${x.distance} </h5>
                                </li>
                                <li class="list-group-item list-group-item-dark">
                                    <h5> Vueltas: ${x.laps.total} </h5>
                                </li>
                            </ul>
                        </div>
                           
                    </div> `
                }

                else {
                    schedule.innerHTML = `<div class = "flexSchedule"> 
                        <div>
                            <img src="${x.circuit.image}" > 
                        </div>
                        <div>
                        <ul class = "ulSchedule">
                        <li class="list-group-item list-group-item-dark"> <h4>${x.circuit.name}</h4></li>
                        <li class="list-group-item list-group-item-dark"> <h5> ${fecha.toLocaleString(DateTime.DATETIME_SHORT)} </h5> </li>
                        </ul>
                        </div>
                        </div> `
                }
            }
            let cuerpoTabla = document.querySelector(".cuerpoTabla");
            for (x of circuitos) {
                if (x.status === "Scheduled") {
                    let fecha = DateTime.fromISO(x.date)
                    let $tr = document.createElement("tr");

                    let fechaTabla = document.createElement("td");
                    fechaTabla.innerHTML = `<h4> ${fecha.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)} </h4>`;
                    $tr.appendChild(fechaTabla);

                    let nombreTabla = document.createElement("td");
                    nombreTabla.innerHTML = `<h4>${x.circuit.name}</h4>`;
                    $tr.appendChild(nombreTabla);

                    let paisTabla = document.createElement("td");
                    paisTabla.innerHTML = `<h4>${x.competition.location.country}</h4> <img src="https://countryflagsapi.com/png/${x.competition.location.country}" class="banderaPais" alt="..."></img>`
                    $tr.appendChild(paisTabla);

                    let imagenTabla = document.createElement("td");
                    imagenTabla.classList.add("imagenTabla")
                    imagenTabla.innerHTML = `<img src="${x.circuit.image}" class="card-img-top" alt="..."></img>`;
                    $tr.appendChild(imagenTabla);

                    let horaTabla = document.createElement("td");
                    horaTabla.innerHTML = `<h4> ${fecha.hour}:${fecha.minute}${fecha.second} HS </h4>`
                    $tr.appendChild(horaTabla);

                    cuerpoTabla.appendChild($tr);
                }
            }
        })
}

// Datos de pilotos (Consumo de API) (Seccion "Pilotos")
function pilots() {

    fetch('http://demo8435158.mockable.io/pilots')
        .then(response => response.json())
        .then((data) => {
            let pilots = data
            console.log(pilots)
            for (const x of pilots) {
                let pilotos = document.querySelector('.pilotos')
                let contenedor = document.createElement("div")
                contenedor.classList.add("contenedor")
                let datosPiloto = document.createElement("div")
                let img = document.createElement("div")
                img.classList.add("img")
                let ulDatosPiloto = document.createElement("ul")
                let nombrePiloto = document.createElement("li")
                let contPosicion = document.createElement("li")
                let contPuntos = document.createElement("li")

                nombrePiloto.innerHTML = `<h4> ${x.driver.name}</h4>`
                contPosicion.innerHTML = `<h4 class= "posicion"> # ${x.position}</h4>`
                contPuntos.innerHTML = ` <h4>  ${x.points} pts</h4> `
                if (x.points == null) { contPuntos.innerHTML = ` <h4> 0 pts</h4> ` }
                img.innerHTML = `<img src = ${x.driver.image} alt ="">`


                pilotos.appendChild(contenedor)
                contenedor.appendChild(datosPiloto)
                contenedor.appendChild(img)
                datosPiloto.appendChild(ulDatosPiloto)
                ulDatosPiloto.appendChild(nombrePiloto)
                ulDatosPiloto.appendChild(contPosicion)
                ulDatosPiloto.appendChild(contPuntos)



            }
        })

}



obtenerJSON();
prefUsuario();
// schedule();
// pilots();

