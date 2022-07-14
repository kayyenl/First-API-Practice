const postListElem = document.querySelector('.post-list')

 function main() {
    const idNumber = localStorage.getItem("id")
    displayPosts(idNumber)
 }

 function onSearchChange(event) {
    displayPosts(event.target.value)
 }


 async function displayPosts(id) {
    const userPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
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