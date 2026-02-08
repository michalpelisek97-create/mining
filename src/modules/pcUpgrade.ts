// PC Level Upgrade System Based on Game Wins

class PCUpgrade {
    constructor() {
        this.level = 1;    // Starting level
        this.winsForNextLevel = 5; // Wins required to upgrade level
        this.wins = 0; // Total wins
    }

    winGame() {
        this.wins++; 
        console.log(`Total Wins: ${this.wins}`);
        this.checkUpgrade();
    }

    checkUpgrade() {
        if (this.wins >= this.level * this.winsForNextLevel) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level++; 
        console.log(`Congratulations! You leveled up to Level ${this.level}`);
    }

    getLevel() {
        return this.level;
    }
}

// Example usage
const myPC = new PCUpgrade();
myPC.winGame(); // Simulate a game win
myPC.winGame(); // Simulate another game win

// Add more wins to test leveling up
myPC.wins = 10; // Simulating that player has won 10 games
myPC.checkUpgrade();
