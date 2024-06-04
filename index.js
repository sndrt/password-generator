// Password Length Slider
document.querySelector('#password-length').addEventListener('input', function() {
document.querySelector('#length-value').textContent = this.value;
});
//

// Password Strength
let passwordStrength = document.querySelector("#password-strength")
//

// Password Generator
let password1El = document.querySelector("#generated-password-1")
let password2El = document.querySelector("#generated-password-2")
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
        let password1 = "";
        let password2 = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password1 += characters[randomIndex];
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password2 += characters[randomIndex];
        }
        password1El.textContent = password1
        password2El.textContent = password2
        passwordStrength.textContent = "Strength: " + "💪🙆🥳💕"
    } else if (option1.checked === true && option2.checked === true && option3.checked === false) {
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...upperCase, ...numbers);
        let password1 = "";
        let password2 = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password1 += characters[randomIndex];
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password2 += characters[randomIndex];
        }
        password1El.textContent = password1
        password2El.textContent = password2
        passwordStrength.textContent = "Strength: " + "🥰👍"
    } else if (option1.checked === true && option2.checked === false && option3.checked === true) {    
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...upperCase, ...symbols);
        let password1 = "";
        let password2 = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password1 += characters[randomIndex];
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password2 += characters[randomIndex];
        }
        password1El.textContent = password1
        password2El.textContent = password2
        passwordStrength.textContent = "Strength: " + "🤩👍"
    } else if (option1.checked === true && option2.checked === false && option3.checked === false) {        
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...upperCase);
        let password1 = "";
        let password2 = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password1 += characters[randomIndex];
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password2 += characters[randomIndex];
        }
        password1El.textContent = password1
        password2El.textContent = password2
        passwordStrength.textContent = "Strength: " + "🤨👎"
    } else if (option1.checked === false && option2.checked === true && option3.checked === true) {      
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...numbers, ...symbols);
        let password1 = "";
        let password2 = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password1 += characters[randomIndex];
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password2 += characters[randomIndex];
        }
        password1El.textContent = password1
        password2El.textContent = password2
        passwordStrength.textContent = "Strength: " + "🤩👍"
    } else if (option1.checked === false && option2.checked === true && option3.checked === false) {      
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...numbers);
        let password1 = "";
        let password2 = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password1 += characters[randomIndex];
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password2 += characters[randomIndex];
        }
        password1El.textContent = password1
        password2El.textContent = password2
        passwordStrength.textContent = "Strength: " + "🤔👎"
    } else if (option1.checked === false && option2.checked === false && option3.checked === true) {               
        const passwordLength = document.getElementById('password-length').value 
        characters.push(...symbols);
        let password1 = "";
        let password2 = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password1 += characters[randomIndex];
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password2 += characters[randomIndex];
        }
        password1El.textContent = password1
        password2El.textContent = password2
        passwordStrength.textContent = "Strength: " + "😎"
    } else {
        const passwordLength = document.getElementById('password-length').value 
        let password1 = "";
        let password2 = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password1 += characters[randomIndex];
        }
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password2 += characters[randomIndex];
        }
        password1El.textContent = password1
        password2El.textContent = password2
        passwordStrength.textContent = "Strength: " + "🤦👎💀"
    }
}
// 

// Copy Buttons
function copy1() {
    let copyText = document.querySelector("#generated-password-1")
    copyText.select()
    document.execCommand("copy")
    password1El.textContent = "Password copied!"
}

function copy2() {
    let copyText = document.querySelector("#generated-password-2")
    copyText.select()
    document.execCommand("copy")
    password2El.textContent = "Password copied!"
}