document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("postForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let numero = document.getElementById("postTitle").value.trim();
        if (numero === "") {
            alert("Por favor, ingresa un número.");
            return;
        }


        function esPrimo(n) {
            if (n < 2) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        }

        let mensaje = esPrimo(numero) ? "es un número primo" : "no es un número primo";

        let postContainer = document.createElement("div");
        postContainer.classList.add("col-md-6");

        postContainer.innerHTML = `
            <div class="post-card p-3 shadow-sm border ${esPrimo(numero) ? 'border-success' : 'border-danger'}">
                <h3>${numero}</h3>
                <p class="text-muted">${mensaje}</p>
            </div>
        `;

        document.getElementById("postsContainer").prepend(postContainer);
        document.getElementById("postForm").reset();
    });
});
