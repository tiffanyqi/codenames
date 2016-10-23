# CODENAMES

## TODO:
- Create rooms for different games to go on at once
- Model for a game and keeping state
- Dictionary of all the words on any given board
- Create two states of the same board, one for codemasters and one for everyone else

## GAMEPLAY:
- Two codemasters know the state of the board
- Two teams take turns determining which card fits the codemaster's description
- Cards are either red, blue, white, or a bomb
- The first team to 8/9 of their color is the winner
- Choosing the same color allows the team to guess again
- Choosing white or the opposite color ends a turn
- Choosing the bomb is a loss / the other team wins

## EXAMPLE BOARD:
/1
 =======   =====   ========   ========
| puppy | | cat | | pillow | | window |
 =======   =====   ========   ========
 =======   =====   ========   ========
| glass | | pot | | cellos | | player |
 =======   =====   ========   ========

/1/codemaster
 =BLUE==   =RED=   =WHITE==   ==BOMB==
| puppy | | cat | | pillow | | window |
 =======   =====   ========   ========
 =WHITE=   =RED=   ==BLUE==   ==BLUE==
| glass | | pot | | cellos | | player |
 =======   =====   ========   ========

