function getInputValue(inputId) {
    const getInputValue = document.getElementById(inputId);
    const inputValueString = getInputValue.value;
    const inputValue = parseFloat(inputValueString)
    return inputValue
}

function getElimentValue(elimentId) {
    const getElimentValue = document.getElementById(elimentId);
    const ElimentValueString = getElimentValue.innerText;
    const ElimentValue = parseFloat(ElimentValueString)
    return ElimentValue;
}

function setEliment(elimentId, newValue) {
    const setElimentValue = document.getElementById(elimentId);
    setElimentValue.innerText = newValue;
}
