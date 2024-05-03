let dataBase = JSON.parse(localStorage.getItem('myDataBase')) || []
    let inputUsername = document.getElementById('inputUsername')
    let inputEmail = document.getElementById('inputEmail')
    let inputPhone = document.getElementById('inputPhone')
    let inputPassword = document.getElementById('inputPassword')
    let inputConfirmPassword = document.getElementById('inputConfirmPassword')
    let showButton = document.getElementById('showButton')

function submitDetails() {
    
    if (inputUsername.value === "" || inputEmail.value === "" || inputPhone.value === "" || inputPassword.value === "") {
        alert('All Fields are required')
    }else if (inputPassword.value.length < 8) {
        alert("Password should be atleast 8 characters")
    }
    else if (inputPassword.value !== inputConfirmPassword.value) {
        alert("Password does not Match")
    }
    else{
        let userDetails = {
            username: inputUsername.value,
            mail: inputEmail.value,
            number: inputPhone.value,
            password: inputPassword.value,
        }
        
        dataBase.push(userDetails)
        localStorage.setItem('myDataBase', JSON.stringify(dataBase))   
        alert("Successful")
    
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