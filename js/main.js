let lista_de_juegos =[
    {
        nombre: 'Memoria',
        icono: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/monarch-butterfly.jpg?w=1900&h=1264',
        link: 'https://kgarcia18.github.io/kgarcia18-P1_JuegoDeMemoria_2024_VBach/'
    },
    {
        nombre: 'Memoria',
        icono: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/monarch-butterfly.jpg?w=1900&h=1264',
        link: ''
    },
    {
        nombre: 'Memoria',
        icono: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/monarch-butterfly.jpg?w=1900&h=1264',
        link: ''
    },
    {
        nombre: 'Memoria',
        icono: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/monarch-butterfly.jpg?w=1900&h=1264',
        link: ''
    },
    {
        nombre: 'Memoria',
        icono: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/monarch-butterfly.jpg?w=1900&h=1264',
        link: ''
    },
    {
        nombre: 'Memoria',
        icono: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/monarch-butterfly.jpg?w=1900&h=1264',
        link: ''
    }
]

function desplegar_opciones(){

    let box_menu = document.querySelector(".menu");

    lista_de_juegos.forEach((cada_elemento)=>{

        let div = document.createElement("div");
        div.classList.add("div_item");

        div.innerHTML =`

            <a href="${cada_elemento.link}">
            <div class="box_img">
                <img src="${cada_elemento.icono}">
            </div>
            <span>
                ${cada_elemento.nombre}">
            </span>
            </a>
        `;

        box_menu.appendChild(div);
    });
}

desplegar_opciones();