document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        let datos = {
            title: nombre, 
            body: mensaje,
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta de la API:", data);
            document.getElementById("mensajeExito").style.display = "block";
            document.getElementById("contactForm").reset();
        })
        .catch(error => console.error("Error:", error));
    });
});
