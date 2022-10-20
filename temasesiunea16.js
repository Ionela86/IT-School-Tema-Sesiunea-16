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

auto.descriere = "Dacia Duster este o familie de automobile produse și comercializate în comun de producătorul francez Renault și filiala sa din România Dacia din 2010.";
console.log (auto);

// 1.3 Sterge descrierea din obiect.
delete auto.descriere;
console.log(auto.descriere);

// 2. Fa o functie, numita tuneCar, care primeste ca parametru un obiect, reprezentand o masina. Functia returneaza un obiect nou, fara a il modifica pe cel primit ca parametru. Obiectul returnat de functie are de doua ori mai putini km, iar pretul este cu 50% mai mare. La apelul functiei, paseaza ca valoare pentru parametru obiectul creat mai sus.

function tuneCar(car) {
    let newCar = Object.assign ({}, auto);
    newCar.numarkm = newCar.numarkm/2;
    newCar.pret = newCar.pret + newCar.pret/2;
    return newCar
}

console.log (tuneCar(auto));

  
// 3. Folosind metodele existente pe obiectul Date, afiseaza consola ora curenta, sub urmatorul format: HH:MM:SS (ex: 21:07:34).


  console.log (new Date().toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', second: '2-digit', hour12:false} ));