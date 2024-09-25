// smooth scroll
const links = document.querySelectorAll(".nav-base a ");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop - 10,
    behavior: "smooth",
  });

}

document.getElementById('roomForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Capturar los valores de los inputs
  const destino = document.getElementById('destino').value;
  const llegada = document.getElementById('llegada').value;
  const salida = document.getElementById('salida').value;
  const tipoHabitacion = document.getElementById('tipoHabitacion').value;
  const huespedes = document.getElementById('huespedes').value;

  // Crear un array con los valores
  const datosFormulario = [
    { campo: 'Destino', valor: destino },
    { campo: 'Llegada', valor: llegada },
    { campo: 'Salida', valor: salida },
    { campo: 'Tipo Habitacion', valor: tipoHabitacion },
    { campo: 'Huespedes', valor: huespedes }
  ];

  // Mostrar los datos en consola (puedes usarlos como necesites)
  console.log(datosFormulario);
});