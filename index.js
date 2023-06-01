let version = "1.1.1"

//const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
//"/"];

const lettersLowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const lettersUppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const numbers =["0","1","2","3","4","5","6","7","8","9"];

const symbols =["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let useUppercaseBox = document.getElementById("useUppercase-box");
let useNumbersBox = document.getElementById("useNumbers-box");
let useSymbolsBox = document.getElementById("useSymbols-box");

let passwordOneEl = document.getElementById("passwordOne-el")
let passwordTwoEl = document.getElementById("passwordTwo-el")
let copyPasswordOneBtn = document.getElementById("copyPasswordOne-btn")
let copyPasswordTwoBtn = document.getElementById("copyPasswordTwo-btn")

let versionEl = document.getElementById("version-el").textContent = "Version " + version

function generatePasswords() {
    let passwordLength = document.getElementById("passwordLength-sel").value;
    let characters = []

    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""

    for ( i = 0; i < lettersLowercase.length; i++) {
        characters.push(lettersLowercase[i])
    }

    if ( useUppercaseBox.checked ) {
        for ( i = 0; i < lettersUppercase.length; i++) {
            characters.push(lettersUppercase[i])
        }   
    }
    
    if ( useNumbersBox.checked ) {
        for ( i = 0; i < numbers.length; i++) {
            characters.push(numbers[i])
        }   
    }
    
    if ( useSymbolsBox.checked ) {
        for ( i = 0; i < symbols.length; i++) {
            characters.push(symbols[i])
        }   
    }

    for ( i = 0; i < passwordLength; i++ ) {
        let randomIndex = Math.floor( Math.random() * characters.length )
        passwordOneEl.textContent += characters[randomIndex]
    }
    for ( i = 0; i < passwordLength; i++ ) {
        let randomIndex = Math.floor( Math.random() * characters.length )
        passwordTwoEl.textContent += characters[randomIndex]
    }
}

function copyPasswordOne() {
    let copyText = document.getElementById("passwordOne-el")
    navigator.clipboard.writeText(copyText.textContent);
    copyPasswordOneBtn.textContent = "Password copied!"
    copyPasswordTwoBtn.textContent = "Copy password"
}

function copyPasswordTwo() {
    let copyText = document.getElementById("passwordTwo-el")
    navigator.clipboard.writeText(copyText.textContent);
    copyPasswordTwoBtn.textContent = "Password copied!"
    copyPasswordOneBtn.textContent = "Copy password"
}