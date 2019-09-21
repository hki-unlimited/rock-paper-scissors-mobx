import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router';
import './NonMatchingRouteView.scss';

interface INonMatchingRouteViewProps extends RouteComponentProps<any> {

}

function NonMatchingRouteView(props: INonMatchingRouteViewProps) {
    const { t } = useTranslation();
    return(
        <div className="db-location-not-found-page">
            {t('noMatchFoundFor')} {props.location.pathname}
        </div>
    );
}

export default withRouter(NonMatchingRouteView);