
//get all the html elements that will be used in the funstion for calculating the tip amount

const totalBill = document.getElementById("totalbill")
const tipPercentage =  document.getElementById("tippercentage")
const calcBtn = document.getElementById("calculateTip")
const tipContainer = document.getElementById("tipAmtContainer")


function calculateTip(){
    const bill = parseFloat(totalBill.value)
    const tipage = parseFloat(tipPercentage.value)

    if (!isNaN(bill) && !isNaN(tipage)){
        const tipAmnt = bill*(tipage/100)
        tipContainer.textContent = `Your tip is: Ksh ${tipAmnt.toFixed(2)}`
        //to roundoff the tip value to the nearest 2dp use .tofixed(2)
    }
    else{
        tipContainer.textContent = `Invalid input (recheck)`
    }
}

calcBtn.addEventListener("click", calculateTip)

// do not use parenthesis in triggering the event listener function ----!calculateTip()