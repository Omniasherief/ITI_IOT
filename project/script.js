const apiURL = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=21&context=embed";

async function fetchPosts() {
    const response = await fetch(apiURL);
    const data = await response.json();
    let content = "";

    data.forEach(post => {
        content += `
            <div class="post">
                <img src="${post.jetpack_featured_media_url}" alt="Post Image">
                <h2><a href="${post.link}">${post.title.rendered}</a></h2>
                <p>${post.excerpt.rendered}</p>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = content;
}

fetchPosts();

