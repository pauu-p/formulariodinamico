$('.contenido-dinamico').hide();


document.getElementById('miformulario').addEventListener('submit', function(event){
    event.preventDefault();

  
    


    let nombre = document.getElementById('nombre').value
    let nombreMascota = document.getElementById('nombreMascota').value
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
            'assets/img/gato1.jpg',
            'assets/img/gato2.jpg',
            'assets/img/gato3.jpg'
        ],
        Conejo: [
            'assets/img/conejo1.jpg',
            'assets/img/conejo2.jpg',
            'assets/img/conejo3.jpg'
        ],
        Hamster: [
            'assets/img/hamster1.jpg',
            'assets/img/hamster2.jpg',
            'assets/img/hamster3.jpg'
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
    const offcanvasElementList = document.querySelectorAll('.offcanvas')
    const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))

    const offcanvasEl = document.querySelector('.offcanvas');
offcanvasEl.style.backgroundColor = color; // color es tu variable dinámica


//POPOVER
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    const miPopover = document.getElementById('miPopover');
    if (miPopover) {
        const popover = bootstrap.Popover.getOrCreateInstance(miPopover);

        popover.setContent({
            '.popover-header': mascota ,
            '.popover-body': `Mi ${mascota} es bonito y se llama ${nombre}`
        });
    }


//TOAST
    const toastElList = document.querySelectorAll('.toast');
    const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl));

    const toastBtn = document.getElementById('liveToastBtn');
    toastBtn.textContent = `${nombreMascota} quiere decirte algo`;

    document.getElementById('liveToastBtn').addEventListener('click', function () {
        const miTostada = document.getElementById('liveToast');
        const toast = bootstrap.Toast.getOrCreateInstance(miTostada);
        toast.show();

        document.getElementById('toastTitle').textContent = `🐾 ${nombreMascota}`;
        document.getElementById('toastBody').innerHTML = `ama me womite ${numero} veces`;
        let img = document.getElementById('toastImg');
        let imagenes = imagenesPorMascota[mascota];
        let imagenToast = imagenes ? imagenes[Math.floor(Math.random() * imagenes.length)] : 'assets/img/default.jpg';

        img.src = imagenToast;
        img.alt = `Foto de un ${mascota}`;
        img.className = 'rounded me-2 w-25';

    });

});
