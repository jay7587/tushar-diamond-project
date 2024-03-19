
function sumValue() {
    let doller = document.getElementById("number").value

    let inputValue = doller / 100

    outputElement = document.getElementById("output");
    outputElement.textContent = "Your Diamondas price $: " + inputValue
}