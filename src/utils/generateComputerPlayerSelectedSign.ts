import { RockPaperScissors } from "../models/RockPaperScissors";
import { generateRandomInteger } from "./generateRandomNumber";

export function generateComputerPlayerSelectedSign() {
    const sign = generateRandomInteger(0,2);
    return RockPaperScissors[sign] ? sign : null;
}