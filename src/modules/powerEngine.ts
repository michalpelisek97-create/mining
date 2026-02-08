class DualPowerSystem {
    private temporaryPower: number;
    private permanentPower: number;
    private bonusPower: number;
    private networkPower: number;

    constructor() {
        this.temporaryPower = 0;
        this.permanentPower = 0;
        this.bonusPower = 0;
        this.networkPower = 0;
    }

    public addTemporaryPower(amount: number): void {
        this.temporaryPower += amount;
        this.checkPowerLevels();
    }

    public addPermanentPower(amount: number): void {
        this.permanentPower += amount;
        this.checkPowerLevels();
    }

    public addBonusPower(amount: number): void {
        this.bonusPower += amount;
        this.checkPowerLevels();
    }

    public setNetworkPower(amount: number): void {
        this.networkPower = amount;
        this.checkPowerLevels();
    }

    private checkPowerLevels(): void {
        // Logic to check power levels and take actions accordingly
        console.log(`Temporary Power: ${this.temporaryPower}`);
        console.log(`Permanent Power: ${this.permanentPower}`);
        console.log(`Bonus Power: ${this.bonusPower}`);
        console.log(`Network Power: ${this.networkPower}`);
    }
}

export default DualPowerSystem;