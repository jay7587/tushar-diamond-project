fetch("../../test.json")
    .then(res => res.json())
    .then(data => {
        const outputElement = document.getElementById('output');

        console.log("data", data);


        const htmlContent = data.gameChars.map(char => `
    <a href="./charterpage/${char.name.toLowerCase()}.html" class="col-6 mb-4 text-decoration-none">
        <div class="card-body rounded-4" style="background-color: ${char.bgColor};">
            <img class="card-img-top" src="${char.imgUrl}" alt="Card image cap">
            <p class="card-text text-center fw-bold fs-2 text-black">${char.name}</p>
        </div>
    </a>
`).join('');




        outputElement.innerHTML = htmlContent;
    })
    .catch(error => console.error('Error fetching data:', error));




// -----------------------------------------------------


function sumValue() {
    let doller = document.getElementById("number").value

    let inputValue = doller / 100

    outputElement = document.getElementById("output");
    outputElement.textContent = "Your Diamondas price $: " + inputValue
}