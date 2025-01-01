const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"
];

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const PASSWORD_LENGTH = 15;

// Function to generate a random password of a given length
function generateRandomPassword(length) {
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
}

// Function to set passwords in the DOM
function generatePasswords() {
    password1.textContent = generateRandomPassword(PASSWORD_LENGTH);
    password2.textContent = generateRandomPassword(PASSWORD_LENGTH);
}
