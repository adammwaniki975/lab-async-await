const postList = document.getElementById("post-list");

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    displayPost(data[0]); // IMPORTANT: first post only
  } catch (err) {
    console.error(err);
  }
}

function displayPost(post) {
  postList.innerHTML = "";

  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = post.title;
  p.textContent = post.body;

  li.appendChild(h1);
  li.appendChild(p);
  postList.appendChild(li);
}

/* IMPORTANT: must run immediately */
fetchPosts();