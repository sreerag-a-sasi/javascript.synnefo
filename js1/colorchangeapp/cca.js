const getcolor = () =>{
    //hexcode
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)

    console.log(randomNumber);
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

//init call
getcolor();