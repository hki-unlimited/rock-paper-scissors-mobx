export interface IPlayer {
    id: number;
    isHuman: boolean;
}

export default class Player implements IPlayer {
    constructor (player: IPlayer) {
        this.id = player.id;
        this.isHuman = player.isHuman;
    }
    id: number;
    isHuman: boolean;
}