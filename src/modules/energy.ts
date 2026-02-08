class Battery {
    constructor(capacity) {
        this.capacity = capacity; // Maximum capacity of the battery
        this.charge = 0; // Current charge level
        this.maintenanceNeeded = false; // Maintenance flag
    }

    chargeBattery(amount) {
        if (this.charge + amount > this.capacity) {
            this.charge = this.capacity; // Charge to maximum capacity
        } else {
            this.charge += amount; // Increase charge
        }
    }

    dischargeBattery(amount) {
        if (this.charge - amount < 0) {
            this.charge = 0; // Prevent discharging below zero
        } else {
            this.charge -= amount; // Decrease charge
        }
    }

    checkMaintenance() {
        // Simple maintenance check condition
        if (this.charge < this.capacity * 0.1) {
            this.maintenanceNeeded = true;
        } else {
            this.maintenanceNeeded = false;
        }
    }

    performMaintenance() {
        if (this.maintenanceNeeded) {
            this.charge = this.capacity; // Recharge during maintenance
            this.maintenanceNeeded = false; // Reset maintenance flag
            console.log('Battery maintenance performed.');
        } else {
            console.log('No maintenance needed.');
        }
    }
}

// Example usage
const battery = new Battery(100);

// Charging the battery
battery.chargeBattery(50);
console.log(`Current charge: ${battery.charge}`); // Output: 50

// Discharging the battery
battery.dischargeBattery(30);
console.log(`Current charge: ${battery.charge}`); // Output: 20

// Checking maintenance
battery.checkMaintenance();
if (battery.maintenanceNeeded) {
    console.log('Maintenance needed!');
    battery.performMaintenance();
} else {
    console.log('Battery is in good condition.');
}