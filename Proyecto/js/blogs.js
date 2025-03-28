document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("postTitle").value;
    let content = document.getElementById("postContent").value;

    let postContainer = document.createElement("div");
    postContainer.classList.add("col-md-6");

    postContainer.innerHTML = `
        <div class="post-card">
            <h3>${title}</h3>
            <p>${content}</p>
        </div>
    `;

    document.getElementById("postsContainer").prepend(postContainer);

    document.getElementById("postForm").reset();
});
