import React, { useContext } from "react";
import "./Player.scss";
import IPlayer from "../../models/Player"
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import PlayStore from "../../stores/PlayStore";
import { GameStatus } from "../../models/GameStatus";
import { RockPaperScissors } from "../../models/RockPaperScissors";
import { gameWinsToWinMatch } from "../../assets/constants/gameWinsToWinMatch";

interface IPlayerProps {
    player: IPlayer;
}

function Player(props: IPlayerProps) {
    const { t } = useTranslation();
    const playStore = useContext(PlayStore);
    const { player } = props;
    const toWin = gameWinsToWinMatch;
    function onSelectSignClick(humanPlayerSelectedSign: RockPaperScissors) {
      playStore.runMatch(humanPlayerSelectedSign)
    }
    return(
        <div className="player-container">
            { player.isHuman ? <h2>{ t("you") }</h2> : <h2>{ t("computer") }</h2>}           
            { player.isHuman ? <p>{`${playStore.humanPlayerWins} / ${toWin}`}</p> : <p>{`${playStore.computerPlayerWins} / ${toWin}`}</p> }
            {
                player.isHuman ? (
                    <div className="buttons-container">
                        <button onClick={() => { onSelectSignClick(RockPaperScissors.ROCK) }}>{ t("rock") }</button>
                        <button onClick={() => { onSelectSignClick(RockPaperScissors.PAPER) }}>{ t("paper") }</button>
                        <button onClick={() => { onSelectSignClick(RockPaperScissors.SCISSORS) }}>{ t("scissors") }</button>
                    </div>
                ) :
                ("???")
            }
            { (player.isHuman && playStore.gameStatus === GameStatus.INITIAL) && <p>{ t("takeYourPick") }</p> }
            { (player.isHuman && playStore.gameStatus === GameStatus.FINISHED) && <p>{ t("youPicked") + t(RockPaperScissors[playStore.currentHumanPlayerSelectedSign as any].toLowerCase()) }</p> }
            { (!player.isHuman && playStore.gameStatus === GameStatus.INITIAL) && <p>{ t("yourOpponentIsReady") }</p> }
            { (!player.isHuman && playStore.gameStatus === GameStatus.FINISHED) && <p>{ t("yourOpponentPicked") + t(RockPaperScissors[playStore.currentComputerSelectedSign as any].toLowerCase()) }</p> }

            
        </div>
    );
}

export default observer(Player);    