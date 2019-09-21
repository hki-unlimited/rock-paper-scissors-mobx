import React from 'react';
import { useTranslation } from 'react-i18next';
import './LocaleChanger.scss';

function LocaleChanger() {
    const { i18n } = useTranslation();
    const sorted = i18n.languages.sort();

    return (
        <div className="dbs-locale-changer">
            { sorted.map((locale, index) =>  (
                locale === i18n.language ?
                <div key={index} className="dbs-locale-changer-locale-active">
                    {locale.toUpperCase()}
                </div> :
                <div key={index} className="dbs-locale-changer-locale"
                onClick={() => {i18n.changeLanguage(locale);}}>
                    {locale.toUpperCase()}
                </div>
            ))}
        </div>
    );
}

export default LocaleChanger;