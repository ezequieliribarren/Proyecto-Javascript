// Variables Globales
let datosUsuario = [];

// Funciones

// Funcion preferencias de Usuario (Localstore/Libreria Sweet Alert)
function prefUsuario() {
    pref = document.querySelector(".pref"),
        pref.onclick = () => {
            Swal.fire({
                title: 'Datos',
                html: `
            <form> 
            <h4> Nombre </h4>
            <input type="text" class= "nombre" placeholder= "Nombre"> 
            <hr>
            <h4> Seleccione Pais </h4>
            <select id="paisSelec">
            <option > Argentina </option>
            <option > Mexico <img src="img/paises/mexico.png" alt="Mexico" class="logo1"></option>
            <option > EE.UU <img src="img/paises/estadosUnidos.png" alt="EE.UU" class="logo1"> </option>
        </select>
            <hr>
            <h4> Fecha de nacimiento </h4>
            <input type="text" class= "fechaNac" placeholder= "Fecha de Nacimiento">
            <hr>
            <h4> Piloto Favorito </h4>
            <input type="text" class= "pilotoFav" placeholder= "Piloto Favorito">
            <hr>
            <button>Guardar Preferencias </button>
            </form>
            `,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Datos Confirmados',
                        guardarDatosUsuario()
                    )
                }
            })
        }


} 

function guardarDatosUsuario() {
    let nombre = document.querySelector(".nombre").value
    let fechaNac = document.querySelector(".fechaNac").value
    let pilotoFav = document.querySelector(".pilotoFav").value
    let paisSelec = document.querySelector("#paisSelec").value

    let nombreUsuario = nombre.value;
    let fechaUsuario = fechaNac.value;
    let pilotoUsuario = pilotoFav.value;
    let paisUsuario = paisSelec.value;

    const datosTempUsuario = [
        {
            nombreUsuario,
            fechaUsuario,
            pilotoUsuario,
            paisUsuario
        }
    ]

    for (x of datosTempUsuario) {
        datosUsuario.push({ nombreUsuario, fechaUsuario, pilotoUsuario, paisUsuario });

        guardarLocal("datosUsuario", JSON.stringify(datosUsuario));
    }



}
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

function mostrarSchedule() {

    for (const c of scheduleAlm1) {
        let schedule1 = document.querySelector(".schedule1")
        let contenedor = document.createElement("div");
        let circuitoFecha = document.createElement("div")
        circuitoFecha.classList.add("flexCircFecha")
        let img = document.createElement("div")
        let contCircuito = document.createElement("div")
        let contFecha = document.createElement("div")
        let contHora = document.createElement("button")

        contCircuito.innerHTML = `<h4>  ${c.circuito}</h4>`
        contFecha.innerHTML = ` <h4>  ${c.fecha}</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`;
        contHora.innerHTML = `<h4> Mas Horarios </h4> `
        schedule1.appendChild(contenedor)
        contenedor.appendChild(circuitoFecha)
        circuitoFecha.appendChild(contCircuito)
        circuitoFecha.appendChild(contFecha)
        circuitoFecha.appendChild(contHora)
        contenedor.appendChild(img)

        contHora.onclick = () => {
            alert("Horario Mexico: " + parseInt(c.hora - 1) + ":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
        }


    }


    for (const c of scheduleAlm2) {
        let schedule2 = document.querySelector(".schedule2")
        let contenedor = document.createElement("div");
        let circuitoFecha = document.createElement("div")
        circuitoFecha.classList.add("flexCircFecha")
        let img = document.createElement("div")
        let contCircuito = document.createElement("div")
        let contFecha = document.createElement("div")
        let contHora = document.createElement("button")


        contCircuito.innerHTML = `<h4>  ${c.circuito}</h4>`
        contFecha.innerHTML = ` <h4>  ${c.fecha}</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`;
        contHora.innerHTML = `<h4> Mas Horarios </h4> `
        schedule2.appendChild(contenedor)
        contenedor.appendChild(circuitoFecha)
        circuitoFecha.appendChild(contCircuito)
        circuitoFecha.appendChild(contFecha)
        contenedor.appendChild(img)
        circuitoFecha.appendChild(contHora)

        contHora.onclick = () => {
            alert("Horario Mexico: " + parseInt(c.hora - 1) + ":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
        }

    }


    for (const c of scheduleAlm3) {
        let schedule3 = document.querySelector(".schedule3")
        let contenedor = document.createElement("div");
        let circuitoFecha = document.createElement("div")
        circuitoFecha.classList.add("flexCircFecha")
        let img = document.createElement("div")
        let contCircuito = document.createElement("div")
        let contFecha = document.createElement("div")
        let contHora = document.createElement("button")


        contCircuito.innerHTML = `<h4>  ${c.circuito}</h4>`
        contFecha.innerHTML = ` <h4>  ${c.fecha}</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`;
        contHora.innerHTML = `<h4> Mas Horarios </h4> `
        schedule3.appendChild(contenedor)
        contenedor.appendChild(circuitoFecha)
        circuitoFecha.appendChild(contCircuito)
        circuitoFecha.appendChild(contFecha)
        contenedor.appendChild(img)
        circuitoFecha.appendChild(contHora)

        contHora.onclick = () => {
            alert("Horario Mexico: " + parseInt(c.hora - 1) + ":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
        }

    }


    for (const c of scheduleAlm4) {
        let schedule4 = document.querySelector(".schedule4")
        let contenedor = document.createElement("div");
        let circuitoFecha = document.createElement("div")
        circuitoFecha.classList.add("flexCircFecha")
        let img = document.createElement("div")
        let contCircuito = document.createElement("div")
        let contFecha = document.createElement("div")
        let contHora = document.createElement("button")


        contCircuito.innerHTML = `<h4>  ${c.circuito}</h4>`
        contFecha.innerHTML = ` <h4>  ${c.fecha}</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`
        contHora.innerHTML = `<h4> Mas Horarios </h4> `
        schedule4.appendChild(contenedor)
        contenedor.appendChild(circuitoFecha)
        circuitoFecha.appendChild(contCircuito)
        circuitoFecha.appendChild(contFecha)
        contenedor.appendChild(img)
        circuitoFecha.appendChild(contHora)

        contHora.onclick = () => {
            alert("Horario Mexico: " + parseInt(c.hora - 1) + ":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
        }


    }

    for (const c of scheduleAlm5) {
        let schedule5 = document.querySelector(".schedule5")
        let contenedor = document.createElement("div");
        let circuitoFecha = document.createElement("div")
        circuitoFecha.classList.add("flexCircFecha")
        let img = document.createElement("div")
        let contCircuito = document.createElement("div")
        let contFecha = document.createElement("div")
        let contHora = document.createElement("button")


        contCircuito.innerHTML = `<h4>  ${c.circuito}</h4>`
        contFecha.innerHTML = ` <h4>  ${c.fecha}</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`
        contHora.innerHTML = `<h4> Mas Horarios </h4> `
        schedule5.appendChild(contenedor)
        contenedor.appendChild(circuitoFecha)
        circuitoFecha.appendChild(contCircuito)
        circuitoFecha.appendChild(contFecha)
        contenedor.appendChild(img)
        circuitoFecha.appendChild(contHora)

        contHora.onclick = () => {
            alert("Horario Mexico: " + parseInt(c.hora - 1) + ":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
        }

    }

    for (const c of scheduleAlm6) {
        let schedule6 = document.querySelector(".schedule6")
        let contenedor = document.createElement("div");
        let circuitoFecha = document.createElement("div")
        circuitoFecha.classList.add("flexCircFecha")
        let img = document.createElement("div")
        let contCircuito = document.createElement("div")
        let contFecha = document.createElement("div")
        let contHora = document.createElement("button")


        contCircuito.innerHTML = `<h4>  ${c.circuito}</h4>`
        contFecha.innerHTML = ` <h4>  ${c.fecha}</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`;
        contHora.innerHTML = `<h4> Mas Horarios </h4> `
        schedule6.appendChild(contenedor)
        contenedor.appendChild(circuitoFecha)
        circuitoFecha.appendChild(contCircuito)
        circuitoFecha.appendChild(contFecha)
        contenedor.appendChild(img)
        circuitoFecha.appendChild(contHora)

        contHora.onclick = () => {
            alert("Horario Mexico: " + parseInt(c.hora - 1) + ":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
        }

    }
}

function mostrarPilotos() {

    for (const c of pilotos1) {
        let pilotos1 = document.querySelector(".pilotos1")
        let contenedor = document.createElement("div");
        let posicionPuntos = document.createElement("div")
        posicionPuntos.classList.add("flexPosicionPuntos")
        let img = document.createElement("div")
        let contPosicion = document.createElement("div")
        let contPuntos = document.createElement("div")

        contPosicion.innerHTML = `<h4> # ${c.posicion}</h4>`
        contPuntos.innerHTML = ` <h4>  ${c.puntos} pts</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`;
        pilotos1.appendChild(contenedor)
        contenedor.appendChild(posicionPuntos)
        posicionPuntos.appendChild(contPosicion)
        posicionPuntos.appendChild(contPuntos)
        contenedor.appendChild(img)

    }

    for (const c of pilotos2) {
        let pilotos2 = document.querySelector(".pilotos2")
        let contenedor = document.createElement("div");
        let posicionPuntos = document.createElement("div")
        posicionPuntos.classList.add("flexPosicionPuntos")
        let img = document.createElement("div")
        let contPosicion = document.createElement("div")
        let contPuntos = document.createElement("div")

        contPosicion.innerHTML = `<h4> # ${c.posicion}</h4>`
        contPuntos.innerHTML = ` <h4>  ${c.puntos} pts</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`;
        pilotos2.appendChild(contenedor)
        contenedor.appendChild(posicionPuntos)
        posicionPuntos.appendChild(contPosicion)
        posicionPuntos.appendChild(contPuntos)
        contenedor.appendChild(img)

    }

    for (const c of pilotos3) {
        let pilotos3 = document.querySelector(".pilotos3")
        let contenedor = document.createElement("div");
        let posicionPuntos = document.createElement("div")
        posicionPuntos.classList.add("flexPosicionPuntos")
        let img = document.createElement("div")
        let contPosicion = document.createElement("div")
        let contPuntos = document.createElement("div")

        contPosicion.innerHTML = `<h4> # ${c.posicion}</h4>`
        contPuntos.innerHTML = ` <h4>  ${c.puntos} pts</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`;
        pilotos3.appendChild(contenedor)
        contenedor.appendChild(posicionPuntos)
        posicionPuntos.appendChild(contPosicion)
        posicionPuntos.appendChild(contPuntos)
        contenedor.appendChild(img)

    }

    for (const c of pilotos4) {
        let pilotos4 = document.querySelector(".pilotos4")
        let contenedor = document.createElement("div");
        let posicionPuntos = document.createElement("div")
        posicionPuntos.classList.add("flexPosicionPuntos")
        let img = document.createElement("div")
        let contPosicion = document.createElement("div")
        let contPuntos = document.createElement("div")

        contPosicion.innerHTML = `<h4> # ${c.posicion}</h4>`
        contPuntos.innerHTML = ` <h4>  ${c.puntos} pts</h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`;
        pilotos4.appendChild(contenedor)
        contenedor.appendChild(posicionPuntos)
        posicionPuntos.appendChild(contPosicion)
        posicionPuntos.appendChild(contPuntos)
        contenedor.appendChild(img)

    }

    for (const c of pilotos5) {
        let pilotos5 = document.querySelector(".pilotos5")
        let contenedor = document.createElement("div");
        let posicionPuntos = document.createElement("div")
        posicionPuntos.classList.add("flexPosicionPuntos")
        let img = document.createElement("div")
        let contPosicion = document.createElement("div")
        let contPuntos = document.createElement("div")

        contPosicion.innerHTML = `<h4> # ${c.posicion}</h4>`
        contPuntos.innerHTML = ` <h4>  ${c.puntos} pts </h4> `
        img.innerHTML = `<img src = ${c.img} alt ="">`;
        pilotos5.appendChild(contenedor)
        contenedor.appendChild(posicionPuntos)
        posicionPuntos.appendChild(contPosicion)
        posicionPuntos.appendChild(contPuntos)
        contenedor.appendChild(img)

    }

};

function infoEquipos() {
    let verEquipos = document.querySelector(".verEquipos")
    let contEquipos = document.querySelector(".equipos")
    verEquipos.onclick = () => {
        if (verEquipos.innerText == "Ver Equipos") {
            for (const c of equipos) {
                let contenedor = document.createElement("div")
                let posicionPuntos = document.createElement("div")
                let pilotosDeEquipo = document.createElement("div")
                let img = document.createElement("div")
                let contPosicion = document.createElement("div")
                let contPuntos = document.createElement("div")
                let contPiloto1 = document.createElement("div")
                let contPiloto2 = document.createElement("div")

                posicionPuntos.classList.add("posicionPuntosEquipo")
                pilotosDeEquipo.classList.add("flexPilotos")
                img.classList.add("imgEquipos")

                contenedor.innerHTML = `<h3>  ${c.equipo}</h3>`
                contPosicion.innerHTML = `<h4> # ${c.posicion}</h4>`
                contPuntos.innerHTML = ` <h4> ${c.puntos} pts</h4> `
                contPiloto1.innerHTML = `<h4>  ${c.piloto1}</h4>`
                contPiloto2.innerHTML = ` <h4> ${c.piloto2} </h4> `
                img.innerHTML = `<img src = ${c.img} alt ="">`;

                contEquipos.appendChild(contenedor)
                contenedor.appendChild(pilotosDeEquipo)
                contenedor.appendChild(posicionPuntos)
                posicionPuntos.appendChild(contPosicion)
                posicionPuntos.appendChild(contPuntos)
                pilotosDeEquipo.appendChild(contPiloto1)
                pilotosDeEquipo.appendChild(contPiloto2)
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

// Arrays 
const fechas2022 = [
    {
        fecha: new Date(2022, 2, 20, 10),
    },
    {
        fecha: new Date(2022, 2, 27, 11)
    },
    {
        fecha: new Date(2022, 3, 10, 12)
    },
    {
        fecha: new Date(2022, 3, 24, 10)
    },
    {
        fecha: new Date(2022, 4, 8, 11)
    },
    {
        fecha: new Date(2022, 4, 22, 12)
    },
    {
        fecha: new Date(2022, 4, 29, 11)
    },
    {
        fecha: new Date(2022, 5, 12, 12)
    },
    {
        fecha: new Date(2022, 5, 19, 10)
    },
    {
        fecha: new Date(2022, 6, 3, 13)
    },
    {
        fecha: new Date(2022, 6, 10, 11)
    },
    {
        fecha: new Date(2022, 6, 24, 11)
    },
    {
        fecha: new Date(2022, 6, 31, 10)
    },
    {
        fecha: new Date(2022, 7, 28, 10)
    },
    {
        fecha: new Date(2022, 8, 4, 12)
    },
    {
        fecha: new Date(2022, 8, 11, 12)
    },
    {
        fecha: new Date(2022, 9, 2, 11)
    },
    {
        fecha: new Date(2022, 9, 9, 12)
    },
    {
        fecha: new Date(2022, 9, 23, 11)
    },
    {
        fecha: new Date(2022, 9, 30, 12)
    },
    {
        fecha: new Date(2022, 10, 13, 9)
    },
    {
        fecha: new Date(2022, 10, 20, 10)
    }
];
const horaEventos = [];
const fechasFormato = [];

for (f of fechas2022) {
    let fecha = f.fecha.getDate() + "/" + f.fecha.getMonth() + "/" + f.fecha.getFullYear() + " " + f.fecha.getHours() + ":" + f.fecha.getMinutes() + f.fecha.getSeconds() + " hs. (Argentina)";

    fechasFormato.push(fecha)
}  

for (f of fechas2022) {
    let hora = f.fecha.getHours();

    horaEventos.push(hora)

}

const equipos = [
    {
        equipo: "Red Bull Racing",
        piloto1: "Max Verstappen",
        piloto2: "Sergio Perez",
        posicion: 1,
        puntos: 396,
        img: 'img/equipos/redBull.png'
    },
    {
        equipo: "Ferrari",
        piloto1: "Charles Leclerc",
        piloto2: "Carlos Sainz",
        posicion: 2,
        puntos: 314,
        img: 'img/equipos/ferrari.png'
    },
    {
        equipo: "Mercedes Benz",
        piloto1: "George Russell",
        piloto2: "Lewis Hamilton",
        posicion: 3,
        puntos: 270,
        img: 'img/equipos/mercedes.png'
    },
    {
        equipo: "Alpine",
        piloto1: "Esteban Ocon",
        piloto2: "Fernando Alonso",
        posicion: 4,
        puntos: 93,
        img: 'img/equipos/alpine.png'
    },

    {
        equipo: "McLaren",
        piloto1: "Lando Norris",
        piloto2: "Daniel Ricciardo",
        posicion: 5,
        puntos: 89,
        img: 'img/equipos/mclaren.png'
    },
    {
        equipo: "Alfa Romeo",
        piloto1: "Zhou Guanyu",
        piloto2: "Valtteri Botas",
        posicion: 6,
        puntos: 51,
        img: 'img/equipos/alfaRomeo.png'
    },
    {
        equipo: "Haas F1 Team",
        piloto1: "Kevin Magnussen",
        piloto2: "Mick Schumacher",
        posicion: 7,
        puntos: 34,
        img: 'img/equipos/hass.png'
    },
    {
        equipo: "AlphaTauri",
        piloto1: "Pierre Gasly",
        piloto2: "Yuki Tsunoda",
        posicion: 8,
        puntos: 27,
        img: 'img/equipos/alphatauri.png'
    },
    {
        equipo: "Aston Martin",
        piloto1: "Sebastian Vettel",
        piloto2: "Lance Stroll",
        posicion: 9,
        puntos: 19,
        img: 'img/equipos/astonMartin.png'
    },

    {
        equipo: "Williams",
        piloto1: "Alexander Albon",
        piloto2: "Nicholas Latifi",
        posicion: 10,
        puntos: 3,
        img: 'img/equipos/williams.png'
    },

];

// Array calendario en partes
const schedule1 = [
    {
        circuito: "Bahrain International Circuit",
        vueltas: 57,
        fecha: fechasFormato[0],
        hora: horaEventos[0],
        img: "./img/circuitos/bahrain.png"

    },
    {
        circuito: "Jeddah",
        vueltas: 50,
        fecha: fechasFormato[1],
        hora: horaEventos[1],
        img: "img/circuitos/jeddah.png"


    },
    {
        circuito: "Albert Park",
        vueltas: 58,
        fecha: fechasFormato[2],
        hora: horaEventos[2],
        img: 'img/circuitos/albertPark.png'

    },
    {
        circuito: "Autodromo Enzo e Dino Ferrari",
        vueltas: 63,
        fecha: fechasFormato[3],
        hora: horaEventos[3],
        img: 'img/circuitos/enzoEDino.png'

    },]
const schedule2 = [
    {
        circuito: "Autodromo Internacional de Miami",
        vueltas: 57,
        fecha: fechasFormato[4],
        hora: horaEventos[4],
        img: 'img/circuitos/miamiCircuit.png'

    },
    {
        circuito: "Circuit de Barcelona - Catalunya",
        vueltas: 66,
        fecha: fechasFormato[5],
        hora: horaEventos[5],
        img: 'img/circuitos/barcelonaCircuit.png'

    },
    {
        circuito: "Monte Carlo",
        vueltas: 78,
        fecha: fechasFormato[6],
        hora: horaEventos[6],
        img: 'img/circuitos/monacoCircuit.png'

    },
    {
        circuito: "Baku City Circuit",
        vueltas: 51,
        fecha: fechasFormato[7],
        hora: horaEventos[7],
        img: 'img/circuitos/bakuCityCircuit.png'

    }]
const schedule3 = [
    {
        circuito: "Circuit Gilles Villeneuve",
        vueltas: 70,
        fecha: fechasFormato[8],
        hora: horaEventos[8],
        img: 'img/circuitos/gillesVillenueveCircuit.png'

    },
    {
        circuito: "Silverstone",
        vueltas: 52,
        fecha: fechasFormato[9],
        hora: horaEventos[9],
        img: 'img/circuitos/silverstoneCircuit.png'

    },
    {
        circuito: "Red Bull Ring",
        vueltas: 71,
        fecha: fechasFormato[10],
        hora: horaEventos[10],
        img: 'img/circuitos/redBullRing.png'

    },
    {
        circuito: "Paul Ricard",
        vueltas: 53,
        fecha: fechasFormato[11],
        hora: horaEventos[11],
        img: 'img/circuitos/paulRicardCircuit.png'

    }]
const schedule4 = [
    {
        circuito: "Hungaroring",
        vueltas: 70,
        fecha: fechasFormato[12],
        hora: horaEventos[12],
        img: 'img/circuitos/hungaroRing.png'

    },
    {
        circuito: "Spa - Francorchamps",
        vueltas: 44,
        fecha: fechasFormato[13],
        hora: horaEventos[13],
        img: 'img/circuitos/spaFrancorChamps.png'

    },
    {
        circuito: "Zandvoort",
        vueltas: 72,
        fecha: fechasFormato[14],
        hora: horaEventos[14],
        img: 'img/circuitos/zandvoort.png'

    },
    {
        circuito: "Autodromo Nazionale di Monza",
        vueltas: 53,
        fecha: fechasFormato[15],
        hora: horaEventos[15],
        img: 'img/circuitos/monza.png'

    }]
const schedule5 = [

    {
        circuito: "Marina Bay Circuit",
        vueltas: 61,
        fecha: fechasFormato[16],
        hora: horaEventos[16],
        img: 'img/circuitos/marinaBayCircuit.png'

    },
    {
        circuito: "Suzuka",
        vueltas: 53,
        fecha: fechasFormato[17],
        hora: horaEventos[17],
        img: 'img/circuitos/suzukaCircuit.png'

    },
    {
        circuito: "Circuito de las Americas",
        vueltas: 56,
        fecha: fechasFormato[18],
        hora: horaEventos[18],
        img: 'img/circuitos/circuitOfTheAmericas.png'

    },
    {
        circuito: "Interlagos",
        vueltas: 71,
        fecha: fechasFormato[19],
        hora: horaEventos[19],
        img: 'img/circuitos/interlagos.png'

    }]
const schedule6 = [
    {
        circuito: "Yas Marina Circuit",
        vueltas: 58,
        fecha: fechasFormato[20],
        hora: horaEventos[20],
        img: 'img/circuitos/yasMarinaCircuit.png'

    },

    {
        circuito: "Hermanos Rodriguez",
        vueltas: 71,
        fecha: fechasFormato[21],
        hora: horaEventos[21],
        img: 'img/circuitos/hermanosRodriguez.png'

    },



];


// Array calendario completo (Spread)
const schedule = [...schedule1,...schedule2,...schedule3,...schedule4,...schedule5,...schedule6]


// LOCALSTORAGE JSON (Utilizado para realizar el for del calendario)
guardarLocal("schedule1", JSON.stringify(schedule1));
guardarLocal("schedule2", JSON.stringify(schedule2));
guardarLocal("schedule3", JSON.stringify(schedule3));
guardarLocal("schedule4", JSON.stringify(schedule4));
guardarLocal("schedule5", JSON.stringify(schedule5));
guardarLocal("schedule6", JSON.stringify(schedule6));

const scheduleAlm1 = JSON.parse(localStorage.getItem("schedule1"));
const scheduleAlm2 = JSON.parse(localStorage.getItem("schedule2"));
const scheduleAlm3 = JSON.parse(localStorage.getItem("schedule3"));
const scheduleAlm4 = JSON.parse(localStorage.getItem("schedule4"));
const scheduleAlm5 = JSON.parse(localStorage.getItem("schedule5"));
const scheduleAlm6 = JSON.parse(localStorage.getItem("schedule6"));

// Array pilotos por partes
const pilotos1 = [
    {
        piloto: "Max Verstappen",
        numero: 1,
        equipo: "Red Bull Racing",
        posicion: 1,
        puntos: 233,
        img: "./img/pilotos/maxVerstappen.jpg"
    },
    {
        piloto: "Charles Leclerc",
        numero: 16,
        equipo: "Ferrari",
        posicion: 2,
        puntos: 170,
        img: "./img/pilotos/charlesLeclerc.jpg"

    },
    {
        piloto: "Sergio Perez",
        numero: 11,
        equipo: "Red Bull Racing",
        posicion: 3,
        puntos: 163,
        img: "./img/pilotos/sergioPerez.jpg"
    }
]
const pilotos2 = [

    {
        piloto: "Carlos Sainz",
        numero: 55,
        equipo: "Ferrari",
        posicion: 4,
        puntos: 144,
        img: "./img/pilotos/carlosSainz.jpg"

    },
    {
        piloto: "George Russell",
        numero: 63,
        equipo: "Mercedes Benz",
        posicion: 5,
        puntos: 143,
        img: "./img/pilotos/georgeRussel.jpg"
    },
    {
        piloto: "Lewis Hamilton",
        numero: 44,
        equipo: "Mercedes Benz",
        posicion: 6,
        puntos: 127,
        img: "./img/pilotos/luisHamilton.jpg"

    },
    {
        piloto: "Lando Norris",
        numero: 4,
        equipo: "McLaren",
        posicion: 7,
        puntos: 70,
        img: "./img/pilotos/landoNorris.jpg"
    },
    {
        piloto: "Esteban Ocon",
        numero: 31,
        equipo: "Alpine",
        posicion: 8,
        puntos: 56,
        img: "./img/pilotos/estebanOcon.jpg"
    }];
const pilotos3 = [
    {
        piloto: "Valtteri Bottas",
        numero: 77,
        equipo: "Alfa Romeo",
        posicion: 9,
        puntos: 46,
        img: "./img/pilotos/valtteriBotas.jpg"
    },
    {
        piloto: "Fernando Alonso",
        numero: 14,
        equipo: "Alpine",
        posicion: 10,
        puntos: 37,
        img: "./img/pilotos/fernandoAlonso.jpg"

    },
    {
        piloto: "Kevin Magnussen",
        numero: 20,
        equipo: "Haas F1 Team",
        posicion: 11,
        puntos: 22,
        img: "./img/pilotos/kevinMagnussen.jpg"
    },
    {
        piloto: "Daniel Ricciardo",
        numero: 3,
        equipo: "McLaren",
        posicion: 12,
        puntos: 19,
        img: "./img/pilotos/danielRicciardo.jpg"

    },
    {
        piloto: "Pierre Gasly",
        numero: 10,
        equipo: "AlphaTauri",
        posicion: 13,
        puntos: 16,
        img: "./img/pilotos/pierreGasly.jpg"
    }];
const pilotos4 = [
    {
        piloto: "Sebastian Vettel",
        numero: 5,
        equipo: "Aston Martin",
        posicion: 14,
        puntos: 15,
        img: "./img/pilotos/sebastianVettel.jpg"

    },
    {
        piloto: "Mick Schumacher",
        numero: 47,
        equipo: "Haas F1 Team",
        posicion: 15,
        puntos: 12,
        img: "./img/pilotos/mickSchumacher.jpg"
    },
    {
        piloto: "Yuki Tsunoda",
        numero: 22,
        equipo: "AlphaTauri",
        posicion: 16,
        puntos: 11,
        img: "./img/pilotos/yukiTsunoda.jpg"

    },
    {
        piloto: "Zhou Guanyu",
        numero: 24,
        equipo: "Alfa Romeo",
        posicion: 17,
        puntos: 5,
        img: "./img/pilotos/zhouGuanyu.jpg"
    },
    {
        piloto: "Lance Stroll",
        numero: 18,
        equipo: "Aston Martin",
        posicion: 18,
        puntos: 4,
        img: "./img/pilotos/lanceStroll.jpg"

    }];
const pilotos5 = [
    {
        piloto: "Alexander Albon",
        numero: 23,
        equipo: "Williams",
        posicion: 19,
        puntos: 3,
        img: "./img/pilotos/alexanderAlbon.jpg"
    },
    {
        piloto: "Nicholas Latifi",
        numero: 6,
        equipo: "Williams",
        posicion: 20,
        puntos: 0,
        img: "./img/pilotos/nicholasLatifi.jpg"
    },
    {
        piloto: "Niko Hulkenberg",
        numero: 27,
        equipo: "Aston Martin",
        posicion: 21,
        puntos: 0,
        img: "./img/pilotos/nicoHulkenberg.png"
    },
    {
        piloto: "Nikita Mazepin",
        numero: 9,
        equipo: "Hass F1 Team",
        posicion: 0,
        puntos: 0,
        img: "./img/pilotos/"
    }

];
pilotos5.pop()


// Array pilotos completo (Spread)
const pilotos = [...pilotos1,...pilotos2,...pilotos3,...pilotos4,...pilotos5]


mostrarSchedule();
mostrarPilotos();
infoEquipos();



// Validacion de storage (AND)
typeof(Storage) !== 'undefined' && prefUsuario () 

// Or que identifica si las preferencias no fueron seleccionadas. 
const datosUsuarioAlm = JSON.parse(localStorage.getItem('datosUsuario')) || alert ("Las preferencias no fueron seleccionadas")


navigator.geolocation.getCurrentPosition (success,error) 

// Obteniendo localizacion de usuario para proximamente destinar horarios segun su ubicacion. (Utilizacion de Sweet Alert/Libreria)
function success (geolocationPosition) {
let coords = geolocationPosition.coords;

Swal.fire({
    icon: 'success',
    title: 'Coordenadas',
    html: 'Latitud: ' + coords.latitude + '<br>' + 'Longuitud: ' + coords.longitude
})

};

function error (err){
    Swal.fire({
        icon: 'error',
        title: 'Error',
        html: err.message
        
})

};

success ();
error ();

