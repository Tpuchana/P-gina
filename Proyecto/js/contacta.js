import { db, collection, addDoc } from "../js/firebase.js";

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        alert(" Por favor, completa todos los campos.");
        return;
    }

    try {
        console.log(" Intentando guardar en Firebase");
        let docRef = await addDoc(collection(db, "contactos"), {
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
            timestamp: new Date()
        });
        console.log("Mensaje guardado con ID:", docRef.id);
        alert("Mensaje enviado correctamente");
        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error(" Error al guardar en Firebase:", error);
        alert("Hubo un error al enviar el mensaje.");
    }
});
