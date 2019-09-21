import React from 'react';
import { useTranslation } from "react-i18next";

function HistoryView() {
  const { t } = useTranslation();
  return (
    <div className="main-view main-view-history">
        <p>Testing, history view</p>
    </div>
  );
}

export default HistoryView;
