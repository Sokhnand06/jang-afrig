const pays = [
{ cca3: "SEN", nom: "Sénégal", capitale: "Dakar" },
{ cca3: "MLI", nom: "Mali", capitale: "Bamako" },
{ cca3: "GHA", nom: "Ghana", capitale: "Accra" },
{ cca3: "KEN", nom: "Kenya", capitale: "Nairobi" },
{ cca3: "MAR", nom: "Maroc", capitale: "Rabat" }
];
function choisirAuHasard(tableau) {
const index = Math.floor(Math.random() * tableau.length);
return tableau[index];
}

// Exercice1: Moyenne d'une classe(forEach)
const etudiants = [
  { nom: "Awa", note: 14 },
  { nom: "Moussa", note: 9 },
  { nom: "Fatou", note: 16 },
  { nom: "Ibrahima", note: 11 },
  { nom: "Aïcha", note: 13 },
  { nom: "Cheikh", note: 8 },
  { nom: "Mariama", note: 15 },
  { nom: "Ousmane", note: 10 },
  { nom: "Bineta", note: 17 },
  { nom: "Lamine", note: 12 }
];

let somme = 0;
etudiants.forEach(e => {
  somme += e.note;
});

const moyenne = somme / etudiants.length;
console.log("Moyenne de la classe :", moyenne);

// Exercice2; Prix en euros
const prixFCFA = [5000, 10000, 25000, 656, 1312, 50000];

const prixEuros = prixFCFA.map(prix => prix / 656);

console.log("Prix en euros :", prixEuros);

//Exercice3:Les admis
const etudiants = [
  { nom: "Awa", note: 14 },
  { nom: "Moussa", note: 9 },
  { nom: "Fatou", note: 16 },
  { nom: "Ibrahima", note: 11 },
  { nom: "Aïcha", note: 13 },
  { nom: "Cheikh", note: 8 },
  { nom: "Mariama", note: 15 },
  { nom: "Ousmane", note: 10 },
  { nom: "Bineta", note: 17 },
  { nom: "Lamine", note: 12 }
];

const admis = etudiants.filter(e => e.note >= 10);

console.table(admis);

// Exercice4: Les capitales
const pays = [
  { nom: "Sénégal", capitale: "Dakar" },
  { nom: "France", capitale: "Paris" },
  { nom: "Mali", capitale: "Bamako" },
  { nom: "Maroc", capitale: "Rabat" },
  { nom: "Côte d'Ivoire", capitale: "Yamoussoukro" }
];

const capitales = pays.map((p) => p.capitale);

console.log(capitales);