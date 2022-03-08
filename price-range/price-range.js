const minSlider = document.querySelector("#min");
const maxSlider = document.querySelector("#max");
const outputMin = document.querySelector("#min-value");
const outputMax = document.querySelector("#max-value");

outputMin.innerHTML = minSlider.value;
outputMax.innerHTML = maxSlider.value;

minSlider.oninput=function () {
    outputMin.innerHTML = this.value;
}

maxSlider.oninput=function () {
    outputMax.innerHTML = this.value;
}