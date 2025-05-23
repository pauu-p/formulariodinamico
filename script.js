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

    //FOTOS MASCOTA 
    const imagenesPorMascota = {
        Perro: [
            'assets/img/perro1.jpg',
            'assets/img/perro2.jpg',
            'assets/img/perro3.jpg'
        ],
        Gato: [
            'https://example.com/gato1.jpg',
            'https://example.com/gato2.jpg'
        ],
        Conejo: [
            'https://example.com/conejo1.jpg',
            'https://example.com/conejo2.jpg'
        ],
        Hamster: [
            'https://example.com/hamster1.jpg',
            'https://example.com/hamster2.jpg'
        ]
    };


    const carruselContent = document.getElementById('carruselContent');
    carruselContent.innerHTML = '';
    const micarrusel = document.querySelector('#carrusel')

    imagenesPorMascota[mascota]?.forEach((img, index) => {
       
        const item = document.createElement('div');
        item.className = 'carousel-item' + (index === 0 ? ' active' : '');
        item.innerHTML = `<img src="${img}" class="d-block w-100" alt="${mascota}">`;
        carruselContent.appendChild(item);
    });

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
