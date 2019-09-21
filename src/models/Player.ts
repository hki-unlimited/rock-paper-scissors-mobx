export interface IPlayer {
    id: number;
    //name: string;
    isHuman: boolean;
}

export default class Player implements IPlayer {
    constructor (player: IPlayer) {
        this.id = player.id;
        //this.name = player.name;
        this.isHuman = player.isHuman;
    }
    id: number;
    //name: string;
    isHuman: boolean;
}