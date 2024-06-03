// Password Length Slider
document.querySelector('#password-length').addEventListener('input', function() {
document.querySelector('#length-value').textContent = this.value;
});
//

// Password Strength
let passwordStrength = document.querySelector("#password-strength")
//

// Password Generator
let passwordEl = document.querySelector("#generated-password")
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")

function generatePassword() {
    const characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

    if (option1.checked === true && option2.checked === true && option3.checked === true) {
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...upperCase, ...numbers, ...symbols);
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        passwordEl.textContent = password
        passwordStrength.textContent = "Strength: " + "💪🙆🥳💕"
    } else if (option1.checked === true && option2.checked === true && option3.checked === false) {
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...upperCase, ...numbers);
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        passwordEl.textContent = password
        passwordStrength.textContent = "Strength: " + "🥰👍"
    } else if (option1.checked === true && option2.checked === false && option3.checked === true) {    
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...upperCase, ...symbols);
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        passwordEl.textContent = password
        passwordStrength.textContent = "Strength: " + "🤩👍"
    } else if (option1.checked === true && option2.checked === false && option3.checked === false) {        
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...upperCase);
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        passwordEl.textContent = password
        passwordStrength.textContent = "Strength: " + "🤨👎"
    } else if (option1.checked === false && option2.checked === true && option3.checked === true) {      
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...numbers, ...symbols);
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        passwordEl.textContent = password
        passwordStrength.textContent = "Strength: " + "🤩👍"
    } else if (option1.checked === false && option2.checked === true && option3.checked === false) {      
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...numbers);
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        passwordEl.textContent = password
        passwordStrength.textContent = "Strength: " + "🤔👎"
    } else if (option1.checked === false && option2.checked === false && option3.checked === true) {               
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...symbols);
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        passwordEl.textContent = password
        passwordStrength.textContent = "Strength: " + "😎"
    } else {
        const passwordLength = document.getElementById('password-length').value 

        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        passwordEl.textContent = password
        passwordStrength.textContent = "Strength: " + "🤦👎💀"
    }
}
// 

// Copy Button
function copy() {
    let copyText = document.querySelector("#generated-password")
    copyText.select()
    document.execCommand("copy")
    passwordEl.textContent = "Password copied!"
}
// 