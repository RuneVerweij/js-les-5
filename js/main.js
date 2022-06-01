let firstName = "Rune";
console.log(firstName);
let lastName = "Verweij";
console.log(lastName);

let bothName = `${firstName} ${lastName}`;
console.log(bothName);

const bothNameUpper = bothName.toUpperCase();
console.log(bothNameUpper);
const bothNameLower = bothName.toLowerCase();
console.log(bothNameLower);

const namePrint = document.querySelector('#NamePrint');

for (let i = 1; i < 11; i++) {
    namePrint.innerHTML += `${bothName} <br>`;
}
namePrint.innerHTML += "<br>";
let number = 1;
while (number < 11) {
    namePrint.innerHTML += `${bothName} <br>`;
    number++;
}

let password = prompt("Password");
let passwordCase = password.toLowerCase();
if(passwordCase == "h@ck3d"){
    alert("Correct");
}
if(passwordCase == ""){
    alert("You've failed, Game over!");
}
else{
    alert("Incorrect");
}
let password2 = prompt("Password again");
if(password2 == "H@ck3d"){
    alert("Correct");
}
if(password2 == ""){
    alert("You've failed, Game over!");
}
else{
    alert("Incorrect");
}


const peopleArray = [
    {
        Voornaam: "Rune",
        Achternaam: "Verweij",
        Klas: "T1N",
        Leeftijd: "16"
    },
    {
        Voornaam: "Jian",
        Achternaam: "Ren",
        Klas: "T1N",
        Leeftijd: "18"
    },
    {
        Voornaam: "Spongebob",
        Achternaam: "Squarepants",
        Klas: "T1P",
        Leeftijd: "35"
    },
    {
        Voornaam: "John",
        Achternaam: "Doe",
        Klas: "T1Z",
        Leeftijd: "18"
    },
    {
        Voornaam: "Živka",
        Achternaam: "Mercury",
        Klas: "T18",
        Leeftijd: "20"
    }
];
console.log(peopleArray)
for (let i = 1; i < 6; i++) {
    console.log(peopleArray[i-1].Voornaam, peopleArray[i-1].Achternaam);
    document.querySelector("#CardHolder").innerHTML += 
    `<div class="card">
    <h2>${peopleArray[i-1].Voornaam}</h2>
    <div class="container">
        <h4>${peopleArray[i-1].Achternaam}</h4>
        <p>${peopleArray[i-1].Klas}</p>
    </div>
  </div>`
}