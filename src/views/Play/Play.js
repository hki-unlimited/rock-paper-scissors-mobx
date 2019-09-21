import React from 'react';
import { useTranslation } from "react-i18next";
import Arena from "../../components/Arena/Arena";

function PlayView() {
  const { t } = useTranslation();
  return (
    <div className="main-view main-view-player">
        <Arena/>
    </div>
  );
}

export default PlayView;
