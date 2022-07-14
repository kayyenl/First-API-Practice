// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    let usersData = await  users.json() //we cannot run this line and the line below it in different orders!
    console.log(usersData)
    usersData = usersData.map(user => {
        `<div class="user-card">
            <div class="user-card__container">
                <h3>${user.name}</h4>
                <p><b>Email:</b>${user.email}</p>
                <p><b>Phone:</b>${user.phone}</p>
                <p><b>Website:</b> <a href=>${user.website} target="_blank">${user.website}</a></p>
            </div>  
        </div>`
    }).join("")
    document.querySelector(".user").innerHTML += usersData;
}

main();