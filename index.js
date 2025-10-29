let userInput = document.querySelector(`#user-input`)
let getInforBtn = document.querySelector(`#submitButton`)
let inputArray = 0

/*
let inputIteration = () =>{
  for( let i = 0; i < inputArray.length ; i++ ){
    console.log(` The user input is ${inputArray[i]}`)
   }

   if(inputArray.length === 13){
       console.log("Thanbk you for entering a valid Id number")
   }else {

    console.log("Invalid Id Number")

   }
   }


getInforBtn.addEventListener("click", function(){
 
    userInput = ""
     inputArray.push(userInput)
     console.log(inputArray)
inputIteration()
})


userInput
  // let inputAccepted = Number(userInput.value)
*/
function dateOfBirth(Date,Month,Year){
    let DateOFbirth = Number(Date)
       let BirthMonth = Number(Month)
          let BirthYear = Number(Year)
        
}

let citizenshipCheck = (eleventhDigit) =>{
    let conveerted2 = Number(eleventhDigit)
        let condition2 =  conveerted2 === 0 ? "Citizen-Ship : South African": " Citizen-Ship : non- Citizen"
                  console.log(condition2)
    }





let genderCheck = (fifthDigit) =>{
    let converted = Number(fifthDigit)
    let condition = ''
      condition = converted <= 4? 'Gender : Female' : converted >= 5 ? ' Gender: Male': ''
         console.log(condition)
}


let idValidation = (input) =>{
    if(input.length !== 13){
        console.log("Invalid ID number")
    }else if(input.length === 13){
        console.log("This is a correct Identity")
    }else{
        console.log("We only accept SA Identity")
    }
     
}

//this is a button to submit the ID
getInforBtn.addEventListener("click", function()
{
    let inputInJS = userInput.value
    userInput.value = ""
    console.log(`This ID is ${inputInJS.length} characters long`)
    idValidation(inputInJS )
    genderCheck(inputInJS[6])
    citizenshipCheck(inputInJS[10])
       dateOfBirth(inputInJS[0,1])
  
})


