let tarifario = []; // Variable para almacenar los datos del archivo JSON

// Función para cargar el archivo JSON
async function cargarDatos() {
    try {
        const response = await fetch('tarifario.json'); // Cargar el archivo JSON
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON.');
        }
        tarifario = await response.json(); // Convertir la respuesta a JSON
        console.log('Datos cargados:', tarifario); // Mostrar datos cargados en consola (opcional)
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

// Función para buscar el valor de referencia
function buscarValor() {
    const referencia = document.getElementById('referenceInput').value.trim().toUpperCase(); // Obtener referencia del campo de entrada y convertirla a mayúsculas
    const resultado = document.getElementById('resultado'); // Elemento donde se mostrará el resultado

    // Realizar la búsqueda en el arreglo tarifario
    const referenciaEncontrada = tarifario.find(item => item['Número de Referencia'].toUpperCase() === referencia);

    // Mostrar resultado encontrado o mensaje de no encontrado
    if (referenciaEncontrada) {
        const valor = referenciaEncontrada['Valor de Referencia Antes de IVA'].toLocaleString('es-ES', { maximumFractionDigits: 2 });
        resultado.textContent = `El valor de referencia antes de IVA es: $${valor}`;
    } else {
        resultado.textContent = 'Número de referencia no encontrado.';
    }
}

// Evento para el botón de búsqueda
document.getElementById('searchButton').addEventListener('click', buscarValor);

// Iniciar la carga de datos al cargar la página
cargarDatos();
