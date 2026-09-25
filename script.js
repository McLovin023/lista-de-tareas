const entrada = document.querySelector("#nueva-tarea");
const boton = document.querySelector("#agregar");
const lista = document.querySelector("#lista");

boton.addEventListener("click", function () {
  const texto = entrada.value.trim();

  if (texto === "") return;

  const tarea = document.createElement("li");
  tarea.textContent = texto;

  tarea.addEventListener("click", function () {
    tarea.classList.toggle("completada");
  });

  const borrar = document.createElement("button");
  borrar.textContent = "Borrar";

  borrar.addEventListener("click", function (evento) {
    evento.stopPropagation();
    tarea.remove();
  });

  tarea.appendChild(borrar);
  lista.appendChild(tarea);

  entrada.value = "";
});