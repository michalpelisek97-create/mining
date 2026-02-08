// Type definitions for CloneCoin game engine

type Coin = {
    value: number;
    color: string;
};

type Player = {
    id: string;
    score: number;
    coinsCollected: Coin[];
};

type GameState = {
    players: Player[];
    currentRound: number;
    totalRounds: number;
};

interface GameEngine {
    startGame(): void;
    endGame(): void;
    addPlayer(player: Player): void;
    updateGameState(state: GameState): void;
}