import React from 'react';
import './MainLogo.scss';
import { useTranslation } from "react-i18next";

function MainLogo() {
  const { t } = useTranslation();
  return (
      <h1 className="game-title">{t("gameTitle")}</h1>
  );
}

export default MainLogo;
