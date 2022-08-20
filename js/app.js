document.getElementById("calculateBtn").addEventListener("click", function () {
    const totalIncome = getInputValue("inputIncome")
    const foodAmountInput = getInputValue("inputFood")
    const rentAmountInput = getInputValue("inputRent")
    const clothAmountInput = getInputValue("inputClothes")

    const totalCost = foodAmountInput + rentAmountInput + clothAmountInput;
    const totalExpanceReminingAmount = totalIncome - totalCost;

    // if (totalCost <= totalIncome) {
    //     setEliment("TotalExpance", totalCost);
    //     setEliment("balance", totalExpanceReminingAmount)
    // } else {
    //     alert("Your expense limite is coross")
    // }

    setEliment("TotalExpance", totalCost);
    setEliment("balance", totalExpanceReminingAmount)

})

document.getElementById("savingBtn").addEventListener('click', function () {
    const savingAmount = getInputValue("savingInput")
    const totalIncome = getInputValue("inputIncome")
    const foodAmountInput = getInputValue("inputFood")
    const rentAmountInput = getInputValue("inputRent")
    const clothAmountInput = getInputValue("inputClothes")

    const totalCost = foodAmountInput + rentAmountInput + clothAmountInput;
    const totalExpanceReminingAmount = totalIncome - totalCost;

    // const savingParcent = (savingAmount / 100) * totalIncome;
    // setEliment("savingAmount", savingParcent);

    if (savingAmount <= 100) {
        const savingParcent = (savingAmount / 100) * totalIncome;
        setEliment("savingAmount", savingParcent);

        const remingBlance = totalExpanceReminingAmount - savingParcent;
        setEliment("remingBalance", remingBlance);
    } else {
        alert("You Can't Enter More Then 100 %")
    }

    // const remingBlance = totalExpanceReminingAmount - savingParcent;
    // setEliment("remingBalance", remingBlance);


})

