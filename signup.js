let dataBase = JSON.parse(localStorage.getItem('myDataBase')) || []
    let inputUsername = document.getElementById('inputUsername')
    let inputEmail = document.getElementById('inputEmail')
    let inputPhone = document.getElementById('inputPhone')
    let inputPassword = document.getElementById('inputPassword')
    let inputConfirmPassword = document.getElementById('inputConfirmPassword')
    let showButton = document.getElementById('showButton')
    let checkbox = document.getElementById('checker')
    let button = document.getElementById('button')

function submitDetails() {
    
    if (inputUsername.value === "" || inputEmail.value === "" || inputPhone.value === "" || inputPassword.value === "") { 
        alert('All Fields are required')
    }else if (inputPassword.value.length < 8) {
        alert("Password should be atleast 8 characters")
    }
    else if (inputPassword.value !== inputConfirmPassword.value) {
        alert("Password does not Match")
    }
    else if(checkbox.checked !== true){
     alert('agree to terms & conditions')
    }
    else if( dataBase.find((data)=> { return data.username === inputUsername.value}  )  ){
        alert('user already exists')
    }
    else if (dataBase.find((data)=> { return data.mail === inputEmail.value}  ) ){
        alert('email already exists')
    }
    else{
        button.innerHTML = `<div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>` 
        let userDetails = {
            username: inputUsername.value,
            mail: inputEmail.value,
            number: inputPhone.value,
            password: inputPassword.value,
        }
        
        dataBase.push(userDetails)
        localStorage.setItem('myDataBase', JSON.stringify(dataBase)) 
         
        setTimeout(()=> {
            button.innerHTML = 'Submit'
            alert('success')
            window.location.href = 'login.html' 
        } , 3000)

       
    
    console.log(inputEmail.value);
    console.log(dataBase);
    }  
}
inputPassword.type="password"

function showPassword() {
    // inputPassword.type ="text"
    // showButton.textContent = "Hide"
    inputPassword.type === "password" ? inputPassword.type = "text": inputPassword.type = "password"
    inputPassword.type === "password" ? showButton.textContent = "Show": showButton.textContent = "Hide"

}


// let add = (a,b) => {
//     let addition = a + b
//     console.log(addition);
//     return 'addition has taken place'
// }


// console.log(add(10,11));


