import React, { Fragment } from 'react';
import MainCard from 'components/MainCard';
import { MainCardBody } from 'components/Aboutus/SimpleCard/index';
import { LogoDetail } from './Logo/Logo';
import { AssignMentsMethodAndStatesForTabs } from './Tabs/AssignMentsMethodAndStatesForTabs';

export default function AboutUsPage() {
    return (
        <Fragment>
            <MainCard contentSX={{ p: 2.25 }}>
                <h1>About Us</h1>
                <LogoDetail />
                <MainCardBody />
                <AssignMentsMethodAndStatesForTabs />
            </MainCard>
        </Fragment>
    );
}
