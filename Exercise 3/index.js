//export
export function temperatureConverter(valNum) {
    //valNum = parseFloat(valNum);
    let outputCelcius = (valNum-32)/1.8;
    console.log(`Farenheit : ${valNum}`)
    console.log(`To celcious : ${outputCelcius}`);
}