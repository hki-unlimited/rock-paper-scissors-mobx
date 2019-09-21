import React, { useContext } from "react";
import "./Arena.scss";
import { observer } from "mobx-react-lite";
import Player from "../../models/Player"
import PlayStore from "../../stores/PlayStore";
import PlayerContainer from "../Player/Player";
import { useTranslation } from "react-i18next";
import { GameResult } from "../../models/GameResult";
import { MatchStatus } from "../../models/MatchStatus";
import { MatchResult } from "../../models/MatchResult";
import { gameWinsToWinMatch } from "../../assets/constants/gameWinsToWinMatch";

function Arena() {
    const { t } = useTranslation();
    const playStore = useContext(PlayStore);
    const human = new Player({ id: 1, isHuman: true });
    const computer = new Player({ id: 2, isHuman: false });
    return(
        <div className="arena-container">
            { playStore.matchStatus === MatchStatus.INITIAL &&
                (
                    <React.Fragment>
                        <h1 className="round-title">{ t("round") } {playStore.currentRound}</h1>
                        <div className="arena-players">
                            <PlayerContainer player={human}/>
                            <PlayerContainer player={computer}/>
                        </div>
                        { playStore.currentRound === 1 && <h2 className="first-round-placeholder">{t("toWin")} { gameWinsToWinMatch }</h2> } 
                        <h2 className="game-result">
                            { playStore.gameResult === GameResult.HUMAN_WON && t("gameResult.HUMAN_WON") }
                            { playStore.gameResult === GameResult.COMPUTER_WON && t("gameResult.COMPUTER_WON") }
                            { playStore.gameResult === GameResult.DRAW && t("gameResult.DRAW") }
                        </h2>
                    </React.Fragment>
                )
            }

            { playStore.matchStatus === MatchStatus.FINISHED &&
                (
                    <div className="match-result">
                        <p className="match-result-text">
                            { playStore.matchResult === MatchResult.HUMAN_WON && t("matchResult.HUMAN_WON") }
                            { playStore.matchResult === MatchResult.COMPUTER_WON && t("matchResult.COMPUTER_WON") }
                        </p>
                        <p>{t("youPlayed")} { playStore.currentRound - 1 } {t("rounds")}</p>
                        <p>{t("youScored")} { playStore.humanPlayerWins } </p>
                        <p>{t("yourOpponentScored")} { playStore.computerPlayerWins }</p>
                        <p>{t("toWin")} { gameWinsToWinMatch }</p>
                        <button
                            className="play-again"
                            onClick={() => { playStore.resetValues(); }}>
                            {t("playAgain")}
                        </button>
                    </div>
                )
            }            
            
        </div>
    );
}

export default observer(Arena);