$(document).ready(function() {

// Pokemon HP/Attk/Counter
    var pokemon = [bulbasaur = {
                        
                    name: "Bulbasaur",
                    healthPoints: 120,
                    initialAttackPower: 8,
                    attackPower: 8,
                    counterAttackPower: 2,
                    isPokemonOne: false,
                    isPokemonTwo: false,
                },

                    charmander = {
                    name: "Charmander",
                    healthPoints: 100,
                    initialAttackPower: 9,
                    attackPower: 9,
                    counterAttackPower: 5,
                    isPokemonOne: false,
                    isPokemonTwo: false,
                },
                    
                    squirtle = {
                    name: "Squirtle",
                    healthPoints: 150,
                    initialAttackPower: 2,
                    attackPower: 2,
                    counterAttackPower: 20,
                    isPokemonOne: false,
                    isPokemonTwo: false,
                },

                    mewtwo = {
                    name: "Mewtwo",
                    healthPoints: 100,
                    initialAttackPower: 9,
                    attackPower: 9,
                    counterAttackPower: 5,
                    isPokemonOne: false,
                    isPokemonTwo: false,
                },

                    pikachu = {
                    name: "Pikachu",
                    healthPoints: 140,
                    initialAttackPower: 6,
                    attackPower: 7,
                    counterAttackPower: 8,
                    isPokemonOne: false,
                    isPokemonTwo: false,
                }];

// Player/Opponent
    var player;
    var opponent;
// Enemies Remaining
    var enemiesRemaining = pokemon.length -1;

// Game Start
    gameStart = false;

// Audio Queues
    // Bulbasaur
        var pickedBulbasaur = new Audio ("assets/Audio/bulbasaur.mp3");
    // Charmander
        var pickedCharmander = new Audio ("assets/Audio/charmander.mp3");
    // Squirtle
        var pickedSquirtle = new Audio ("assets/Audio/squirtle.mp3");
    //Mewtwo
        var pickedMewtwo = new Audio ("assets/Audio/mewtwo.mp3");
    //Pikachu
        var pickedPikachu = new Audio ("assets/Audio/pikachu.mp3");

    //Victory
        var victory = new Audio ("assets/Audio/victory.mp3");
        var perPokemonVictory = new Audio ("assets/Audio/perPokemonVictory.mp3")
    // Attack
        var tackle = new Audio ("assets/Audio/tackle.mp3")

// Pokemon Selection
    pokemonOneSelected = false;
    pokemonTwoSelected = false;

    playerSelect();
    startBattle();

        function playerSelect() {
            $("#bulbasaur").on("click", function() {
                if (pokemonOneSelected === false) {
                        console.log("bulbasaur is first player");
                    pickedBulbasaur.play();
                    $("#bulbasaur").appendTo("#player-fight-stadium");
                    $("#player-pokemon-name").text(bulbasaur.name);
                    $("#player-pokemon-type").text("Grass/Poision");
                    $("#player-pokemon-hp").text(bulbasaur.healthPoints);
                    pokemonOneSelected = true;
                    bulbasaur.isPokemonOne = true;
                    player = bulbasaur;
                    $("#bulbasuar").addClass('flipped');
                    pickedBulbasaur.play();
                    setTimeout(enemySelect, 1000 *2);
                        console.log("player one is " + pokemonOneSelected);
                };
            });

            $("#charmander").on("click", function() {
                if (pokemonOneSelected === false) {
                        console.log("charmander is first player");
                    pickedCharmander.play();
                    $("#charmander").appendTo("#player-fight-stadium");
                    $("#player-pokemon-name").text(charmander.name);
                    $("#player-pokemon-type").text("Fire");
                    $("#player-pokemon-hp").text(charmander.healthPoints);
                    pokemonOneSelected = true;
                    charmander.isPokemonOne = true;
                    player = charmander;
                    $("#charmander").addClass('flipped');
                    pickedCharmander.play();
                    setTimeout(enemySelect, 1000 *2);
                        console.log("player one is " + pokemonOneSelected);
                };
            });

            $("#squirtle").on("click", function() {
                if (pokemonOneSelected === false) {
                    console.log("squirtle is first player");
                    pickedSquirtle.play();
                    $("#squirtle").appendTo("#player-fight-stadium");
                    $("#player-pokemon-name").text(squirtle.name);
                    $("#player-pokemon-type").text("Water");
                    $("#player-pokemon-hp").text(squirtle.healthPoints);
                    pokemonOneSelected = true;
                    squirtle.isPokemonOne = true;
                    player = squirtle;
                    $("#squirtle").addClass('flipped');
                    pickedSquirtle.play();
                    setTimeout(enemySelect, 1000 *2);
                        console.log("player one is " + pokemonOneSelected);
                };
            });

            $("#mewtwo").on("click", function() {
                if (pokemonOneSelected === false) {
                        console.log("mewtwo is first player");
                    pickedMewtwo.play();
                    $("#mewtwo").appendTo("#player-fight-stadium");
                    $("#player-pokemon-name").text(mewtwo.name);
                    $("#player-pokemon-type").text("Psychic");
                    $("#player-pokemon-hp").text(mewtwo.healthPoints);
                    pokemonOneSelected = true;
                    mewtwo.isPokemonOne = true;
                    player = mewtwo;
                    $("#mewtwo").addClass('flipped');
                    pickedMewtwo.play();
                    setTimeout(enemySelect, 1000 *2);
                        console.log("player one is " + pokemonOneSelected);
                };
            });

            $("#pikachu").on("click", function() {
                if (pokemonOneSelected === false) {
                    console.log("pikachu is first player");
                    pickedPikachu.play();
                    $("#pikachu").appendTo("#player-fight-stadium");
                    $("#player-pokemon-name").text(pikachu.name);
                    $("#player-pokemon-type").text("Electric");
                    $("#player-pokemon-hp").text(pikachu.healthPoints);
                    pokemonOneSelected = true;
                    pikachu.isPokemonOne = true;
                    player = pikachu;
                    $("#pikachu").addClass('flipped');
                    pickedPikachu.play();
                    setTimeout(enemySelect, 1000 *2);
                        console.log("player one is " + pokemonOneSelected);
                };
            });

        };

        function enemySelect() {
            // HTML - Select Your Pokemon
            $("#starter-pokemon-text").text("Select Your Second Pokemon")
            //
            $("#bulbasaur").on("click", function() {
                if (pokemonTwoSelected === false && bulbasaur.isPokemonOne === false) {
                        console.log("bulbasaur is second player");
                    pickedBulbasaur.play();
                    $("#bulbasaur").appendTo("#enemy-fight-stadium");
                    $("#enemy-pokemon-name").text(bulbasaur.name);
                    $("#enemy-pokemon-type").text("Grass, Poision");
                    $("#enemy-pokemon-hp").text(bulbasaur.healthPoints);
                    pokemonTwoSelected = true;
                    isPokemonTwo = true;
                    gameStart = true;
                    opponent = bulbasaur;
                    $("#starter-pokemon-text").text("");
                        console.log("player two is " + pokemonTwoSelected);
                };
            });

            $("#charmander").on("click", function() {
                if (pokemonTwoSelected === false && charmander.isPokemonOne === false) {
                        console.log("charmander is second player");
                    pickedCharmander.play();
                    $("#charmander").appendTo("#enemy-fight-stadium");
                    $("#enemy-pokemon-name").text(charmander.name);
                    $("#enemy-pokemon-type").text("Fire");
                    $("#enemy-pokemon-hp").text(charmander.healthPoints);
                    pokemonTwoSelected = true;
                    isPokemonTwo = true;
                    gameStart = true;
                    opponent = charmander;
                    $("#starter-pokemon-text").text("");
                        console.log("player two is " + pokemonTwoSelected);
                };
            });

            $("#squirtle").on("click", function() {
                if (pokemonTwoSelected === false && squirtle.isPokemonOne === false) {
                        console.log("squirtle is second player");
                    pickedSquirtle.play();
                    $("#squirtle").appendTo("#enemy-fight-stadium");
                    $("#enemy-pokemon-name").text(squirtle.name);
                    $("#enemy-pokemon-type").text("Water");
                    $("#enemy-pokemon-hp").text(squirtle.healthPoints);
                    pokemonTwoSelected = true;
                    isPokemonTwo = true;
                    gameStart = true;
                    opponent = squirtle;
                    $("#starter-pokemon-text").text("");
                        console.log("player two is " + pokemonTwoSelected);
                };
            });

            $("#mewtwo").on("click", function() {
                if (pokemonTwoSelected === false && mewtwo.isPokemonOne === false) {
                        console.log("mewtwo is second player");
                    pickedMewtwo.play();
                    $("#mewtwo").appendTo("#enemy-fight-stadium");
                    $("#enemy-pokemon-name").text(mewtwo.name);
                    $("#enemy-pokemon-type").text("Psychic");
                    $("#enemy-pokemon-hp").text(mewtwo.healthPoints);
                    pokemonTwoSelected = true;
                    isPokemonTwo = true;
                    gameStart = true;
                    opponent = mewtwo;
                    $("#starter-pokemon-text").text("");
                        console.log("player two is " + pokemonTwoSelected);
                };
            });

            $("#pikachu").on("click", function() {
                if (pokemonTwoSelected === false && pikachu.isPokemonOne === false) {
                        console.log("pikachu is second player");
                    pickedPikachu.play();
                    $("#pikachu").appendTo("#enemy-fight-stadium");
                    $("#enemy-pokemon-name").text(pikachu.name);
                    $("#enemy-pokemon-type").text("Electric");
                    $("#enemy-pokemon-hp").text(pikachu.healthPoints);
                    pokemonTwoSelected = true;
                    isPokemonTwo = true;
                    gameStart = true;
                    opponent = pikachu;
                    $("#starter-pokemon-text").text("");
                        console.log("player two is " + pokemonTwoSelected);
                };
            });

        };

        // Check progress of the game. If no eneimes remain, gameWin, else, go to enemy select screen

        function checkProgress() {
            if (enemiesRemaining === 0) {
                gameWin();
            }
            else {
                gameStart = false;
                    if (enemiesRemaining === 2) {
                        perPokemonVictory.play();
                    }
                    else if (enemiesRemaining === 1) {
                        perPokemonVictory.play();
                }

                $("#enemy-fight-stadium").empty();
                $("#enemy-pokemon-name").text("");
                $("#enemy-pokemon-type").text("");
                $("#enemy-pokemon-hp").text("");
                setTimeout(function() {pokemonOneSelected = false}, 1000 * 2.8);
                setTimeout(function() {$("#starter-pokemon-text").text("Select Your Pokemon")}, 1000 * 2.8);
                    console.log("pokemon two selected is " + pokemonTwoSelected)
            }
        }

        function attack() {
            opponent.healthPoints = opponent.healthPoints - player.attackPower;
            $("#enemy-pokemon-hp").text(opponent.healthPoints);
                console.log("oponent HP is " + opponent.healthPoints);
        }

        function counterAttack() {
            player.healthPoints = player.healthPoints - opponent.counterAttackPower;
            $("#player-pokemon-hp").text(player.healthPoints);
                console.log("player HP is " + player.healthPoints);
                console.log("enemy HP is " +  opponent.counterAttackPower);
            if (player.healthPoints <= 0) {
                gameLose();
            }
        }

        function increaseAttackPower() {
            player.attackPower = player.attackPower + player.initialAttackPower;
                console.log("player attack power is " + player.attackPower);
        }

    // RESET GAME
        function gameReset() {
            [bulbasaur = {
                        
                name: "Bulbasaur",
                healthPoints: 120,
                initialAttackPower: 8,
                attackPower: 8,
                counterAttackPower: 2,
                isPokemonOne: false,
                isPokemonTwo: false,
            },

                charmander = {
                name: "Charmander",
                healthPoints: 132,
                initialAttackPower: 5,
                attackPower: 7,
                counterAttackPower: 2,
                isPokemonOne: false,
                isPokemonTwo: false,
            },
                
                squirtle = {
                name: "Squirtle",
                healthPoints: 120,
                initialAttackPower: 5,
                attackPower: 8,
                counterAttackPower: 2,
                isPokemonOne: false,
                isPokemonTwo: false,
            },

                mewtwo = {
                name: "Mewtwo",
                healthPoints: 180,
                initialAttackPower: 10,
                attackPower: 8,
                counterAttackPower: 2,
                isPokemonOne: false,
                isPokemonTwo: false,
            },

                pikachu = {
                name: "Pikachu",
                healthPoints: 140,
                initialAttackPower: 6,
                attackPower: 7,
                counterAttackPower: 8,
                isPokemonOne: false,
                isPokemonTwo: false,
            }];

            pokemonOneSelected = false;
            pokemonTwoSelected = false;
            enemiesRemaining = pokemon.length -1;
            $("#starter-pokemon-text").text("Select Your Pokemon");
    //game over
            $("#game-over-container").html("");
            $("#game-over-text-container").html("");
    // reset player
            $("#player-pokemon-name").text("");
            $("#player-pokemon-type").text("");
            $("#player-pokemon-hp").text("");
    // reset enemy
            $("#enemy-pokemon-name").text("");
            $("#enemy-pokemon-type").text("");
            $("#enemy-pokemon-hp").text("");

            $("#player-fight-stadium").html("");
            $("#enemy-fight-stadium").html("");

            $(".starter-selection").html("");

            $("<img class='character' id='bulbasaur' alt='bulbasaur' src='assets/Images/bulbasaur.png' />").appendTo(".starter-section");
            $("<img class='character' id='charmander' alt='charmander' src='assets/Images/charmander.png' />").appendTo(".starter-section");
            $("<img class='character' id='squirtle' alt='squirtle' src='assets/Images/squirtle.png' />").appendTo(".starter-section");
            $("<img class='character' id='mewtwo' alt='mewtwo' src='assets/Images/mewtwo.png' />").appendTo(".starter-section");
            $("<img class='character' id='pikachu' alt='pikachu' src='assets/Images/pikachu.png' />").appendTo(".starter-section");
                console.log("game has reset");
                playerSelect();
        }

        function gameWin() {
            victory.play();
            $("#enemy-pokemon-hp").text(0);
                console.log("you win");
                // You lose mp3 here
            gameStart = false;
            victory.pause();
            setTimeout(function(){$("#game-over-text-container").html("GAME OVER YOU WIN")
            });
            setTimeout(gameReset, 1000 * 8);

        }

        function gameLose() {
            $("#enemy-pokemon-hp").text(0);
                console.log("you win");
                // You lose mp3 here
            gameStart = false;
            setTimeout(function(){$("#game-over-text-container").html("GAME OVER YOU LOSE")
            });
            setTimeout(gameReset, 1000 * 8);

        }

    // Attack button after both p1/p2 is selected

    function startBattle() {
        $("#attack-button").on("click", function() {
            console.log("button pressed");
            if (gameStart === true) {
                attack();
                increaseAttackPower()
                    if (opponent.healthPoints <=0) {
                        enemiesRemaining--;
                        console.log("Number of Pokemon left is " + enemiesRemaining);
                        checkProgress();
                    }
                    else {
                        counterAttack();
                        tackle.play();
                    }
                }
            });
    }
});