$('.contenido-dinamico').hide();

document.getElementById('miformulario').addEventListener('submit', function(event){
    event.preventDefault();

    let nombre = document.getElementById('nombre').value
    let numero = document.getElementById('numero').value
    let mascota = document.querySelector('input[name="mascotas"]:checked')?.value;
    let color = document.getElementById('color').value;

    console.log(nombre , numero , mascota, color)

    $('.contenido-dinamico').show();
//ALERTA
    let mensajeAlert = `¡Hola ${nombre}!`;
    let alerta = document.getElementById('miAlerta');
    const contenido = document.getElementById('contenidoMensaje');

    contenido.textContent = mensajeAlert;           
    alerta.style.display = 'block';            
    alerta.classList.add('show');              

    setTimeout(() => {
        const instancia = bootstrap.Alert.getOrCreateInstance(alerta);
        instancia.close();
    }, 5000);
   
//CARRUSEL
    const micarrusel = document.querySelector('#carrusel')

    let carousel = new bootstrap.Carousel(micarrusel, {
    interval: 2000,
    ride: true,
    pause: 'hover'
    })

//OFCANVAS 
    const myOffcanvas = document.getElementById('myOffcanvas')
    myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
    // do something...
    })

//POPOVER
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    // getOrCreateInstance example
    const popover = bootstrap.Popover.getOrCreateInstance('#miPopover2') // Returns a Bootstrap popover instance

    // setContent example
    popover.setContent({
    '.popover-header': 'Perrito',
    '.popover-body': 'Mi perrito es feliz y se llama Ruperto.'
    })

//TOAST
    const toastElList = document.querySelectorAll('.toast')
    const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))
});
