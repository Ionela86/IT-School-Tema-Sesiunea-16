// 1. Creeaza un obiect, care sa descrie o masina, avand urmatoarele proprietati: marca, model, an, pret, numar km.

let auto = {
    marca: "Dacia",
    model: "Duster",
    an: 2022,
    pret: 20000,
    numarkm: 15,
}
console.log(auto.marca);
console.log(auto.model);
console.log(auto.an);
console.log(auto.pret);
console.log(auto.numarkm);
// Fa urmatoarele operatii pe obiect:
// 1.1. Modifica numarul de km, dandu-le, bineinteles, o valoare mai mica
auto.numarkm = 10;

if (auto.numarkm === 15) {
    console.log("Numarul de km este 15");
} else{
    console.log("Numarul de km s-a schimbat in 10");
}
// 1.2 Aduaga o proprietate noua, description, cu valoarea aferenta. E sansa ta sa fii creativ.

let object1 = {
    culoare: "rosu",
    locuri: 5,
}

let object2 = {
    culoare: "verde",
    
}

if (object1 === object2) {
    console.log ("Culoarea este rosu");

} else {
    console.log ("Culoarea este verde");
}
const obj = Object.assign (object1, object2);

console.log(obj);
console.log(object1);
console.log(object2);
// 1.3 Sterge descrierea din obiect.
delete object2.culoare;
console.log(object2.culoare);

// 2. Fa o functie, numita tuneCar, care primeste ca parametru un obiect, reprezentand o masina. Functia returneaza un obiect nou, fara a il modifica pe cel primit ca parametru. Obiectul returnat de functie are de doua ori mai putini km, iar pretul este cu 50% mai mare. La apelul functiei, paseaza ca valoare pentru parametru obiectul creat mai sus.

const tuneCar = (car) => {
    let car2 = Object.assign({}, car);
    car2.km /= 2;
    car2.pret *= 1.5;
    return car2;
  };
  
  console.log(tuneCar(auto));
  console.log(auto);

// 3. Folosind metodele existente pe obiectul Date, afiseaza consola ora curenta, sub urmatorul format: HH:MM:SS (ex: 21:07:34).


  console.log (new Date().toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', second: '2-digit', hour12:false} ));