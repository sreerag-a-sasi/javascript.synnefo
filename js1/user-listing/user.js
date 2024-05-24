fetch("https://jsonplaceholder.typicode.com/users")
  .then(async (res) => {
    console.log(res);
    let response = await res.json();
    console.log("response : ", response);
    let content = document.getElementById("user");

    let data = "";

    for (let i = 0; i < response.length; i++) {
      data =
        data +
        `<div class="user-data">
              <div class="profile"><img src="images/profile.png" alt=""><h4>${response[i].name}</h4></div>
              <div class="username"><h4>${response[i].username}</h4></div>
              <div class="email"><h4>${response[i].email}</h4></div>
              <div class="option"><img src="images/search.png" alt=""><img src="images/pen.png" alt=""><img src="images/remove.png" alt=""></div>
              </div>`;
    }

    content.innerHTML = data;
  })
  .catch((error) => console.log(error));
