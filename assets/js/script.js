class Propietario {
    #nombre
    #direccion
    #telefono
    constructor(nombre, direccion, telefono) {
        this.#nombre = nombre
        this.#direccion = direccion
        this.#telefono = telefono

    }
    get nombre() {
        return this.#nombre
    }
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    get direccion() {
        return this.#direccion
    }
    set direccion(nuevaDireccion) {
        this.#direccion = nuevaDireccion
    }
    get telefono() {
        return this.#telefono
    }
    set telefono(nuevoTelefono) {
        this.#telefono = nuevoTelefono
    }
    //obtenemos los datos del propietario con un metodo
    datosPropietario() {
        return `Nombre: ${this.#nombre}, Dirección: ${this.#direccion}, Teléfono: ${this.#telefono}`
    }
}
class Animal {
    constructor(tipo) {
        this.tipo = tipo
    }
    getTipo() {
        return `El tipo de animal es un: ${this.tipo}`
    }
}
class Mascota extends Animal {
    #nombre
    #enfermedad
    constructor(nombre, tipo, enfermedad) {
        super(tipo)
        this.#nombre = nombre
        this.#enfermedad = enfermedad
    }
    //metodos get y set nombre y enfermedad
    get nombre() {
        return this.#nombre;
    }
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    get enfermedad() {
        return this.#enfermedad
    }
    set enfermedad(nuevaEnfermedad) {
        this.#enfermedad = nuevaEnfermedad
    }

}
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const propietarioNombre = document.getElementById('propietario').value;
    const propietarioTelefono = document.getElementById('telefono').value;
    const propietarioDireccion = document.getElementById('direccion').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const tipoMascota = document.getElementById('tipo').value;
    const enfermedad = document.getElementById('enfermedad').value;

    // Crear una instancia de Propietario
    const propietario = new Propietario(propietarioNombre, propietarioDireccion, propietarioTelefono);

    // Crear una instancia de Mascota dependiendo del tipo seleccionado
    let mascota;
    switch (tipoMascota) {
        case 'perro':
            mascota = new Mascota(nombreMascota, 'Perro', enfermedad);
            break;
        case 'gato':
            mascota = new Mascota(nombreMascota, 'Gato', enfermedad);
            break;
        case 'conejo':
            mascota = new Mascota(nombreMascota, 'Conejo', enfermedad);
            break;
        default:
            console.error('Tipo de mascota no válido');
    }

    const resultado = document.getElementById('resultado');
    const lista = document.createElement('ul');

    // Obtener los datos del propietario y la mascota usando los métodos correspondientes
    const datosPropietario = propietario.datosPropietario();
    const tipoAnimal = mascota.getTipo();

    // Agregar los datos a la lista
    lista.innerHTML = `
        <li>${datosPropietario}</li>
         <li>${tipoAnimal}</li>
        <li>Nombre de la mascota: ${mascota.nombre}</li>       
        <li>Enfermedad es: ${mascota.enfermedad}</li>
    `;
    resultado.appendChild(lista);
});
