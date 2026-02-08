// playerService.ts

interface Player {
    id: number;
    name: string;
    score: number;
}

class PlayerService {
    private players: Player[] = [];

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    getPlayer(id: number): Player | undefined {
        return this.players.find(player => player.id === id);
    }

    getAllPlayers(): Player[] {
        return this.players;
    }

    updatePlayer(id: number, updatedData: Partial<Player>): void {
        const player = this.getPlayer(id);
        if (player) {
            Object.assign(player, updatedData);
        }
    }

    removePlayer(id: number): void {
        this.players = this.players.filter(player => player.id !== id);
    }
}

export default new PlayerService();
