// networkSimulator.ts

// This module simulates a global network power with block rewards every 10 minutes.

class NetworkSimulator {
    private interval: NodeJS.Timeout | null = null;
    private blockReward: number;
    private totalRewardDistributed: number = 0;
    private simulationTime: number = 0;

    constructor(blockReward: number) {
        this.blockReward = blockReward;
    }

    startSimulation() {
        if (this.interval) return;

        this.interval = setInterval(() => {
            this.simulationTime += 10; // Increment time by 10 minutes
            this.distributeBlockReward();
        }, 10 * 60 * 1000); // 10 minutes in milliseconds
    }

    stopSimulation() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    private distributeBlockReward() {
        this.totalRewardDistributed += this.blockReward;
        console.log(`Block reward of ${this.blockReward} has been distributed. Total distributed: ${this.totalRewardDistributed}`);
    }

    getTotalRewards() {
        return this.totalRewardDistributed;
    }

    getCurrentSimulationTime() {
        return this.simulationTime;
    }
}

// Example Usage
const simulator = new NetworkSimulator(6.25); // For example, Bitcoin block reward
simulator.startSimulation();

// To stop the simulation, call simulator.stopSimulation()
