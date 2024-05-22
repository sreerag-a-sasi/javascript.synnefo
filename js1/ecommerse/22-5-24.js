fetch("https://fakestoreapi.com/products?limit=10")
  .then( async (res) => {
    console.log(res);
    let response= await res.json();
    console.log("response : ",response);
    let content = document.getElementById("container3");
    
    let card = "";

    for (let i = 0; i < response.length; i++) {
      card =
        card +
        `<div class="card">
              <img src="${response[i].image}" >
              <h4>${response[i].title}</h4>
              <h4>price : ${response[i].price}</h4>
              <h4>rating : ${response[i].rating.rate}</h4>
              </div>`;
    }
  
    content.innerHTML = card;
  })
  .catch((error) => console.log(error))