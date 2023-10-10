
const btnconvertir = document.getElementById("subir");


btnconvertir.addEventListener('click', (e) => {
    const celsius = parseFloat(document.getElementById("temperaturaEnCelsius").value);
    const celciusAFarenheit = (celsius*1.8) + 32;   
    const kelvin = 273.15;
    const celsiusAKelvin = kelvin + celsius;
    

    alert("La temperatura en kelvin es " + celsiusAKelvin + ", y en farenheit es " + celciusAFarenheit);

});

