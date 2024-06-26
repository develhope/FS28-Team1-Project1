const team1 = [
  {
    name: "Franklin",
    surname: "Nwagu",
    age: 21,
    city: "Roma",
    hobby: "Playing football",
    favoriteFood: "Carbonara",
    favoriteVideoGame: "League of Legends",
    favoriteFilm: "Avengers infity war",
    favoriteBook: "Harry Potter",
    petName: "blacky",
  },

  {
    name: "Fiamma",
    surname: "Ferrone",
    age: 19,
    city: "Roma",
    hobby: "Musica",
    favoriteFood: "Amatriciana",
    favoriteVideoGame: " ",
    favoriteFilm: "Spirit Cavallo Selvaggio",
    favoriteBook: "1984",
    petName: "Nessie",
  },

  {
    name: "Adamo",
    surname: "Fall",
    age: 31,
    city: "Este",
    hobby: "Calcio",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Fifa",
    favoriteFilm: "Batman",
    favoriteBook: "Harry Potter",
    petName: "Puppy",
  },

  {
    name: "Giovanni",
    surname: "Vitolo",
    age: 29,
    city: "Eboli",
    hobby: "",
    favoriteFood: "Cannelloni",
    favoriteVideoGame: "Final Fantasy X",
    favoriteFilm: "Shutter Island",
    favoriteBook: "",
    petName: "Sasha",
  },
];

// Team 1 : ADAMO FALL

// Punto 3- Print the team middle age.

function printMid(team1) {
  const ageSum = team1.reduce((sum, team) => sum + team.age, 0);
  return ageSum / team1.length;
}

const average = printMid(team1);
console.log(`L'età media del team è: ${average}`);

// Punto 4- Print who has a pet (name petName)

console.log(
  team1
    .filter((member) => member.petName !== "")
    .map(
      (member) =>
        `${member.name} ${member.surname} has a pet named ${member.petName}`
    )
    .join("\n")
);
