import React, { Fragment, useState} from 'react';
import OutlinedCard from './Info/ContactCard';
import AddressCard from './Info/AddressCard';
import {
    View,
    Grid,
    useTheme,
  } from "@aws-amplify/ui-react";
import EditSideBar from './Info/EditInfo';
import EditAddressSideBar from './Info/EditAddressInfo';
import SocailMediaCard from './Info/SocaialMediCard';
import SocialMediaSideBar from './Info/SocialMediaInfo';
import StatementOfCompanyCard from './Info/StatementOfCompanyCard';
import StatementsSideBar from './Info/StatementInfo';
import HoursOfOperationCard from './Info/HoursOfOperationCard';
import HoursOfOperationSideBar from './Info/HoursOfOperationInfo';
import EditEmailAndPhoneNumberSideBar from './Info/EditEmailAndPhoneNumber';
import EditStements from './Info/EditStatements';

export function InfoPannel() {
    const { tokens } = useTheme();
    var [contact, setContact]:any[] = useState([
        {emailId:'test1@gmail.com',phNo:122345},
        {emailId:'test2@gmail.com',phNo:122345},
        {emailId:'test3@gmail.com',phNo:122345}
    ]);
    var dummyStatements = ''
    const [statements, setStatements] = useState([
        {name:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was"},
        {name:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was "}
    ])
    var [addressStates,setAdressStates] = useState({
        specificAddress: 'c-1/245',
        locality:'GIDC Makrapur',
        nearestLandMark:'Vadodara',
        city:'Gujrat',
        pincode: 3600
    })
    var [emailInputField, setEmailInputField] = useState([
        {email:''}
    ]);
    var [phInputField, setPhInputField] = useState([
        {phNo:''}
    ])
    var [dummyIndex, setDummyIndex] = useState(0);
    var [tempStatementIndex, setTempStatementIndex]:any = useState(0);

    var [showSideMenu, setSideMenu] = useState(false);
    var [showAddressMenu, setAddressMenu] = useState(false);
    var [showSocialMedia, setSocialMedia] = useState(false);
    var [showStatement, setStatement] = useState(false);
    var [hoursOfOperations, setHoursOfOperations] = useState(false);
    var [openEditPhoneEmailPopUp, setOpenEditPhoneEmailPopUp] = useState(false);
    var [openEditStements, setOpenEditStements] = useState(false);

    const handleFormChange = (index:any, event:any) => {
        var dummyContact = [...contact];
        var tempArray:string[] =[];
        var re = /,/gi; 
        if(event.target.id === 'email'){
            let data = [...emailInputField];
            
            data[index][event.target.name] = event.target.value;
            setEmailInputField(data);
            emailInputField.forEach(e => {
              tempArray.push(e.email);
            })
            dummyContact[dummyIndex].emailId = tempArray.toString().replace(re, "/\n");
            setContact(dummyContact);
            tempArray = [];
            dummyContact = [];
            
        }
        else{
            let data = [...phInputField];
            data[index][event.target.name] = event.target.value;
            setPhInputField(data);
            phInputField.forEach(e => {
               tempArray.push(e.phNo);
            })
            dummyContact[dummyIndex].phNo = tempArray.toString().replace(re, "/\n");
            setContact(dummyContact);
            tempArray = [];
            dummyContact = [];
        }
    }
    const addFields = (e:any) => {
        let newfield;
        if(e.target.id === 'email'){
            newfield = { email: '' }
            setEmailInputField([...emailInputField, newfield])
        }
        else{
            newfield = {phNo: ''}
            setPhInputField([...phInputField, newfield])
        } 
    }

    const editStatements = (event:any) => {
         console.log('EEe',event.target.value,tempStatementIndex);

         if(tempStatementIndex !== undefined){
            var tempStatements = [...statements];
            tempStatements[tempStatementIndex].name = event.target.value;
            setStatements(tempStatements);
         }
         else{
            console.log('Else',);
            dummyStatements = event.target.value
            
         }
    }
    const addStatements = () =>{
        setOpenEditStements(false)
        setStatements([...statements,{
            name: dummyStatements,
        }])
    }
    const showAndHideSideBar = (e:any) => {
        console.log('RRRR', e.currentTarget.id);
        switch (e.currentTarget.id) {
            case "contact":
                setSideMenu(!showSideMenu);
                break;
            case "address":
                setAddressMenu(!showAddressMenu);
                break;
            case "social":
                setSocialMedia(!showSocialMedia);
                break;
            case "statements":
                setStatement(!showStatement);
                break;
            case "hours":
                setHoursOfOperations(!hoursOfOperations);
                break;
            default :
                break;
        }   
    }
    const showEditPhoneAndEmail = (index:number, event:any) => {
        console.log('showEditPhoneAndEmail',index,event.target.name)
        if(index !== null){
            if(!openEditPhoneEmailPopUp){
                setEmailInputField([{email:''}]);
                setPhInputField([{phNo: ''}])
            }      
            setDummyIndex(index);
        }
            setOpenEditPhoneEmailPopUp(!openEditPhoneEmailPopUp);
    }
    const showStatementsPopup = (index:number, event:any) => {
        if(index !== null){
            setTempStatementIndex(index);
        }
        else{
            setTempStatementIndex(undefined);
        }
        console.log('showEditPhoneAndEmail',event.target.name);
        setOpenEditStements(!openEditStements)
    }
    
    const EditAddressVaalues = (e:any) => {
        setAdressStates({
            ...addressStates,
            [e.target.id]: e.target.value
        })
    }
    const constDeleteContactVal = (event:any,index:number) => {
        console.log('EEE2',event.currentTarget.id);
        if(event.currentTarget.id === 'statementDelete'){
            var temp = [...statements];
            temp.splice(index, 1);
            setStatements(temp);
        }
        else{
            var TempArray = [...contact];
            console.log('EEE',event);
            TempArray.splice(index, 1);
            setContact(TempArray)
        }
         
    }
    const contactTile = 'Contact';
    const address = 'Address';
    const socailMedia = 'Social Media & Links'
        return(
            <Fragment>
                <div className='col'>
                    <EditSideBar
                      showAndHideSideBar={showAndHideSideBar}
                      showSideMenu={showSideMenu}
                      contact={contact}
                      showEditPhoneAndEmail={showEditPhoneAndEmail}
                      constDeleteContactVal={constDeleteContactVal}
                    />
                    <EditAddressSideBar
                    showAddressSideMenu={showAndHideSideBar}
                    showAddressMenu={showAddressMenu}
                    EditAddressVaalues={EditAddressVaalues}
                    />
                    <SocialMediaSideBar
                       showSocialMediaAndLinks={showAndHideSideBar}
                       showSocialMedia={showSocialMedia}
                    />
                    <StatementsSideBar
                      showStatemetsSection = {showAndHideSideBar}
                      showStatement={showStatement}
                      statements={statements}
                      showStatementsPopup={showStatementsPopup}
                      constDeleteContactVal={constDeleteContactVal}
                    />
                    <HoursOfOperationSideBar
                     hoursOfOperations={hoursOfOperations}
                     showHoursOfOperationSideBar={showAndHideSideBar}
                    />
                    <EditEmailAndPhoneNumberSideBar
                    showEditPhoneAndEmail={showEditPhoneAndEmail}
                    openEditPhoneEmailPopUp={openEditPhoneEmailPopUp}
                    emailInputField={emailInputField}
                    phInputField={phInputField}
                    handleFormChange={handleFormChange}
                    addFields={addFields}
                    />
                    <EditStements
                    openEditStements={openEditStements}
                    showStatementsPopup={showStatementsPopup}
                    statements={statements}
                    editStatements={editStatements}
                    tempStatementIndex={tempStatementIndex}
                    addStatements={addStatements}
                    />
                <Grid
                    templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }}
                    templateRows={{ base: "repeat(4, 10rem)", large: "repeat(3, 8rem)" }}
                    gap={tokens.space.xl}
                    >
                        <View rowSpan={{ base: 2, large: 1 }}>
                        <OutlinedCard 
                        contact={contact[0]}
                        contactTile={contactTile}
                        contactCount={contact.length}
                        showAndHideSideBar={showAndHideSideBar}
                        />
                        </View>
                        <View rowSpan={{ base: 2, large: 1 }}>
                        <AddressCard
                        address={address}
                        addressStates={addressStates}
                        showAddressSideMenu={showAndHideSideBar}
                        showAddressMenu={showAddressMenu}
                        />
                        </View>
                        <View rowSpan={{ base: 2, large: 1 }}>
                        <HoursOfOperationCard
                         showHoursOfOperationSideBar={showAndHideSideBar}
                        />
                        </View>
                        <View rowSpan={{ base: 2, large: 1 }}>
                        <SocailMediaCard
                         socailMedia={socailMedia}
                         showSocialMediaAndLinks={showAndHideSideBar}
                        />
                        </View>
                        <View rowSpan={{ base: 2, large: 1 }}>
                        <StatementOfCompanyCard
                         showStatemetsSection = {showAndHideSideBar}
                         statements={statements[0]}
                         statementsCount = {statements.length}
                        />
                        </View>
                </Grid>
                
                </div>
            </Fragment>
        );
}