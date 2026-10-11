
const botonesConsulta = document.querySelectorAll(".btn-consulta");

botonesConsulta.forEach(function (boton) {
    boton.addEventListener("click", function (evento) {
        evento.preventDefault();

        const producto = boton.dataset.producto;

        const mensaje = `Hola, quiero consultar por: ${producto}. ¿Me pueden brindar información sobre disponibilidad y precio?`;

        const numero = "5491100000000";

        const enlace = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(enlace, "_blank");
    });
});
