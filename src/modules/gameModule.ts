// src/modules/gameModule.ts

// Game types enumeration
enum GameType {
    TYPE_1 = 'Puzzle',
    TYPE_2 = 'Action',
    TYPE_3 = 'Strategy',
    TYPE_4 = 'Adventure',
    TYPE_5 = 'Sports',
    TYPE_6 = 'Card',
    TYPE_7 = 'Trivia',
    TYPE_8 = 'Simulation',
    TYPE_9 = 'Role-Playing',
    TYPE_10 = 'Board'
}

// Difficulty levels enumeration
enum DifficultyLevel {
    EASY = 'Easy',
    MEDIUM = 'Medium',
    HARD = 'Hard',
    EXPERT = 'Expert',
    MASTER = 'Master',
    NOVICE = 'Novice',
    ADVANCED = 'Advanced',
    INTERMEDIATE = 'Intermediate',
    CHALLENGE = 'Challenge',
    ELITE = 'Elite'
}

// Game class representing a mini-game
class MiniGame {
    type: GameType;
    difficulty: DifficultyLevel;

    constructor(type: GameType, difficulty: DifficultyLevel) {
        this.type = type;
        this.difficulty = difficulty;
    }

    startGame(): void {
        console.log(`Starting ${this.type} game on ${this.difficulty} level.`);
        // Game logic goes here
    }
}

// Example of creating a new game
const newGame = new MiniGame(GameType.TYPE_1, DifficultyLevel.EASY);
newGame.startGame();
