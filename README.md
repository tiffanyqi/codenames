# CODENAMES

## TODO:
- Model for a game and keeping state (MVP)
- Create two states of the same board, one for codemasters and one for everyone else (MVP)
- [x] Dictionary of all the words on any given board
- Create rooms for different games to go on at once
- History of moves
- Chat between codemasters and amongst all teams
- Spectators

## GAMEPLAY:
- Two codemasters know the state of the board
- Codemasters are chosen based on the first two joiners
- All players talk amongst themselves
- Codemasters have a set input where it shows the word and number
- Two teams take turns determining which card fits the codemaster's description
- Cards are either red, blue, white, or a bomb
- The first team to 8/9 of their color is the winner
- Choosing the same color allows the team to guess again
- Choosing white or the opposite color ends a turn
- Choosing the bomb is a loss / the other team wins

## EXAMPLE BOARD:
regular players:
 =======   =====   ========   ========
| puppy | | cat | | pillow | | window |
 =======   =====   ========   ========
 =======   =====   ========   ========
| glass | | pot | | cellos | | player |
 =======   =====   ========   ========

codemaster:
 =BLUE==   =RED=   =WHITE==   ==BOMB==
| puppy | | cat | | pillow | | window |
 =======   =====   ========   ========
 =WHITE=   =RED=   ==BLUE==   ==BLUE==
| glass | | pot | | cellos | | player |
 =======   =====   ========   ========
