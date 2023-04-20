import { Fragment, useState } from 'react';
import BasicCard from './Card/InterectivList';
// import { ContactMain } from './ContactInfoTab/ContactMain';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function MainInfoTab(props) {
    return (
        <Fragment>
            <Row xs={1} md={2} className="g-4">
                <Col xs={1} md={4} className="g-4">
                    <BasicCard
                        basicName="contact"
                        topContactVals={props.contactVals[0]}
                        length={props.contactVals.length}
                        showAndHideSideBar={props.showAndHideSideBar}
                    />
                </Col>
                <Col xs={1} md={4} className="g-4">
                    <BasicCard basicName="address" showAndHideSideBar={props.showAndHideSideBar} addressStates={props.addressStates} />
                </Col>
                <Col xs={1} md={4} className="g-4">
                    <BasicCard showAndHideSideBar={props.showAndHideSideBar} basicName="hofos" />
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4" style={{ marginTop: '2%' }}>
                <Col xs={1} md={4} className="g-4">
                    <BasicCard showAndHideSideBar={props.showAndHideSideBar} basicName="spcialmedia" />
                </Col>
                <Col xs={1} md={4} className="g-4">
                    <BasicCard basicName="statement" showAndHideSideBar={props.showAndHideSideBar} statements={props.statements} />
                </Col>
            </Row>
        </Fragment>
    );
}
