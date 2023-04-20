import { AddressMainModal } from './AddressInfoTab/AddressMainModal';
import { ContactModal } from './ContactInfoTab/ContactMain';
import EditContactModal from './ContactInfoTab/EditContactModal';
import { MainInfoTab } from './MainInfoTab';
import { useState } from 'react';
import SocialMediaSideBar from './SocialMediaInfoTab/SocialMediaSideBar';
import StatementsSideBar from './StatementInfoTab/StatementSidebar';
import StatementEditModal from './StatementInfoTab/StatementEditModal';

export function HandleInfoTab() {
    var [contactVals, setContactVals] = useState([
        { emailId: 'test1@gmail.com/\nnssest1@fmail.com', phNo: '+91 7830022321 / 982222122' },
        { emailId: 'test2@gmail.com/\nnssest1@fmail.com', phNo: '+91 7830022321 / 982222122' },
        { emailId: 'test3@gmail.com/\nnssest1@fmail.com', phNo: '+91 7830022321 / 982222122' }
    ]);
    var [addressStates, setAdressStates] = useState({
        specificAddress: 'C-1/351/4',
        locality: 'GIDC Makrapur',
        nearestLandMark: 'Vadodara',
        city: 'Gujrat',
        country: 'India',
        pincode: 390010
    });
    const [statements, setStatements] = useState([
        {
            name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was"
        },
        {
            name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was "
        }
    ]);
    var [showContactModal, setContactModal] = useState(false);
    var [emailInputField, setEmailInputField] = useState([{ email: '' }]);
    var [phInputField, setPhInputField] = useState([{ phNo: '' }]);
    var [openEditPhoneEmailPopUp, setOpenEditPhoneEmailPopUp] = useState(false);
    var [showAddressMenu, setAddressMenu] = useState(false);
    var [showSocialMedia, setSocialMedia] = useState(false);
    var [showStatement, setStatement] = useState(false);
    var [hoursOfOperations, setHoursOfOperations] = useState(false);
    var [openEditStements, setOpenEditStements] = useState(false);
    var [tempStatementIndex, setTempStatementIndex] = useState(0);
    var [dummyIndex, setDummyIndex] = useState(0);
    var dummyStatements = '';

    const showAndHideSideBar = (e) => {
        switch (e.currentTarget.id) {
            case 'contact':
                setContactModal(!showContactModal);
                break;
            case 'address':
                setAddressMenu(!showAddressMenu);
                break;
            case 'spcialmedia':
                setSocialMedia(!showSocialMedia);
                break;
            case 'statement':
                setStatement(!showStatement);
                break;
            case 'hofos':
                setHoursOfOperations(!hoursOfOperations);
                break;
            default:
                break;
        }
    };
    const showEditPhoneAndEmail = (index, event) => {
        console.log('showEditPhoneAndEmail', index, event.target.name);
        if (index !== null) {
            if (!openEditPhoneEmailPopUp) {
                setEmailInputField([{ email: '' }]);
                setPhInputField([{ phNo: '' }]);
            }
            setDummyIndex(index);
        }
        setOpenEditPhoneEmailPopUp(!openEditPhoneEmailPopUp);
    };
    const addFields = (e) => {
        let newfield;
        if (e.target.id === 'email') {
            newfield = { email: '' };
            setEmailInputField([...emailInputField, newfield]);
        } else {
            newfield = { phNo: '' };
            setPhInputField([...phInputField, newfield]);
        }
    };
    const handleFormChange = (index, event) => {
        var dummyContact = [...contactVals];
        var tempArray = [];
        var re = /,/gi;
        if (event.target.id === 'email') {
            let data = [...emailInputField];

            data[index][event.target.name] = event.target.value;
            setEmailInputField(data);
            emailInputField.forEach((e) => {
                tempArray.push(e.email);
            });
            dummyContact[dummyIndex].emailId = tempArray.toString().replace(re, '/\n');
            setContactVals(dummyContact);
            tempArray = [];
            dummyContact = [];
        } else {
            let data = [...phInputField];
            data[index][event.target.name] = event.target.value;
            setPhInputField(data);
            phInputField.forEach((e) => {
                tempArray.push(e.phNo);
            });
            dummyContact[dummyIndex].phNo = tempArray.toString().replace(re, '');
            setContactVals(dummyContact);
            tempArray = [];
            dummyContact = [];
        }
    };
    const constDeleteContactVal = (event, index) => {
        console.log('EEE2', event.currentTarget.id);
        if (event.currentTarget.id === 'statementDelete') {
            var temp = [...statements];
            temp.splice(index, 1);
            setStatements(temp);
        } else {
            var TempArray = [...contactVals];
            TempArray.splice(index, 1);
            setContactVals(TempArray);
        }
    };
    const showStatementsPopup = (index, event) => {
        if (index !== null) {
            setTempStatementIndex(index);
        } else {
            setTempStatementIndex(undefined);
        }
        console.log('showEditPhoneAndEmail', event.target.name);
        setOpenEditStements(!openEditStements);
    };
    const addStatements = () => {
        console.log('Add Statements');
        setOpenEditStements(false);
        setStatements([
            ...statements,
            {
                name: dummyStatements
            }
        ]);
    };
    const editStatements = (event) => {
        console.log('EEe', event.target.value, tempStatementIndex);

        if (tempStatementIndex !== undefined) {
            var tempStatements = [...statements];
            tempStatements[tempStatementIndex].name = event.target.value;
            setStatements(tempStatements);
        } else {
            console.log('Else');
            dummyStatements = event.target.value;
        }
    };
    const EditAddressVaalues = (e) => {
        setAdressStates({
            ...addressStates,
            [e.target.id]: e.target.value
        });
    };
    return (
        <>
            <EditContactModal
                showEditPhoneAndEmail={showEditPhoneAndEmail}
                openEditPhoneEmailPopUp={openEditPhoneEmailPopUp}
                emailInputField={emailInputField}
                handleFormChange={handleFormChange}
                addFields={addFields}
                phInputField={phInputField}
            />
            <ContactModal
                showEditPhoneAndEmail={showEditPhoneAndEmail}
                showAndHideSideBar={showAndHideSideBar}
                showContactModal={showContactModal}
                contactVals={contactVals}
                constDeleteContactVal={constDeleteContactVal}
            />
            <StatementsSideBar
                showStatemetsSection={showAndHideSideBar}
                showStatement={showStatement}
                statements={statements}
                showStatementsPopup={showStatementsPopup}
                constDeleteContactVal={constDeleteContactVal}
            />
            <StatementEditModal
                openEditStements={openEditStements}
                showStatementsPopup={showStatementsPopup}
                statements={statements}
                editStatements={editStatements}
                tempStatementIndex={tempStatementIndex}
                addStatements={addStatements}
            />
            <SocialMediaSideBar showSocialMediaAndLinks={showAndHideSideBar} showSocialMedia={showSocialMedia} />
            <AddressMainModal
                EditAddressVaalues={EditAddressVaalues}
                showAddressSideMenu={showAndHideSideBar}
                showAddressMenu={showAddressMenu}
            />
            <MainInfoTab
                statements={statements.length}
                contactVals={contactVals}
                addressStates={addressStates}
                showAndHideSideBar={showAndHideSideBar}
            />
        </>
    );
}
