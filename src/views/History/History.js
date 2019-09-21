import React from 'react';
import { useTranslation } from "react-i18next";

function HistoryView() {
  const { t } = useTranslation();
  return (
    <div className="main-view main-view-history">
        <p>{t("historySample")}</p>
    </div>
  );
}

export default HistoryView;
