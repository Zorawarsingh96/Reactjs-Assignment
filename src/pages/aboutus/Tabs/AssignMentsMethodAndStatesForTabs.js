import { Fragment, useState, useEffect } from 'react';
import { AssignmentTabs } from './MainTabs';
import { BasicModal } from 'components/Aboutus/SimpleCard/SimpleCardComponent/CardModal';

export function AssignMentsMethodAndStatesForTabs() {
    var [dummyText, setDummyText] = useState(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    var [dummyText2, setDummyText2] = useState(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    var [basicModal, setBasicModal] = useState(false);
    var [tempText, setTempText] = useState('');
    var [tempText2, setTempText2] = useState('');
    var [findWhichText, setFindWhichText] = useState('');

    useEffect(() => {
        console.log('Checol', findWhichText);
        setTempText2(dummyText2);
        setTempText(dummyText);
    }, []);

    const openBasicModal = (e) => {
        // console.log('Checol', basicModal);
        if (!basicModal) {
            setFindWhichText(e.currentTarget.id);
        }
        setBasicModal(!basicModal);
    };
    const handleAndSaveChanges = (e, prevVals) => {
        if (findWhichText === 'privacy') {
            setTempText(e.target.value || prevVals);
        } else if (findWhichText === 'terms') {
            setTempText2(e.target.value || prevVals);
        }

        if (e.currentTarget.id === 'saveSimpleChanges') {
            if (findWhichText === 'privacy') {
                setDummyText(tempText);
            } else if (findWhichText === 'terms') {
                setDummyText2(tempText2);
            }
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
                tempText2={tempText2}
                findWhichText={findWhichText}
            />
            <AssignmentTabs dummyText={dummyText} openBasicModal={openBasicModal} dummyText2={dummyText2} />
        </Fragment>
    );
}
