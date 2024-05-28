import printWelcome from "./script2.js"

function printHai() {
    console.log("Hai");
}

function printHai1() {
    console.log("Hai 1111");
}

function printHai2() {
    console.log("Hai 22222");
}

export default printHai;//ES module default export
export {printHai1, printHai2, printWelcome};