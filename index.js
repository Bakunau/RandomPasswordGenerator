const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
    "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

function randomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePasswords() {
    randomPassword1 = ""
    randomPassword2 = ""
    for (let i=0; i < 15; i++) {
        randomPassword1 += randomCharacter()
        randomPassword2 += randomCharacter()
    }
    return password1.textContent = randomPassword1, password2.textContent = randomPassword2
}
