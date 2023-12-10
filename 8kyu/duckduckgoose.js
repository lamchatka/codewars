// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name


// SOLUTION:
function duckDuckGoose(players, goose) {
    while (players.length < goose) {
     goose = goose - players.length;
   }
   return players[goose-1].name;
}