// ubico al boton y lo guardo en una constante 
const botonCambioTema = document.getElementById('btn-cambiar-tema')

// para verificar si ya existe un tema de preferencia guardado al recargar la página
const temaGuardado = localStorage.getItem('temaPreferido')

if (temaGuardado === 'claro') {
    document.body.classList.add('tema-claro')
}
// agrego un evento de boton y que escuche cuando el usuario haga un click
botonCambioTema.addEventListener('click', () => {
    // Si la clase no existe: El método la añade al <body>.
    // Si la clase ya existe: El método la elimina del <body>.
    //esto se usa generlamente para cambios de tema como en este caso
    document.body.classList.toggle('tema-claro')
    if (document.body.classList.contains('tema-claro')) {
        localStorage.setItem('temaPreferido', 'claro')
    } else {
        localStorage.setItem('temaPreferido', 'oscuro')
    }
})

/*Vamos a Renderizar para de los li del proyecto en arrays usando array de objetos, esto me ayuda a no crear todo a mano (usaremos .forEach() y .map()*/

const misProyectos = [
    {
        titulo: "Simulador de Dados",
        descripcion: "Proyecto enfocado en la lógica de programación y el azar",
        tecnologias: ["JavaScript", "HTML", "CSS"]
    },
    {
        titulo: "Proyecto Frontend",
        descripcion: "Interfaz moderna e interactiva para adquirir práctica en UX/UI.",
        tecnologias: ["CSS grid", "Flexbox"]
    },
    {
        titulo: "UrbanTwin Perú (En Planeación)",
        descripcion: "Simulador de Riesgo de inundaciones en 2D",
        tecnologias: ["Geospatial", "JS"]
    }
]

/*Referencia a mi contenedor html*/
const contenedorProyectos = document.getElementById("lista-proyectos")

/*funcion para renderizar mis proyectos*/
function mostrarmisProyectos(proyectos) {
    //limpiamos el contenedor
    contenedorProyectos.innerHTML = "";
    proyectos.forEach(proyecto => {
        //Creamos la tarjeta usando comillas invertidas
        const tarjetaProyecto = `
        <li>
            <strong>${proyecto.titulo}</strong>
            <p>${proyecto.descripcion}</p>
            <small><strong>Tech:</strong> ${proyecto.tecnologias.join(', ')}</small>
        </li>`
        //ahora si añadimos cada tarjeta individualmente con bucle
        contenedorProyectos.innerHTML += tarjetaProyecto
    })

}

mostrarmisProyectos(misProyectos)


/*implementamos la opcion de buscador*/
const buscador = document.getElementById("buscador")

buscador.addEventListener("input", (evento) => {
    //convertimos texto todo a minusculas para evitar errores por mayudsculas etc
    const textobusqueda = evento.target.value.toLowerCase()

    const proyectosFlitrados = misProyectos.filter(proyecto => {
        const coincideTitulo = proyecto.titulo.toLowerCase().includes(textobusqueda)
        const coincideDescripcion = proyecto.titulo.toLocaleLowerCase().includes(textobusqueda)

        return coincideTitulo || coincideDescripcion
    })

    mostrarmisProyectos(proyectosFlitrados)
})

