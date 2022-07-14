const postListElem = document.querySelector('.post-list')

 async function main() {
    const idNumber = localStorage.getItem("id")
    const userPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idNumber}`);
    const userPostsToJson = await userPosts.json();

    postListElem.innerHTML = userPostsToJson.map(post => {
        return  `<div class="post">
        <div class="post__title">
          ${post.title}
        </div>
        <p class="post__body">
          ${post.body}
        </p>
      </div>`
    }).join("")
 }

 main()