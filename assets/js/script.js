// Selecciona todos los checkboxes en el documento HTML
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const ingredientesList = [];
const mostrarIngredientes = document.getElementById('muestraIngredientes');

function precioExtras(a) {
    // Verifica si hay al menos 3 ingredientes seleccionados
    if (a.length < 3) {
        mostrarIngredientes.textContent = 'Por favor, selecciona al menos 3 ingredientes.';
        document.getElementById('extra-ingredients').innerHTML = '<strong> 0</strong>';
        return; // Salir de la función si no hay suficientes ingredientes
    }

    mostrarIngredientes.innerHTML = `los ingredientes seleccionados son: ${a[0]}, ${a[1]}, ${a[2]}.\n \n
    los ingredientes adicionales son: ${a.slice(3)}`;
    console.log(a.length);
    let MostrarPrecio = ingredientesList.slice(3).length * 800;
    document.getElementById('extra-ingredients').innerHTML = ` <strong>${MostrarPrecio}</strong>`;
}
// Itera sobre cada checkbox en la lista de checkboxes
checkboxes.forEach(checkbox => {
    checkbox.checked = false;
    checkbox.addEventListener('change', () => {

        if (checkbox.checked) {
            ingredientesList.push(checkbox.value)
            precioExtras(ingredientesList)

        } 
        //si se deschekea
        else {
            ingredientesList.splice(ingredientesList.indexOf(checkbox.value), 1)
            precioExtras(ingredientesList)
        }    
    })
});



let valorpropina = document.getElementById('propina');
let firstFocus = true;

valorpropina.addEventListener('focus', function() {
    if (firstFocus && valorpropina.value === ""){
        mostrarPropina(); // 
        firstFocus = false;
    }
});

valorpropina.addEventListener('input', function() {
    if (valorpropina.value !== ""){
        mostrarPropina(this.value); // Muestra el valor ingresado 
    }
});

function mostrarPropina(a = null) { // Valor por defecto de 1000
    if (a === null) {
        a = 1000; // Valor por defecto
    }
    document.getElementById("muestraPropina").innerHTML =`<strong>${a}</strong>`;
}

document.getElementById("botonEnvio").addEventListener('click',()=>{
    if (valorpropina.value === "") {
        alert("Aun no ha definido una propina");
    }
    else{
        alert(`Su propina de $${valorpropina.value} ha sido enviada`);
    }
})
