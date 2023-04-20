/*eslint-disable*/
import React, { Fragment, useEffect, useState } from 'react';
import { CardBody } from './SimpleCardComponent/CardBody';
import { BasicModal } from './SimpleCardComponent/CardModal';

export function MainCardBody() {
    const [text, setText] = useState(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    );
    const [basicModal, setBasicModal] = useState(false);
    const [tempText, setTempText] = useState('');

    useEffect(() => {
        setTempText(text);
    }, []);

    const openBasicModal = () => {
        setBasicModal(!basicModal);
    };
    const handleAndSaveChanges = (e, prevVals) => {
        setTempText(e.target.value || prevVals);
        if (e.currentTarget.id === 'saveSimpleChanges') {
            setText(tempText);
            openBasicModal();
        }
    };
    return (
        <Fragment>
            <BasicModal
                basicModal={basicModal}
                openBasicModal={openBasicModal}
                tempText={tempText}
                handleAndSaveChanges={handleAndSaveChanges}
            />
            <CardBody text={text} openBasicModal={openBasicModal} />
        </Fragment>
    );
}
