// // Funciones
function inicioDeSesion() {
    alert("Inicie sesión para acceder a sus eventos favoritos")

    let usuario1 = prompt("Ingrese su usuario");
    let contrasenia1 = prompt("Ingrese su contraseña");

    if (usuario1 == usuario && contrasenia1 == contrasenia) {
        alert("Felicitaciones " + nombre + " has ingresado a tu cuenta ");
    }

    else if (usuario1 != usuario) {
        alert("El usuario ingresado es incorrecto. Vuelva a intentarlo");
        usuario1 = prompt("Ingrese su usuario");
        contrasenia1 = prompt("Ingrese su contraseña");

        if (usuario1 == usuario && contrasenia1 == contrasenia) {
            alert("Felicitaciones " + nombre + " has ingresado a tu cuenta ");
        }

        else {

            alert("Lo sentimos, usted ha agotado los intentos de inicio de sesión. Solicite el recupero de usuario y/o contraseña");
        }
    }

    else if (contrasenia1 != contrasenia) {
        alert("La contraseña ingresada es incorrecta. Vuelva a intentarlo");
        usuario1 = prompt("Ingrese su usuario");
        contrasenia1 = prompt("Ingrese su contraseña");

        if (usuario1 == usuario && contrasenia1 == contrasenia) {
            alert("Felicitaciones " + nombre + " has ingresado a tu cuenta ");
        }

        else {

            alert("Lo sentimos, usted ha agotado los intentos de inicio de sesión. Solicite el recupero de usuario y/o contraseña");
        }
    }

    else {

        alert("Lo sentimos, usted ha agotado los intentos de inicio de sesión. Solicite el recupero de usuario y/o contraseña");
    }
};



function schedule() {

    for (const c of schedule1) {
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
            alert ("Horario Mexico: " + parseInt(c.hora  - 1) +":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
            }
        
  
}
    

    for (const c of schedule2) {
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
            alert ("Horario Mexico: " + parseInt(c.hora  - 1) +":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
            }
        
    }


    for (const c of schedule3) {
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
            alert ("Horario Mexico: " + parseInt(c.hora  - 1) +":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
            }
        
    }


    for (const c of schedule4) {
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
            alert ("Horario Mexico: " + parseInt(c.hora  - 1) +":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
            }
        

    }
       
        for (const c of schedule5) {
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
                alert ("Horario Mexico: " + parseInt(c.hora  - 1) +":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
                }
            
        }

        for (const c of schedule6) {
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
                alert ("Horario Mexico: " + parseInt(c.hora  - 1) +":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(c.hora - 2) + ":00 hs")
                }
            
            }
        }

function pilotos() {

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
    

// Arrays de objetos
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
        img: "./img/pilotos/nikoHulkenberg.png"
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

const equipos = [
    {
        equipo: "Red Bull Racing",
        piloto1: "Max Verstappen",
        piloto2: "Sergio Perez",
        posicion: 1,
        puntos: 396,
    },
    {
        equipo: "Ferrari",
        piloto1: "Charles Leclerc",
        piloto2: "Carlos Sainz",
        posicion: 2,
        puntos: 314,
    },
    {
        equipo: "Mercedes Benz",
        piloto1: "George Russell",
        piloto2: "Lewis Hamilton",
        posicion: 3,
        puntos: 270,
    },
    {
        equipo: "Alpine",
        piloto1: "Esteban Ocon",
        piloto2: "Fernando Alonso",
        posicion: 4,
        puntos: 93,
    },

    {
        equipo: "McLaren",
        piloto1: "Lando Norris",
        piloto2: "Daniel Ricciardo",
        posicion: 5,
        puntos: 89,
    },
    {
        equipo: "Alfa Romeo",
        piloto1: "Zhou Guanyu",
        piloto2: "Valtteri Botas",
        posicion: 6,
        puntos: 51,
    },
    {
        equipo: "Haas F1 Team",
        piloto1: "Kevin Magnussen",
        piloto2: "Mick Schumacher",
        posicion: 7,
        puntos: 34,
    },
    {
        equipo: "AlphaTauri",
        piloto1: "Pierre Gasly",
        piloto2: "Yuki Tsunoda",
        posicion: 8,
        puntos: 27,
    },
    {
        equipo: "Aston Martin",
        piloto1: "Sebastian Vettel",
        piloto2: "Lance Stroll",
        posicion: 9,
        puntos: 19,
    },

    {
        equipo: "Williams",
        piloto1: "Alexander Albon",
        piloto2: "Nicholas Latifi",
        posicion: 10,
        puntos: 3,
    },

];

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

const fechasFormato = [];

for (f of fechas2022) {
    let fecha = f.fecha.getDate() + "/" + f.fecha.getMonth() + "/" + f.fecha.getFullYear() + " " + f.fecha.getHours() + ":" + f.fecha.getMinutes() + f.fecha.getSeconds() + " hs. (Argentina)";

    fechasFormato.push(fecha)
}

const horaEventos = [];



for (f of fechas2022) {
    let hora = f.fecha.getHours() ;

    horaEventos.push(hora)
}




const schedule1 = [
    {
        circuito: "Bahrain International Circuit",
        vueltas: 57,
        fecha: fechasFormato[0],
        hora: horaEventos [0],
        img: "./img/circuitos/bahrain.png"

    },
    {
        circuito: "Jeddah",
        vueltas: 50,
        fecha: fechasFormato[1],
        hora: horaEventos [1],
        img: "img/circuitos/jeddah.png"


    },
    {
        circuito: "Albert Park",
        vueltas: 58,
        fecha: fechasFormato[2],
        hora: horaEventos [2],
        img: 'img/circuitos/albertPark.png'

    },
    {
        circuito: "Autodromo Enzo e Dino Ferrari",
        vueltas: 63,
        fecha: fechasFormato[3],
        hora: horaEventos [3],
        img: 'img/circuitos/enzoEDino.png'

    },]


const schedule2 = [
    {
        circuito: "Autodromo Internacional de Miami",
        vueltas: 57,
        fecha: fechasFormato[4],
        hora: horaEventos [4],
        img: 'img/circuitos/miamiCircuit.png'

    },
    {
        circuito: "Circuit de Barcelona - Catalunya",
        vueltas: 66,
        fecha: fechasFormato[5],
        hora: horaEventos [5],
        img: 'img/circuitos/barcelonaCircuit.png'

    },
    {
        circuito: "Monte Carlo",
        vueltas: 78,
        fecha: fechasFormato[6],
        hora: horaEventos [6],
        img: 'img/circuitos/monacoCircuit.png'

    },
    {
        circuito: "Baku City Circuit",
        vueltas: 51,
        fecha: fechasFormato[7],
        hora: horaEventos [7],
        img: 'img/circuitos/bakuCityCircuit.png'

    }]

const schedule3 = [
    {
        circuito: "Circuit Gilles Villeneuve",
        vueltas: 70,
        fecha: fechasFormato[8],
        hora: horaEventos [8],
        img: 'img/circuitos/gillesVillenueveCircuit.png'

    },
    {
        circuito: "Silverstone",
        vueltas: 52,
        fecha: fechasFormato[9],
        hora: horaEventos [9],
        img: 'img/circuitos/silverstoneCircuit.png'

    },
    {
        circuito: "Red Bull Ring",
        vueltas: 71,
        fecha: fechasFormato[10],
        hora: horaEventos [10],
        img: 'img/circuitos/redBullRing.png'

    },
    {
        circuito: "Paul Ricard",
        vueltas: 53,
        fecha: fechasFormato[11],
        hora: horaEventos [11],
        img: 'img/circuitos/paulRicardCircuit.png'

    }]

const schedule4 = [
    {
        circuito: "Hungaroring",
        vueltas: 70,
        fecha: fechasFormato[12],
        hora: horaEventos [12],
        img: 'img/circuitos/hungaroRing.png'

    },
    {
        circuito: "Spa - Francorchamps",
        vueltas: 44,
        fecha: fechasFormato[13],
        hora: horaEventos [13],
        img: 'img/circuitos/spaFrancorChamps.png'

    },
    {
        circuito: "Zandvoort",
        vueltas: 72,
        fecha: fechasFormato[14],
        hora: horaEventos [14],
        img: 'img/circuitos/zandvoort.png'

    },
    {
        circuito: "Autodromo Nazionale di Monza",
        vueltas: 53,
        fecha: fechasFormato[15],
        hora: horaEventos [15],
        img: 'img/circuitos/monza.png'

    }]

const schedule5 = [

    {
        circuito: "Marina Bay Circuit",
        vueltas: 61,
        fecha: fechasFormato[16],
        hora: horaEventos [16],
        img: 'img/circuitos/marinaBayCircuit.png'

    },
    {
        circuito: "Suzuka",
        vueltas: 53,
        fecha: fechasFormato[17],
        hora: horaEventos [17],
        img: 'img/circuitos/suzukaCircuit.png'

    },
    {
        circuito: "Circuito de las Americas",
        vueltas: 56,
        fecha: fechasFormato[18],
        hora: horaEventos [18],
        img: 'img/circuitos/circuitOfTheAmericas.png'

    },
    {
        circuito: "Interlagos",
        vueltas: 71,
        fecha: fechasFormato[19],
        hora: horaEventos [19],
        img: 'img/circuitos/interlagos.png'

    }]

const schedule6 = [
    {
        circuito: "Yas Marina Circuit",
        vueltas: 58,
        fecha: fechasFormato[20],
        hora: horaEventos [20],
        img: 'img/circuitos/yasMarinaCircuit.png'

    },

    {
        circuito: "Hermanos Rodriguez",
        vueltas: 71,
        fecha: fechasFormato[21],
        hora: horaEventos [21],
        img: 'img/circuitos/hermanosRodriguez.png'

    },



];


schedule();
pilotos ();

