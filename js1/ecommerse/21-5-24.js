let xhr = new XMLHttpRequest();

xhr.open("GET", "https://fakestoreapi.com/products?limit=20");
xhr.onload = function () {
  console.log("xhr : ", xhr);
  let content = document.getElementById("container3");
  let response = xhr.response;
  console.log("response : ", response);

  console.log("type of (response) :", typeof response);
  const parsed_response = JSON.parse(response);
  console.log("parsed_response : ", parsed_response);

  let card = "";

  for (let i = 0; i < parsed_response.length; i++) {
    card =
      card +
      `<div class="card">
            <img src="${parsed_response[i].image}" >
            <h4>${parsed_response[i].title}</h4>
            <h4>price : ${parsed_response[i].price}</h4>
            <h4>rating : ${parsed_response[i].rating.rate}</h4>
            </div>`;
  }

  content.innerHTML = card;
};
xhr.send();
