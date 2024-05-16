console.log("first line");
console.log("second line");

// Asynchronous operation
setTimeout(() => {
  console.log("third line");
}, 5000);

console.log("fourth line");
//outout will be
// first line
// second line
// fourth line
// third line
// Because whenever javascript see's a asynchronous operation it will automatically stacked in a queue

// Asynchronous opretaions can be time out functions event listner functions and etc..

let xhr = new XMLHttpRequest();

xhr.open("get", "https://jsonplaceholder.typicode.com/users");

let btn = document.getElementById("send");

btn.addEventListener("click", function () {
  xhr.send();
});

console.log("xhr : ", xhr);

let content = document.getElementById("content");

xhr.onreadystatechange = function () {
  console.log("readystate : ", xhr.readyState);

  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let response = xhr.response;
      console.log("response : ", response);

      console.log("type of (response) :", typeof response);

      let parsed_response = JSON.parse(response);
      console.log("parsed_response : ", parsed_response);

      let rows = "";

      for (let i = 0; i < parsed_response.length; i++) {
        rows =
          rows +
          `<tr>
                <td>${parsed_response[i].id}</td>
                <td>${parsed_response[i].name}</td>
                <td>${parsed_response[i].username}</td>
                <td>${parsed_response[i].email}</td>
                </tr>`;
      }

      content.innerHTML = rows;
    } else {
      console.log("failed");
    }
  } else {
    console.log("readystate not completed.....");
  }
};
