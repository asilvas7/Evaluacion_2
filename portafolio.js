console.log("hola");
console.log("hola");
const trabajos = [
    {
        nombre: 'MORPHO',
        descripcion: 'Ortesis con impresión 3D',
        imagen: '... LINK IMAGENES',
    },
    {
        nombre: 'ILUMINI',
        descripcion: 'Luminaria para niños',
        imagen: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&h=500&fit=crop&crop=center',
    },
    {
        nombre: 'PACKAGING',
        descripcion: 'Proyecto colaborativo con "I am not plastic"',
        imagen: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop&crop=center',
    },


{
        nombre: 'MIVORY JOIN',
        descripcion: 'Juego de aprendizaje',
        imagen: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&h=500&fit=crop&crop=center',
    },
    {
        nombre: 'BIOMATERIALES',
        descripcion: 'Experimentos con biomaterial',
        imagen: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=500&fit=crop&crop=center',
    },
    {
        nombre: 'LUMBRA',
        descripcion: 'Mobiliario urbano para espacios públicos',
        imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=center',
    },
    {
        nombre: 'SOUNDCORE',
        descripcion: 'Mini parlante',
        imagen: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&h=500&fit=crop&crop=center',
    },
    {
        nombre: 'KIT AROMAZEN',
        descripcion: 'Base de té para amigos',
        imagen: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=500&fit=crop&crop=center',
    }
];

// Función para agregar los proyectos a la galería
const galleryGrid = document.querySelector('.gallery-grid');
trabajos.forEach((trabajo) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.nombre}">
        <div class="gallery-overlay">
            <h3>${trabajo.nombre}</h3>
            <p>${trabajo.descripcion}</p>
        </div>
    `;
    galleryGrid.appendChild(galleryItem);
});
