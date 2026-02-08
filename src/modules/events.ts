// Seasonal Events with Event Pass System and Progression Rewards

class SeasonalEvent {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.eventPass = null;
        this.progressionRewards = {};
    }

    startEvent() {
        console.log(`Event ${this.name} has started!`);
    }

    endEvent() {
        console.log(`Event ${this.name} has ended.`);
    }

    createEventPass(levels) {
        this.eventPass = levels;
    }

    addProgressionReward(level, reward) {
        this.progressionRewards[level] = reward;
    }

    claimReward(level) {
        if (this.progressionRewards[level]) {
            console.log(`Claiming reward for level ${level}: ${this.progressionRewards[level]}`);
        } else {
            console.log(`No reward for level ${level}.`);
        }
    }
}

// Example usage:
const winterEvent = new SeasonalEvent('Winter Wonderland', '2026-12-01 to 2027-01-01');
winterEvent.createEventPass(['Bronze', 'Silver', 'Gold']);
winterEvent.addProgressionReward('Bronze', '50 Gems');
winterEvent.addProgressionReward('Silver', '100 Gems');
winterEvent.addProgressionReward('Gold', 'Exclusive Skins');
winterEvent.startEvent();