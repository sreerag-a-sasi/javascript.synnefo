// fetch("https://fakestoreapi.com/products?limit=10")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

//   let details = "";

// for (let i = 0; i < json.length; i++) {
//     details =
//     details +
//       ` <img>${json[i].img}</img>
//         <h1>${json[i].title}</h1>
//         <h3>${json[i].price}</h3>
//         <h4>${json[i].id}</h4>
//         <h4>${json[i].rate}</h4>
//         `;
//   }

//       content.innerHTML = detais;
// // } else {
// //   console.log("failed");
// // }
// //   } else {
// //     console.log("readystate not completed.....");
// //   }
// // };

let xhr = new XMLHttpRequest();

xhr.open("get", "https://fakestoreapi.com/products?limit=20");

let btn = document.getElementById("send");

btn.addEventListener("click", function () {
  xhr.send();
});

console.log("xhr : ", xhr);

let content = document.getElementById("container3");

xhr.onreadystatechange = function () {
  console.log("readystate : ", xhr.readyState);

  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let response = xhr.response;
      console.log("response : ", response);

      console.log("type of (response) :", typeof response);

      let parsed_response = JSON.parse(response);
      console.log("parsed_response : ", parsed_response);

      let card = "";

      for (let i = 0; i < parsed_response.length; i++) {
        card =
          card +
          `<div class="card">
            <img src="${parsed_response[i].image}" width="20vw" height="40vh">
            <h4>${parsed_response[i].id}</h4>
            <h4>${parsed_response[i].title}</h4>
            <h4>${parsed_response[i].price}</h4>
            <h4>${parsed_response[i].rating.rate}</h4>
            <p>${parsed_response[i].description}</p>
            <div/>`;
      }

      content.innerHTML = card;
    } else {
      console.log("failed");
    }
  } else {
    console.log("readystate not completed.....");
  }
};
