// ubico al boton y lo guardo en una constante 
const botonCambioTema = document.getElementById('btn-cambiar-tema')

// agrego un evento de boton y que escuche cuando el usuario haga un click
botonCambioTema.addEventListener('click', () => {
    // Si la clase no existe: El método la añade al <body>.
    // Si la clase ya existe: El método la elimina del <body>.
    //esto se usa generlamente para cambios de tema como en este caso
    document.body.classList.toggle('tema-claro')
})
