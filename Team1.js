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

// TEAM 1 Franklin Nwagu

// ex 5 Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name)

function searchGame() {
  return team1.filter(
    (team1) => team1.favoriteVideoGame === "League of Legends" || team1.favoriteVideoGame === "LOL"
  );
}
console.log(searchGame);
