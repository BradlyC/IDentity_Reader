const userInput = document.querySelector(`#user-input`)
const getInforBtn = document.querySelector(`#submitButton`)
const IdValidation = document.getElementById("nonValid")
const genderidentint = document.getElementById("gender-Identity")
const citizenShip = document.getElementById("citizen-Ship")
const birthDate = document.getElementById(`dateOf-Birth`)
const resetBtn = document.getElementById(`resetBtn`)


let inputArray = 0


let citizenshipCheck = (eleventhDigit) =>{
    let conveerted2 = Number(eleventhDigit)
        let condition2 =  conveerted2 === 0 ? " South African": "  non- Citizen"
                  console.log(condition2)
                  citizenShip.textContent = condition2 
    }

let genderCheck = (fifthDigit) =>{
    let converted = Number(fifthDigit)
    let condition = ''
      condition = converted <= 4? ' Female' : converted >= 5 ? ' Male': ''
         console.log(condition)
         genderidentint.textContent = condition
}

let idValidation = (input) =>{
    
      IdValidation.textContent = "Invalid ID number"
}  
//this is adate of birth extraction


//this is a button to submit the ID
getInforBtn.addEventListener("click", function()
{
     IdValidation.textContent = ""
    let inputInJS = userInput.value
    userInput.value = ""
    if(inputInJS.length === 13){ 
    genderCheck(inputInJS[6])
    citizenshipCheck(inputInJS[10])

    //date of birth statements
        let firstNumber = inputInJS[0]
          let secondNumber = inputInJS[1]
            let thirdNumber = inputInJS[2]
              let fourthNumber = inputInJS[3]
                let fifthNumber = inputInJS[4]
                  let sizthNumber = inputInJS[5]

                  let sum = firstNumber+secondNumber
                       if(sum > 25){
                        let centuary = 19
                            // console.log(centuary+sum)
                             birthDate.textContent = `${fifthNumber+sizthNumber} / ${thirdNumber+fourthNumber} / ${centuary+sum}`
                       }else if (sum <= 25){
                        let centuary = 20
                         //  console.log(centuary+sum)
                                birthDate.textContent =`${fifthNumber+sizthNumber} / ${thirdNumber+fourthNumber} / ${centuary+sum}`
                       }
              
                        
                  
         //birthDate.textContent = `${firstNumber+secondNumber} / ${thirdNumber+fourthNumber} / ${fifthNumber+sizthNumber}`
         
    }
   else{
    idValidation(inputInJS)
   }
  
})

resetBtn.addEventListener("dblclick", function(){

   citizenShip.textContent = ""
        genderidentint.textContent = ""
                birthDate.textContent = ""
                   IdValidation.textContent = ""
         
})
