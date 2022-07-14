// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userListElem = document.querySelector(".user-list")

async function main() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await users.json() //we cannot run this line and the line below it in different orders!
    
    userListElem.innerHTML = usersData.map((user) => userHTMLString(user)).join("")
}

function showUserPosts(user) {
    console.log(user)
}

function userHTMLString(user) {
    return `<div class='user'>
    <div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
        <h3> ${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href= "https://${user.website}" target="_blank"> ${user.website}</a></p>
    </div>  
    </div>
    </div>`
}

main();