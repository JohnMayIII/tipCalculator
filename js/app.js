const submitBtn = document.getElementById('submitBtn')
const endTotalDisplay = document.getElementById('endTotalDisplay')

const calcTip =()=>{
    const startTotal = document.getElementById('startTotal').value
    const tipPercent = document.getElementById('tipPercent').value
    var tempVar;
    tempVar = (startTotal * (1 + tipPercent))
    console.log(tempVar)

    endTotalDisplay.innerHTML+=`
    <h3>$${tempVar}</h3>
    `
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();    
    calcTip()

})